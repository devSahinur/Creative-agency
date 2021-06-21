import axios from 'axios';
import React, { useContext } from 'react';
import { Button, Col, Container, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import swal from 'sweetalert';
import { UserContext } from '../../../App';

const Review = () => {
    const { loggedInUser: {  name, photo  } } = useContext(UserContext);
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data, e) => {
        const loading = toast.loading('Uploading...Please wait!');
         data.img = photo || "https://i.ibb.co/5GzXkwq/user.png"
   
        axios.post('https://moto-repair.herokuapp.com/add-review', data)
        .then(res => {
            toast.dismiss(loading);
            if (res.data) {
                reset()
                return swal("Successfully Submitted", "Your review has been successfully submitted.", "success");
            }
            swal("Failed!", "Something went wrong! Please try again.", "error", { dangerMode: true });
        })
        .catch(error => {
            toast.dismiss(loading);
            swal("Failed!", "Something went wrong! Please try again.", "error", { dangerMode: true });
        });   
    }

    
    return (
        <section>
            <Container>
                <Form  onSubmit={handleSubmit(onSubmit)} className="w-100 form-main shadow">
                    <div className="p-5 bg-white" style={{ borderRadius: "15px", maxWidth:'85rem' }}>
                        <Form.Row className="justify-content-center px-4">
                            <Form.Group as={Col} md={9} className='admin-group'>
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control type="text" value={name} {...register("name", { required: true })}  placeholder="Enter Your Name" />
                            </Form.Group>

                            <Form.Group as={Col} md={2} className='offset-md-1 admin-group'>
                                <Form.Label>Your Star</Form.Label> <br />
                                <select  {...register("star", { required: true })} >
                                    <option value="5">5</option>
                                    <option value="4">4</option>
                                    <option value="3">3</option>
                                    <option value="2">2</option>
                                    <option value="1">1</option>
                                </select>
                            </Form.Group>

                            <Form.Group as={Col} md={12} className='admin-group'>
                                <Form.Label>Address</Form.Label>
                                <Form.Control    type="text" {...register("address", { required: true })} placeholder="Enter Your Address" />
                            </Form.Group>

                            <Form.Group as={Col} md={12} className='admin-group'>
                                <Form.Label>Your Review</Form.Label>
                                <Form.Control style={{ height: "10rem" }} type="text"as="textarea"{...register("description", { required: true })} placeholder="Tell me Something about this site." />
                            </Form.Group>

                        </Form.Row>
                        <div className="text-center mt-4">
                            <Button type="submit" variant='info' className='main-button'>Submit</Button>
                        </div>
                    </div>
                </Form>
             </Container>
        </section>
    );
};

export default Review;