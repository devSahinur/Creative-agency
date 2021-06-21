import React from 'react';
import Header from '../components/Home/Header/Header';
import About from '../components/Home/About/About';
import Service from '../components/Home/Services/Services';
import Testimonials from '../components/Home/Testimonials/Testimonials';
import FAQ from '../components/Home/FAQ/FAQ';
import Contract from '../components/Home/Contract/Contract';
import Client from '../components/Home/Clients/Clients';
import Footer from '../components/Home/Footer/Footer';
import Team from '../components/Home/Team/Team';
import Fade from 'react-reveal/Fade';

const Home = () => {
    return (
        <main>
           <Header/> 
           <Fade bottom duration={2000} distance="40px">
                <About/>
           </Fade>
           <Fade bottom duration={2000} distance="40px">
                <Service/>
           </Fade>
           <Fade left >
                <Testimonials/>
           </Fade>
           <Fade bottom duration={2000} distance="40px">
                <FAQ/>
           </Fade>
           <Fade right >
                <Team/>
           </Fade>
           <Fade bottom duration={2000} distance="40px">
                <Client/>
           </Fade>
           <Fade bottom duration={2000} distance="40px">
                <Contract/>
           </Fade>
           <Fade bottom duration={2000} distance="40px">
           <Footer/>
           </Fade>
        </main>
    );
};

export default Home;