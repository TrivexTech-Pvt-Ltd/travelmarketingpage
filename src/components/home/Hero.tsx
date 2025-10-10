"use client"
import React, { useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Slide from './Slide';
import { Hero1, Hero2, Hero3, Hero4 } from '@/lib/utils/staticImages';
import { slideData } from '@/lib/utils/data';



const Hero = () => {

    const [activeSlide, setActiveSlide] = useState<number>(0);

    let settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
        accessibility: true,
        speed: 1500,
        beforeChange: (next: number) => {
            // Get all slide elements
            document.querySelectorAll(".slick-slide").forEach((slide) => {
                if (slide.classList.contains("slick-active")) {
                    slide.removeAttribute("aria-hidden"); // Make active slide visible to AT
                    slide
                        .querySelectorAll("a, button, input, [tabindex]")
                        .forEach((el) => {
                            el.removeAttribute("tabindex");
                        });
                } else {
                    slide.setAttribute("aria-hidden", "true"); // Hide inactive slides
                    slide
                        .querySelectorAll("a, button, input, [tabindex]")
                        .forEach((el) => {
                            el.setAttribute("tabindex", "-1"); // Prevent focus on hidden elements
                        });
                }
            });
            setActiveSlide(next);
        },
    };



    return (
        <div className="overflow-hidden">
            <Slider {...settings}>
                {slideData.map((item) => (
                    <Slide
                        key={item.id}
                        image={item.image}
                        country={item.country}
                        text={item.text}
                        activeSlide={activeSlide}

                    />
                ))}
            </Slider>

        </div>

    )
}

export default Hero