import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import person1 from '../static/images/person1.jpg'
import person2 from '../static/images/person2.jpg'
import '../static/scss/blog.scss'
import 'swiper/scss';
export default function Blog2() {
    return (
        <div className="blog">
            <div className="inner">
                <Swiper
                    slidesPerView={2} navigation className="blogslider">
                    <SwiperSlide>
                        <img src={person1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={person1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={person1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={person1} alt="" />
                    </SwiperSlide>
                </Swiper>

                <div className="two-secton">
                    <div className="left">
                        <h3>Content Creation
                        </h3>
                    </div>
                    <div className="right">
                        <p>Quisque consequat sollicitudin lacus, quis volutpat mauris ornare sit amet. Mauris justo risus, faucibus iaculis sodales ac, luctus ut dui. Proin dui tortor, aliquam cursus laoreet ac, tincidunt eget est. Aliquam vitae orci metus</p>
                        <ul>
                            <li>Aliquam erat volutpat libero nibh suscipit lectus</li>
                            <li>sed eleifend enim enim non nulla.</li>
                            <li>Duis id volutpat libero.dignissim laoreet
                            </li>
                        </ul>
                    </div>
                </div>

                
                <div className="person-img">
                    <img src={person2} alt="" />
                </div>

                <div className="text-box">
                    <h3>
                        kama
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque enim nobis voluptatum molestiae commodi doloribus laudantium! Impedit eveniet fugit ipsum voluptate maiores? Doloribus dolores, tenetur labore amet est consectetur aliquam, repellat temporibus saepe aspernatur, possimus cum rerum aliquid distinctio?
                    </p>
                </div>
                
                <div className="person-img">
                    <img src={person2} alt="" />
                </div>

                <div className="text-box">
                    <h3>
                        kama
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque enim nobis voluptatum molestiae commodi doloribus laudantium! Impedit eveniet fugit ipsum voluptate maiores? Doloribus dolores, tenetur labore amet est consectetur aliquam, repellat temporibus saepe aspernatur, possimus cum rerum aliquid distinctio?
                    </p>
                </div>
                
                <div className="person-img">
                    <img src={person2} alt="" />
                </div>

                <div className="text-box">
                    <h3>
                        kama
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque enim nobis voluptatum molestiae commodi doloribus laudantium! Impedit eveniet fugit ipsum voluptate maiores? Doloribus dolores, tenetur labore amet est consectetur aliquam, repellat temporibus saepe aspernatur, possimus cum rerum aliquid distinctio?
                    </p>
                </div>
            </div>
        </div>
    )
}
