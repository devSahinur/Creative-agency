import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkedAlt, faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons'

const Contract = () => {
    return (
        <section id="contact" className="contact">
            <div className="container" >

                <div className="section-title">
                <h2>Contact Us</h2>
                <p>Contact us the get started</p>
                </div>

                <div className="row">
                <div className="col-lg-5 d-flex align-items-stretch">
                    <div className="info">
                    <div className="address">
                    <FontAwesomeIcon icon={faMapMarkedAlt} />
                        <h4>Location:</h4>
                        <p>A108 Adam Street, New York, NY 535022</p>
                    </div>

                    <div className="email">
                    <FontAwesomeIcon icon={faEnvelope} />
                        <h4>Email:</h4>
                        <p>info@example.com</p>
                    </div>

                    <div className="phone">
                    <FontAwesomeIcon icon={faMobileAlt} />
                        <h4>Call:</h4>
                        <p>+880 1788215840</p>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1275.5550677156912!2d89.01487402449348!3d25.755950360260076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbd!4v1624138439310!5m2!1sen!2sbd" style={{border:'0', width: '100%', height: "290px"}} ></iframe>
                   </div>

                </div>

                <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch" >
                    <form method="post" className="php-email-form">
                    <div className="row">
                        <div className="form-group col-md-6">
                        <label for="name">Your Name</label>
                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                        </div>
                        <div className="form-group col-md-6 mt-3 mt-md-0">
                        <label for="name">Your Email</label>
                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                        </div>
                    </div>
                    <div className="form-group mt-3">
                        <label for="name">Subject</label>
                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                    </div>
                    <div className="form-group mt-3">
                        <label for="name">Message</label>
                        <textarea className="form-control" name="message" rows="10" required></textarea>
                    </div>
                    <div className="my-3">
                        <div className="loading">Loading</div>
                        <div className="error-message"></div>
                        <div className="sent-message">Your message has been sent. Thank you!</div>
                    </div>
                    <div className="text-center"><button type="submit">Send Message</button></div>
                    </form>
                </div>

                </div>

            </div>
        </section>
    );
};

export default Contract;