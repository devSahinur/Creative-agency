import axios from 'axios';
import React, { useContext } from 'react';
import { Button, Col, Container, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import swal from 'sweetalert';
import { UserContext } from '../../../App';

const AddAdmin = () => {
    const { loggedInUser: { email } } = useContext(UserContext);
    const { register, handleSubmit, reset } = useForm();
    console.log(email)
    const onSubmit = data => {
        console.log(data)

     
 }

    return (
            <Container>
                <Form onSubmit={handleSubmit(onSubmit)} className='admin-group'>
                    <div className="p-5 mt-5 bg-white d-flex justify-content-center shadow" style={{ borderRadius: "15px"}}>
                        <div className="py-md-4">
                            <Form.Label>Email</Form.Label>
                            <Form.Row>
                                <Form.Group as={Col} xs="auto" style={{ width: '25rem' }} >
                                    <Form.Control type="text"{...register("email", { required: true })}  placeholder="Admin's Email Address" />
                                </Form.Group>
                                <br />
                                <Form.Group as={Col} xs="auto">
                                    <Button type="submit"  variant='info' className='main-button' >Make Admin</Button>
                                </Form.Group>
                            </Form.Row>
                        </div>
                    </div>
                </Form>
            </Container>
    );
};

export default AddAdmin;