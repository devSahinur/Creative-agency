import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Container, Toast } from 'react-bootstrap';
import toast from 'react-hot-toast';
import Select from 'react-select';
import { UserContext } from '../../../App';
// import infoEmojis from '../../../images/info-emoji.svg';
import StripePayment from '../StripePayment/StripePayment';
import './Booking.css';

const Booking = () => {
    const { selectedService: { name, price } } = useContext(UserContext);
    const [show, setShow] = useState(true);
    const [services, setServices] = useState([]);

    const stripePromise = loadStripe('pk_test_51Ie11ZIo3XVCKagbJJnefC4ruHwRuiiS8mPOiugOUPZ3F9isu6mCQJjhdMQ9SHugvc8Y6pjEGk2xYIMhOW2CpJQN00ArldL7I3');
    const options = services.map(service => ({ value: service.name, label: service.name, price: service.price }));
    const defaultOption = name ? { value: name, label: name, price: price } : options[0] || { value: "Engine Repair", label: "Engine Repair", price: 20000 };
    const [selectedOption, setSelectedOption] = useState(defaultOption);
    const orders = services.find(service => service.name === selectedOption.value);

    useEffect(() => {
        axios.get('https://moto-repair.herokuapp.com/all-services')
            .then(res => setServices(res.data))
            .catch(error => toast.error(error.message))
    }, [])

    const colourStyles = {
        control: styles => (
            {
                ...styles,
                backgroundColor: '#efeff5',
                border: "1px solid #17a2b8",
                '&:hover': { border: '1px solid #17a2b8'},
                height: "calc(2em + 0.75rem + 2px)"
            }
        ),

        option: (styles, { isDisabled, isFocused, isSelected }) => {
            return {
                ...styles,
                backgroundColor: isDisabled ? null : isSelected ? "#17a2b8" : isFocused ? "#16c8e48c" : null,
                color: isDisabled ? null : isSelected ? "white" : isFocused ? "black" : "black",
                cursor: isDisabled ? 'not-allowed' : 'default',
                ':active': { ...styles[':active'], backgroundColor: !isDisabled && (isSelected ? "#17a2b8" : "#16c8e48c") },
            };
        },
    };

    return (
         <section className='checkout'>
                <Container >
                    <div className="bg-white p-5 shadow checkout-package" style={{ borderRadius: "15px", maxWidth:'85rem' }}>
                        <table className="checkout-table text-center">
                            <thead>
                                <tr>
                                    <th>Package</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <Select onChange={option => setSelectedOption(option)}   defaultValue={defaultOption} options={options} styles={colourStyles} />
                                    </td>
                                    <td> ৳ {price || selectedOption.price}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <Toast className="toast-right" style={{marginLeft:'auto'}} onClose={() => setShow(false)} show={show} delay={5000} autohide>
                        <Toast.Header>
                            {/* <img src={infoEmojis} className="rounded mr-2" alt="Info" /> */}
                            <strong className="mr-auto">Important Info</strong>
                        </Toast.Header>
                        <Toast.Body className="text-center">
                            Use this Card Number to test the payment
                            <br />
                            <b>4242 4242 4242 4242</b>
                        </Toast.Body>
                    </Toast>

                    <div className="mt-5 bg-white shadow p-5" style={{ borderRadius: "15px", maxWidth:'85rem' }}>
                        <Elements stripe={stripePromise}>
                            <StripePayment orders={orders} />
                        </Elements>
                    </div>
                </Container>
        </section>

    );
};

export default Booking;