import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react'

// import swiper style
import 'swiper/css';
import 'swiper/css/navigation';

//import required module
import { Autoplay, Navigation } from "swiper";

//import data
import {testimonial} from '../data'

const TestimonialSlider = ()=>{
    return(
        <Swiper className="testimonialSlider"
        modules={[Navigation, Autoplay]}
        navigation={true}
        autoplay={true}
        >
            {testimonial.persons.map((person, index)=>{
                const {avatar, name, occupation, message} = person;
                return (
                    <SwiperSlide key={index}>
                        <div className="flex flex-col min-h-[250px]">
                            <div className="flex items-center gap-x-5 mb-9">
                                <img src={avatar.type} alt=''/>
                                <div>
                                    <div className="text-xl font-semibold">{name}</div>
                                    <div className="text-gray-500">{occupation}</div>
                                </div>
                            </div>
                            <div>
                                {message}
                            </div>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
};

export default TestimonialSlider;