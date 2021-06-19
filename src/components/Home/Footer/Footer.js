import React from 'react';

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
                        <input type="email" name="email"/><input type="submit" value="Subscribe" />
                    </form>
                </div>
                </div>
            </div>
            </div>

            <div className="footer-top">
            <div className="container">
                <div className="row">

                <div className="col-lg-3 col-md-6 footer-contact">
                    <h3>Ninestars</h3>
                    <p>
                    A108 Adam Street <br/>
                    New York, NY 535022<br/>
                    United States <br/><br/>
                    <strong>Phone:</strong> +1 5589 55488 55<br/>
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
                    <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                    <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                    <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                    <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                    <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                    </div>
                </div>

                </div>
            </div>
            </div>

            <div className="container py-4">
            <div className="copyright">
                &copy; Copyright <strong><span>Ninestars</span></strong>. All Rights Reserved
            </div>
            <div className="credits">
                Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>
            </div>
        </footer>
    );
};

export default Footer;