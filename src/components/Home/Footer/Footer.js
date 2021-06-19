import React from 'react';
import logo from '../../../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkedAlt, faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faSkype } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer id="footer">

            <div className="footer-newsletter">
            <div className="container">
                <div className="row justify-content-center">
                <div className="col-lg-6">
                    <h4>Join Our Newsletter</h4>
                    <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                    <form action="" method="post">
                        <input type="email" placeholder='Enter Your Email' name="email"/><input type="submit" value="Subscribe" />
                    </form>
                </div>
                </div>
            </div>
            </div>

            <div className="footer-top">
            <div className="container">
                <div className="row">

                <div className="col-lg-3 col-md-6 footer-contact">
                    <img style={{width: "150px"}} src={logo} alt="" className="img-fluid"/>
                    <br />
                    <br/>
                    <p className='pb-2'>
                    A108 Adam Street <br/>
                    New York, NY 535022<br/>
                    United States <br/>
                    <strong>Phone:</strong> +8801788215840<br/>
                    <strong>Email:</strong> info@example.com<br/>
                    </p>
                </div>

                <div className="col-lg-3 col-md-6 footer-links">
                    <h4>Useful Links</h4>
                    <ul>
                    <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                    <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                    <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                    <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                    <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                    </ul>
                </div>

                <div className="col-lg-3 col-md-6 footer-links">
                    <h4>Our Services</h4>
                    <ul>
                    <li><i className="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
                    <li><i className="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
                    <li><i className="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
                    <li><i className="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
                    <li><i className="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
                    </ul>
                </div>

                <div className="col-lg-3 col-md-6 footer-links">
                    <h4>Our Social Networks</h4>
                    <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
                    <div className="social-links mt-3">
                    <a href="#" className="twitter"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href="#" className="facebook"><FontAwesomeIcon icon={faFacebookF} /></a>
                    <a href="#" className="instagram"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="#" className="google-plus"><FontAwesomeIcon icon={faSkype} /></a>
                    <a href="#" className="linkedin"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    </div> 
                </div>

                </div>
            </div>
            </div>

            <div className="container py-4">
            <div className="copyright">
                &copy; Copyright <strong><span>Cogency</span></strong>. All Rights Reserved
            </div>
            <div className="credits">
                Designed by <a href="https://github.com/devSahinur">Sahinur Islam</a>
            </div>
            </div>
        </footer>
    );
};

export default Footer;