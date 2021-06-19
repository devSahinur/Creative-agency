import React from 'react';
import Header from '../components/Home/Header/Header';
import About from '../components/Home/About/About';
import Service from '../components/Home/Services/Services';
import Testimonials from '../components/Home/Testimonials/Testimonials';
import FAQ from '../components/Home/FAQ/FAQ';
import Contract from '../components/Home/Contract/Contract';
import Footer from '../components/Home/Footer/Footer';

const Home = () => {
    return (
        <main>
           <Header/> 
           <About/>
           <Service/>
           <Testimonials/>
           <FAQ/>
           <Contract/>
           <Footer/>
        </main>
    );
};

export default Home;