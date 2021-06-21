import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import toast from 'react-hot-toast';
import swal from 'sweetalert';
import { UserContext } from '../../../App';
import TableSpinner from '../TableSpinner/TableSpinner';

const ManageService = () => {
    const { loggedInUser: { email } } = useContext(UserContext);
    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get('https://moto-repair.herokuapp.com/all-services')
            .then(res => {
                setServices(res.data);
            })
            .catch(error => toast.error(error.message))
    }, [])

    const restrictPermission = id => {
        let matchedID = false;
        for (let i = 0; i < 6; i++) {
            const { _id } = services[i];
            if (id === _id) {
                matchedID = true;
            }
        }
        if (email === "admin@test.gmail" && matchedID) {
            return true;
        }
        return false;
    }

    const handleUpdateService = (id) =>{
        if (restrictPermission(id)) {
            return swal("Permission restriction!", "As a test-admin, you don't have permission to update 6 core services. But you can update your added services.", "info");
        }else{
            return swal("Permission restriction!", "This feature will coming soon...", "info");
        }
    }

    const handleDeleteService = id => {
        if (restrictPermission(id)) {
            return swal("Permission restriction!", "As a test-admin, you don't have permission to delete 6 core services. But you can delete your added services.", "info");
        }

        swal({
            title: "Are you sure?",
            text: "Are you sure you want to delete this service?",
            icon: "warning",
            buttons: [true, "Yes"],
            dangerMode: true,
        }).then(wantDelete => {
            if (wantDelete) {
                const loading = toast.loading('Deleting...Please wait!');
                const removedServices = services.filter(item => item._id !== id);
                axios.delete(`https://moto-repair.herokuapp.com/service-delete/${id}`)
                    .then(res => {
                        toast.dismiss(loading);
                        if (res.data) {
                            setServices(removedServices)
                            return swal("Successfully Deleted!", "Your service has been successfully deleted.", "success");
                        }
                        swal("Failed!", "Something went wrong! Please try again.", "error", { dangerMode: true });
                    })
                    .catch(err => {
                        toast.dismiss(loading);
                        swal("Failed!", "Something went wrong! Please try again.", "error", { dangerMode: true })
                    })
            }
        });
    }

    return (
            <Container>
                <div className="shadow p-5 bg-white" style={{ borderRadius: "15px" }}>
                    {
                        services.length > 0 ?
                        <Table  className='table-style' hover responsive>
                            <thead  className="bg-light">
                                <tr>
                                    <th>Sl. No</th>
                                    <th>Service</th>
                                    <th>Price</th>
                                    <th className="text-center">Action</th>
                                </tr>
                            </thead>
                            {
                                services.map((service, index) => {
                                return (
                                    <tbody key={service._id} style={{ fontWeight: "500" }}>
                                        <tr>
                                            <td>{index +1 }</td>
                                            <td>{service.name}</td>
                                            <td>৳ {service.price}</td>
                                            <td className="text-center">
                                                <Button variant="outline-success" className="p-1 mb-0" onClick={() => handleUpdateService(service._id)}>
                                                    <FontAwesomeIcon icon={faEdit} className="mx-1" />
                                                </Button>
                                                <Button variant="outline-danger" className="p-1 ml-3 mb-0"onClick={() => handleDeleteService(service._id)}>
                                                    <FontAwesomeIcon icon={faTrash} className="mx-1" />
                                                </Button>
                                            </td>
                                        </tr>
                                    </tbody>  )})
                            }
                        </Table> : <TableSpinner />
                    }
                </div>
            </Container>
    );
};

export default ManageService;