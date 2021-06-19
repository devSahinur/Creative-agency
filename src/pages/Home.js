import React from 'react';
import Header from '../components/Home/Header/Header';
import About from '../components/Home/About/About';
import Service from '../components/Home/Services/Services';

const Home = () => {
    return (
        <main>
           <Header/> 
           <About/>
           <Service/>
        </main>
    );
};

export default Home;