import React from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt, faRandom } from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';
import swal from 'sweetalert';
import { useForm} from 'react-hook-form';


const AddService = () => {
    const {register, handleSubmit} = useForm();

    return (
        <section className='add-service'>
            <Form className='w-100'>
                <div className='py-5 mx-auto mt-5 bg-white from-main' style={{ borderRadius: "15px", maxWidth: '85rem' }}>
                    <Form.Row  className="justify-content-center">
                        <Form.Group as={Col} md={5} sm={12} className='mr-md-5' >
                            <Form.Label style={{ fontWeight: 'bold'}}>Service Title</Form.Label>
                            <Form.Control 
                                type="text" 
                                // defaultValue={editService ? editService.title : ""}
                                {...register("title", { required: true })}
                                placeholder="Enter Service Title" 
                            />
                        </Form.Group>
                        <Form.Group as={Col} md={5} sm={12}>
                            <Form.Label style={{ fontWeight: 'bold'}}>Price</Form.Label>
                            <Form.Control 
                                style={{ maxWidth: "260px" }}
                                type="text" 
                                // defaultValue={editService ? editService.price : ""}
                                {...register("price", { required: true })}
                                placeholder="Enter Price" 
                            />
                        </Form.Group>
                        <Form.Group as={Col} md={5} sm={12} className='mr-md-5 mt-md-3'>
                            <Form.Label style={{ fontWeight: 'bold'}}>Service Title</Form.Label>
                            <Form.Control 
                                style={{ height: "10rem" }}
                                type="text" 
                                // defaultValue={editService ? editService.title : ""}
                                as="textarea"
                                {...register("description", { required: true })}
                                placeholder="Enter Description" 
                            />
                        </Form.Group>
                        
                        <Form.Group as={Col} md={5} sm={12} className='mt-md-3'>
                            <Form.Label style={{ fontWeight: 'bold'}}>Service Title</Form.Label>
                            <Button>
                                <FontAwesomeIcon icon={faCloudUploadAlt} className='mr-2'/>Upload Image
                            </Button>
                            <Form.Control 
                                type="text" 
                                // defaultValue={editService ? editService.title : ""}
                                {...register("price", { required: true })}
                                placeholder="Enter Service Title" 
                            />
                        </Form.Group>
                    </Form.Row>
                </div>
            </Form>
        </section>
    );
};

export default AddService;