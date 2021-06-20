import React from 'react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
// https://i.ibb.co/bW7ynXz/client-4.png
// https://i.ibb.co/JH8rWbF/client-5.png
// https://i.ibb.co/zsj1Sh8/client-6.png
// https://i.ibb.co/vLM3MMM/client-7.png
// https://i.ibb.co/NT55Lbb/client-8.png
// https://i.ibb.co/87hMPxX/client-1.png
// https://i.ibb.co/0CnmBys/client-2.png
// https://i.ibb.co/9qZxckW/client-3.png


const clients = [
    {
        id: 1,
        image : 'https://i.ibb.co/bW7ynXz/client-4.png'
    },
    {
        id: 2,
        image : 'https://i.ibb.co/JH8rWbF/client-5.png'
    },
    {
        id: 3,
        image : 'https://i.ibb.co/zsj1Sh8/client-6.png'
    },
    {
        id: 4,
        image : 'https://i.ibb.co/vLM3MMM/client-7.png'
    },
    {
        id: 5,
        image : 'https://i.ibb.co/NT55Lbb/client-8.png'
    },
    {
        id: 6,
        image : 'https://i.ibb.co/87hMPxX/client-1.png'
    },
    {
        id: 7,
        image : 'https://i.ibb.co/0CnmBys/client-2.png'
    },
    {
        id: 8,
        image : 'https://i.ibb.co/9qZxckW/client-3.png'
    }
]


const Clients = () => {
    SwiperCore.use([Pagination, Autoplay]);
    // const [loading, setLoading] = useState(true);

    return (
        <section id="clients" class="clients section-bg">
        <div class="container">

            <div class="section-title">
            <h2>Clients</h2>
            <p>They trusted us</p>
            </div>

            <div class="clients-slider swiper-container"  >
            <div class="swiper-wrapper align-items-center">
            <Swiper
                    loop={true}
                    slidesPerView={1}
                    breakpoints={{
                        340: {
                            slidesPerView: 3,
                            spaceBetween: 2,
                        },
                        440: {
                            slidesPerView: 4,
                            spaceBetween: 2,
                        },
                        768: {
                            slidesPerView: 6,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 8,
                            spaceBetween: 10,
                        },
                    }}
                    autoplay={{
                        delay: 500,
                        // disableOnInteraction: false,
                    }}
                    spaceBetween={10}
                >
                    {
                        clients.map(img => {
                            return (
                                <SwiperSlide key={img.id}>
                                    <img style={{width: '100px'}} src={img.image} alt="" />
                                </SwiperSlide>
                            )
                        })
                    }
            </Swiper>
            </div>
            <div class="swiper-pagination"></div>
            </div>

        </div>
        </section>

    );
};

export default Clients;