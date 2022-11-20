import React from 'react'
import '../static/scss/home.scss'

import { Scrollbar, Mousewheel  } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/mousewheel';


export default function Home() {
    
    return (
        <>
            <Swiper 
            modules={[Scrollbar]} 
            scrollbar={{ draggable: true }}
                slidesPerView={1} 
                direction='horizontal' 
                mousewheel= {true}
                className="home-slider">

                <SwiperSlide className="home">
                    <h2>The one desk army of the <br />
                        digital era</h2>
                </SwiperSlide>
                <SwiperSlide className="home home2">
                    <h2>
                        We are a Mumbai-based agency in the <br />
                        business of building brands.<br /> <br />
                        We lead with purpose <br />
                        We strike with precision <br />
                        We create with love <br />
                    </h2>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
