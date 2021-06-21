import { CardCvcElement, CardExpiryElement, CardNumberElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useMemo } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import toast from 'react-hot-toast';
import swal from 'sweetalert';
import { UserContext } from '../../../App';
import './StripePayment.css';


const useOptions = () => {
    const options = useMemo(
        () => ({
            style: {
                base: {
                    color: "#101d2c",
                    letterSpacing: "0.025em",
                    "::placeholder": {
                        color: "#aab7c4"
                    }
                },
                invalid: {
                    color: "#9e2146"
                }
            }
        }),
        []
    );
    return options;
};


const StripePayment = ({ orders }) => {
  
    const stripe = useStripe();
    const elements = useElements();
    const options = useOptions();
    const { loggedInUser } = useContext(UserContext);

    const handlePayment = async e => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const loading = toast.loading('Please wait...!');

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardNumberElement)
        });

        if (error) {
            toast.dismiss(loading);
            return swal("Failed!", error.message, "error", { dangerMode: true });
        }
        delete orders._id;
        const bookingInfo = {
            payload:paymentMethod,
            order:orders,
            name: e.target.name.value,
            email: loggedInUser.email,
            city: e.target.address.value,
            paymentMethod: 'Credit Card',
            status: 'Pending',
            time: new Date().toDateString('dd/mm/yyyy')
        };

        fetch('https://moto-repair.herokuapp.com/add-order', {
            method: 'POST',
            headers: { 'Content-Type': 'Application/json' },
            body: JSON.stringify(bookingInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.dismiss(loading);
                    return swal("Successfully Ordered",  ` ${loggedInUser.name} thank you for take ${orders.name} ....!!`, "success");
                };
            });
    };

    return (
       <Form onSubmit={handlePayment}>
          <Row>
                <Col md={6}>
                    <div className="admin-group">
                        <Form.Label htmlFor="name">Your Name</Form.Label>
                        <Form.Control name="name" id="name" type="text" value={loggedInUser.name} required />
                    </div>
                </Col>

                <Col md={6}>
                    <div className="admin-group">
                        <Form.Label htmlFor="email">Email Address</Form.Label>
                        <Form.Control name="email" id="email" type="email" value={loggedInUser.email} required />
                    </div>
                </Col>

                <Col  md={6}>
                    <div className=" admin-group mt-3">
                        <Form.Label htmlFor="address">Address (City)</Form.Label>
                        <Form.Control name="address" id="address" type="text" placeholder="Enter Your Address" required />
                    </div>
                </Col>

                <Col md={6} className='admin-group mt-3'>
                    <Form.Label>
                        <span>Card number</span> <CardNumberElement options={options} />
                    </Form.Label>
                </Col>

                <Col md={6} className='admin-group mt-3'>
                    <Form.Label>
                        <span>Expiration date</span> <CardExpiryElement options={options} />
                    </Form.Label>
                </Col>

                <Col md={6} className='admin-group mt-3'>
                     <Form.Label>
                        <span>CVC</span> <CardCvcElement options={options} />
                    </Form.Label>
                </Col>
          </Row>
          
            <div className="text-center mt-3">
                <Button  variant='info'  type="submit" className='main-button' disabled={!stripe}> Checkout </Button>
            </div>
        </Form>
    );
};

export default StripePayment;