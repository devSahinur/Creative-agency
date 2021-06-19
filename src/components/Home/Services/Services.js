import React from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

// https://i.ibb.co/12bRzsy/service-icon6.png
// https://i.ibb.co/1fyb1T7/service-icon5.png
// https://i.ibb.co/6mgTvMm/service-icon4.png
// https://i.ibb.co/rvRrN1P/service-icon3.png
// https://i.ibb.co/7jvS6zL/service-icon2.png
// https://i.ibb.co/rFc2Zkr/service-icon1.png
const servicesData = [
    {
        id: 1,
        title: 'Search Optimization',
        image: 'https://i.ibb.co/rFc2Zkr/service-icon1.png',
        description: 'By using Search Engine Optimization, You will get more Clients',
        price: 100
    },
    {
        id: 2,
        title: 'Wireframing Task',
        image: 'https://i.ibb.co/7jvS6zL/service-icon2.png',
        description: 'We respect our customer opinions and deals with them with perfect wireframing',
        price: 150
    },
    {
        id: 3,
        title: 'Ui/UX Design',
        image: 'https://i.ibb.co/rvRrN1P/service-icon3.png',
        description: 'We provide the best UI/UX Design by following the latest trends of the market.',
        price: 250
    },
    {
        id: 4,
        title: 'Web Development',
        image: 'https://i.ibb.co/6mgTvMm/service-icon4.png',
        description: 'We are committed to provide proper business solutions with reasonable pricing',
        price: 300
    },
    {
        id: 5,
        title: 'Content Management',
        image: 'https://i.ibb.co/1fyb1T7/service-icon5.png',
        description: 'Proper Content Management is important to find out the real clients for your agencies',
        price: 115
    },
    {
        id: 6,
        title: 'Business Analysis',
        image: 'https://i.ibb.co/12bRzsy/service-icon6.png',
        description: 'A day to day report about your ongoing business for proper understanding',
        price: 200
    }
]
console.log(servicesData)

const Services = () => {
    return (
        <section id="services" className="services section-bg">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>Services</h2>
                    <p>Check out the great services we offer</p>
                </div>

                <div className="row">
                    {
                        servicesData.map(service => <ServiceDetail service={service} key={service.id} />)
                    }
                </div>

            </div>
        </section>
    );
};

export default Services;