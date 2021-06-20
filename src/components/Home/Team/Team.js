import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import team1 from '../../../images/team/team-1.jpg'
import team2 from '../../../images/team/team-2.jpg'
import team3 from '../../../images/team/team-3.jpg'
import team4 from '../../../images/team/team-4.jpg'

const Team = () => {
    return (
        <section id="team" class="team">
            <div class="container">

                <div class="section-title" >
                <h2>Team</h2>
                <p>Our team is always here to help</p>
                </div>

                <div class="row">

                <div class="col-xl-3 col-lg-4 col-md-6" >
                    <div class="member">
                    <img src={team1} class="img-fluid" alt=""/>
                    <div class="member-info">
                        <div class="member-info-content">
                        <h4>Walter White</h4>
                        <span>Chief Executive Officer</span>
                        </div>
                        <div class="social">
                        <a href=""><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href=""><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href=""><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        </div>
                    </div>
                    </div>
                </div>

                <div class="col-xl-3 col-lg-4 col-md-6"  >
                    <div class="member">
                    <img src={team2} class="img-fluid" alt=""/>
                    <div class="member-info">
                        <div class="member-info-content">
                        <h4>Sarah Jhonson</h4>
                        <span>Product Manager</span>
                        </div>
                        <div class="social">
                        <a href=""><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href=""><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href=""><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        </div>
                    </div>
                    </div>
                </div>

                <div class="col-xl-3 col-lg-4 col-md-6">
                    <div class="member">
                    <img src={team3} class="img-fluid" alt=""/>
                    <div class="member-info">
                        <div class="member-info-content">
                        <h4>William Anderson</h4>
                        <span>CTO</span>
                        </div>
                        <div class="social">
                        <a href=""><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href=""><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href=""><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        </div>
                    </div>
                    </div>
                </div>

                <div class="col-xl-3 col-lg-4 col-md-6" >
                    <div class="member">
                    <img src={team4} class="img-fluid" alt=""/>
                    <div class="member-info">
                        <div class="member-info-content">
                        <h4>Amanda Jepson</h4>
                        <span>Accountant</span>
                        </div>
                        <div class="social">
                        <a href=""><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href=""><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href=""><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        </div>
                    </div>
                    </div>
                </div>

                </div>

            </div>
            </section>
    );
};

export default Team;