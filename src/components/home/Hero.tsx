"use client";
import React, { useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import VideoSlide from "./Slide";
import { HeroType } from "@/types/hero.types";

interface HeroProps {
  heroData: HeroType[];
  height?: string;
}

const Hero = ({ heroData }: HeroProps) => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const sliderRef = useRef<Slider>(null);

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1500,
    dots: true,
    pauseOnHover: false,
    arrows: false,
    beforeChange: (current: number, next: number) => setActiveSlide(next),
  };

  return (
    <div className="overflow-hidden w-full">
      <Slider {...settings} ref={sliderRef}>
        {heroData.map((item) => (
          <VideoSlide key={item.id} video={item.video} />
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
