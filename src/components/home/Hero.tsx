"use client";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide from "./Slide";
import { HeroType } from "@/types/hero.types";

interface HeroProps {
  heroData: HeroType[];
  height?: string;
}

const Hero = ({ heroData, height }: HeroProps) => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const sliderRef = useRef<Slider>(null);

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1500,
    dots: false,
    arrows: false,
    pauseOnHover: false,
    beforeChange: (_current: number, next: number) => setActiveSlide(next),
  };

  return (
    <div className="overflow-hidden w-full">
      <Slider {...settings} ref={sliderRef}>
        {heroData.map((item) => (
          <Slide
            key={item.id}
            image={item.image}
            video={item.video}
            text={item.text}
            country={item.country}
            link={item.link}
            height={height}
            activeSlide={activeSlide}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
