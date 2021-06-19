import React from 'react';
import heroImg from '../../../images/hero-img.svg'

const Banner = () => {
    return (
        <section id="hero" className="d-flex align-items-center">

            <div className="container">
            <div className="row gy-4">
                <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                    <h1>Creative Digital Agency With Experience</h1>
                    <h2>With Coagency, all over the place become all-in-one place. Every part of a project lifecycle is here.</h2>
                <div>
                    <a href="#about" className="btn-get-started scrollto">Get Started</a>
                </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 hero-img">
                    <img src={heroImg} className="img-fluid animated" alt=""/>
                </div>
            </div>
            </div>

        </section>
    );
};

export default Banner;