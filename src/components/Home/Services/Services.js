import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const Services = () => {
    const [services, setServices] =useState()

    // all service data call
    useEffect(() =>{
        axios.get('http://localhost:5000/api/service')
        .then(res => setServices(res.data))
    },[])
    return (
        <section id="services" className="services section-bg">
            <div className="container" >

                <div className="section-title">
                    <h2>Services</h2>
                    <p>Check out the great services we offer</p>
                </div>

                <div className="row">
                    {
                        services?.map(service => <ServiceDetail service={service} key={service._id} />)
                    }
                </div>

            </div>
        </section>
    );
};

export default Services;