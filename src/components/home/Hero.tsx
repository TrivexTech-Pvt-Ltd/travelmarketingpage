"use client"
import React, { useRef, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Slide from './Slide';
import { slideData } from '@/lib/utils/data';



const Hero = () => {

    const [activeSlide, setActiveSlide] = useState<number>(0);
    const sliderRef = useRef<Slider>(null);

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: true,
        autoplaySpeed: 3000,
        accessibility: true,
        speed: 2000,
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

    // Handle dot click → pause & resume autoplay
    const handleDotClick = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPause(); // pause autoplay
            setTimeout(() => {
                sliderRef.current?.slickPlay(); // resume after delay
            }, 5000); // resume autoplay after 5 seconds
        }
    };


    return (
        <div className="overflow-hidden">
            <Slider {...settings} appendDots={(dots) => (
                <ul onClick={handleDotClick}> {dots} </ul> // add click handler here
            )}>
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