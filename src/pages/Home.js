import React from 'react';
import Header from '../components/Home/Header/Header';
import About from '../components/Home/About/About';
import Service from '../components/Home/Services/Services';
import FAQ from '../components/Home/FAQ/FAQ';
import Footer from '../components/Home/Footer/Footer';

const Home = () => {
    return (
        <main>
           <Header/> 
           <About/>
           <Service/>
           <FAQ/>
           <Footer/>
        </main>
    );
};

export default Home;