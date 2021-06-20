import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
    return (
        <header id="header" className="fixed-top d-flex align-items-center">
          <div className="container d-flex align-items-center justify-content-between">

            <div className="logo">
              {/* <h1 className="text-light"><a href="index.html"><span>Ninestars</span></a></h1> */}
            <a href="/"><img src={logo} alt="" className="img-fluid"/></a>
            </div>

            <nav id="navbar" className="navbar">
              <ul>
                <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                <li><a className="nav-link scrollto" href="#about">About Us</a></li>
                <li><a className="nav-link scrollto" href="#services">Services</a></li>
                
                <li><a className="nav-link scrollto" href="#reviews">Reviews</a></li>
                <li><a className="nav-link scrollto" href="#team">Team</a></li>
                <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                <li><Link className="nav-link scrollto" to='/dashboard/profile'>Dashboard</Link></li>
                <li><Link className="getstarted scrollto" to='/login'>Login</Link></li>
              </ul>
              <i className="bi bi-list mobile-nav-toggle"><FontAwesomeIcon icon={faBars} /></i>
            </nav>

          </div>
        </header>
    );
};

export default NavBar;