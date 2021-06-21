import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import toast from 'react-hot-toast';
import swal from 'sweetalert';
import { UserContext } from '../../../App';
import TableSpinner from '../TableSpinner/TableSpinner';
import './BookingList.css';


const BookingList = () => {
    const { loggedInUser } = useContext(UserContext);
    const [orders, setOrders] = useState([]);

    
    const restrictPermission = id => {
        let matchedID = false;
        for (let i = 0; i < 1; i++) {
            const { _id } = orders[i];
            if (id === _id) {
                matchedID = true;
            }if (loggedInUser  && matchedID) {
                return true;
            }
        }
        return false;
    }


    useEffect(() => {
        axios.get('https://moto-repair.herokuapp.com/orderedByEmail?email='+loggedInUser.email)
            .then(res => {
                setOrders(res.data);
            })
            .catch(error => toast.error(error.message))
    }, [loggedInUser.email])

    const handleDeleteService = (id) =>{
        if (restrictPermission(id)) {
            return swal("Permission restriction!", "As your first order, you don't have permission to Cancel it. But you can cancel your other orders.", "info");
        }

        swal({
            title: "Are you sure?",
            text: "Are you sure you want to Cancel Your Order?",
            icon: "warning",
            buttons: [true, "Yes"],
            dangerMode: true,
        }).then(wantDelete => {
            if (wantDelete) {
                const loading = toast.loading('Deleting...Please wait!');
                const removedServices = orders.filter(item => item._id !== id);
                axios.delete(`https://moto-repair.herokuapp.com/cancel-order/${id}`)
                    .then(res => {
                        toast.dismiss(loading);
                        if (res.data) {
                            setOrders(removedServices)
                            return swal("Successfully Deleted!", "Your Order has been successfully deleted.", "success");
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
                        orders.length >0  ? 
                        <Table className='table-style' hover responsive >
                            <thead className="bg-light ">
                                <tr>
                                    <th>Sl. No</th>
                                    <th>Name</th>
                                    <th>Service</th>
                                    <th>Time</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                                {
                                    orders.map((order, index) => {
                                        return (
                                            <tbody key={order._id} style={{ fontWeight: "500" }}>
                                                <tr>
                                                    <td>{index+1}</td>
                                                    <td>{order.name}</td>
                                                    <td>{order.order.name}</td>
                                                    <td>{order.time}</td>
                                                    <td >
                                                        <span className={order.status.toLowerCase()}>{order.status}</span>
                                                    </td>
                                                    <td>
                                                        <Button variant="outline-danger" className="p-1 ml-3 mb-0"onClick={()=> handleDeleteService(order._id)}>
                                                            <FontAwesomeIcon icon={faTrash} className="mx-1" />
                                                        </Button>
                                                    </td>
                                                </tr>
                                            </tbody> ) })
                                }
                        </Table> : <TableSpinner />
                    }
                 </div>
          </Container>
    );
};

export default BookingList;