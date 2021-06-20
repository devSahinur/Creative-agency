import React from 'react';
import logo from '../../../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faSkype } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';

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
                    <li><FontAwesomeIcon icon={faChevronRight} /> <Link to='/'>Home</Link></li>
                    <li><FontAwesomeIcon icon={faChevronRight} /> <Link to='/'>About us</Link></li>
                    <li><FontAwesomeIcon icon={faChevronRight} /> <Link to='/'>Services</Link></li>
                    <li><FontAwesomeIcon icon={faChevronRight} /> <Link to='/'>Terms of service</Link></li>
                    <li><FontAwesomeIcon icon={faChevronRight} /> <Link to='/'>Privacy policy</Link></li>
                    </ul>
                </div>

                <div className="col-lg-3 col-md-6 footer-links">
                    <h4>Our Services</h4>
                    <ul>
                    <li><FontAwesomeIcon icon={faChevronRight} /> <Link to='/'>Web Design</Link></li>
                    <li><FontAwesomeIcon icon={faChevronRight} /> <Link to='/'>Web Development</Link></li>
                    <li><FontAwesomeIcon icon={faChevronRight} /> <Link to='/'>Product Management</Link></li>
                    <li><FontAwesomeIcon icon={faChevronRight} /> <Link to='/'>Marketing</Link></li>
                    <li><FontAwesomeIcon icon={faChevronRight} /> <Link to='/'>Graphic Design</Link></li>
                    </ul>
                </div>

                <div className="col-lg-3 col-md-6 footer-links">
                    <h4>Our Social Networks</h4>
                    <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
                    <div className="social-links mt-3">
                    <Link to='/' className="twitter"><FontAwesomeIcon icon={faTwitter} /></Link>
                    <Link to='/' className="facebook"><FontAwesomeIcon icon={faFacebookF} /></Link>
                    <Link to='/' className="instagram"><FontAwesomeIcon icon={faInstagram} /></Link>
                    <Link to='/' className="google-plus"><FontAwesomeIcon icon={faSkype} /></Link>
                    <Link to='/' className="linkedin"><FontAwesomeIcon icon={faLinkedinIn} /></Link>
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
                Designed by <Link to="https://github.com/devSahinur" >Sahinur Islam</Link>
            </div>
            </div>
        </footer>
    );
};

export default Footer;