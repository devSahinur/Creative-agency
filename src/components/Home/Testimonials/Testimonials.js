import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CardDeck, Spinner } from 'react-bootstrap';
import toast from 'react-hot-toast';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

const Revisews =[
    {
        name: 'Sahinur islam',
        address: 'California',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo!',
        img: 'https://i.ibb.co/HDnC8XH/winson.png',
        star: '5'
    },
    {
        name: 'Jubayer Ahmed',
        address: 'Sirajganj',
        description: "Wow! It's an amazing app.",
        img: 'https://lh3.googleusercontent.com/a-/AOh14GjlHvI6wjVIVsPRrDANi6N4PhZpGSBeyPeoS1yH=s96-c',
        star: '5'
    },
    {
        name: 'Sahinur islam',
        address: 'Chittagong',
        description: 'Your Website services is very good!',
        img: 'https://lh3.googleusercontent.com/a-/AOh14Gj-juRiP-waDfpkEwNJkM2DW7DwFY3I5cKNdMHp=s96-c',
        star: '5'
    },
    {
        name: 'Jamil Ahamed',
        address: 'Gazipur, Bangladesh',
        description: 'Very Nice Work Sohel Islam Imran Brother Keep it up',
        img: 'https://lh3.googleusercontent.com/a-/AOh14GiXD5j9zapXxq3GC4Yl1zksWcezuekUn3sdQy_wGA=s96-c',
        star: '5'
    },
    {
        name: 'Mojmul Haque Mojnu',
        address: 'Dhaka',
        description: 'Onek sundor hoice vai.',
        img: 'https://lh3.googleusercontent.com/a-/AOh14Gi-qNeZ0suaTd3E-FjAWRmZ2HMmKA24E1QVkpkPVg=s96-c',
        star: '5'
    }
]

const Testimonials = () => {
    SwiperCore.use([Pagination, Autoplay]);
    const [loading, setLoading] = useState(true);
    const [Reviews, setReviews] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/user/review')
            .then(res => {
                setReviews(res.data);
                setLoading(false);
            })
            .catch(error => toast.error(error.message))
    }, [])

    return (
        <section id="reviews" className="testimonials p-md-3">
                <div className="my-5 py-4">
                    <div className="review-title text-center">
                        <span>What Our Clients Says</span>
                        <h2>Testimonials</h2>
                    </div>
                    {loading ?
                        <div className="text-center">
                            <Spinner animation="border" variant="danger" />
                        </div> :
                        <CardDeck className="mt-5">
                            <Swiper
                                loop={true}
                                pagination={{ clickable: true }}
                                slidesPerView={1}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 1,
                                        spaceBetween: 2,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 10,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                        spaceBetween: 10,
                                    },
                                }}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                spaceBetween={10}
                            >
                                {
                                    Reviews.map(testimonial => {
                                        return (
                                            <SwiperSlide key={testimonial._id}>
                                                <Testimonial testimonial={testimonial} />
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>
                        </CardDeck>}
                </div>
        </section>
    );
};

export default Testimonials;