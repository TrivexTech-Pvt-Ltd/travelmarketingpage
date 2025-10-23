"use client";

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { MdRoomService } from "react-icons/md";
import { FaLuggageCart, FaUmbrellaBeach } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-800 font-work-sans">
      {/* Hero Section */}
      <div
        className="relative h-64 sm:h-80 md:h-96 lg:h-[32rem] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/images/hero/services-hero.webp')" }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="relative text-white text-3xl sm:text-4xl md:text-5xl font-bold z-10 text-center px-4">
          About Travel Nation
        </h1>
      </div>

      {/* Intro Section */}
      <section className="py-12 sm:py-16 md:py-20 text-center max-w-3xl mx-auto px-8 md:px-28">
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          At Travel Nation, we believe travel is more than visiting a new
          destination – it’s about experiencing the world in a way that
          transforms you. Founded with a passion for exploring the vibrant
          cultures and breathtaking landscapes of the Maldives and Sri Lanka,
          our mission is to bring these incredible destinations closer to you
          with bespoke journeys tailored to your dreams.
        </p>
      </section>

      {/* Our Story Section */}
      <section className="bg-[#F9F7F1] py-12 sm:py-16 md:py-20 px-8 md:px-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-green-900 mb-4">
              Our Story
            </h2>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
              Travel Nation was born from a simple idea — to create travel
              experiences that leave a lasting impact. What began as a small,
              dedicated team with a shared love for adventure has grown into a
              trusted travel company specializing in two of the world’s most
              iconic destinations. We aim to create meaningful experiences that
              connect travelers to the heart of the places they visit.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <Image
              src="/images/about/story.webp"
              alt="Our Story"
              width={600}
              height={400}
              className="object-cover w-full h-64 sm:h-80 md:h-[380px]"
            />
          </div>
        </div>
      </section>

      {/* Our Mission Section with Swiper */}
      {/* <section className="bg-white py-12 sm:py-16 md:py-20 px-8 md:px-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 order-1 md:order-none">
            <Image
              src="/images/about/mission.webp"
              alt="Our Mission"
              width={600}
              height={400}
              className="object-cover w-full h-64 sm:h-80 md:h-[380px]"
            />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-green-900 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-8">
              Our mission is to craft authentic, personalized travel experiences
              that bring out the very best of the Maldives and Sri Lanka. We
              curate journeys that blend luxury, adventure, culture, and nature
              in perfect harmony.
            </p>

            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              loop={true}
              spaceBetween={20}
              slidesPerView={1}
              className="rounded-xl w-full max-w-md mx-auto sm:max-w-lg"
              style={{ paddingBottom: "40px" }}
            >
              {[
                {
                  title: "Sustainability",
                  icon: <FaUmbrellaBeach size={48} />,
                  desc: "We work with local communities to promote responsible tourism and protect natural beauty for future generations.",
                },
                {
                  title: "Excellence",
                  icon: <IoBedOutline size={48} />,
                  desc: "We go the extra mile to deliver seamless experiences from the moment you reach out until you return home.",
                },
                {
                  title: "Personalized Service",
                  icon: <FaLuggageCart size={48} />,
                  desc: "Every journey is tailor-made to match your dreams, ensuring a one-of-a-kind travel experience.",
                },
                {
                  title: "Authenticity",
                  icon: <MdRoomService size={48} />,
                  desc: "We showcase the true spirit of the Maldives and Sri Lanka — from local traditions to hidden gems.",
                },
              ].map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="text-center bg-[#F9F7F1] p-6 rounded-xl shadow-md min-h-[260px] flex flex-col justify-center hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold text-green-900 mb-3">
                      {item.title}
                    </h3>
                    <span className="flex items-center justify-center text-green-900 mb-3">
                      {item.icon}
                    </span>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section> */}

      {/* Our Mission Section with Swiper */}
      <section className="bg-white py-12 sm:py-16 md:py-20 px-8 md:px-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 order-1 md:order-none">
            <Image
              src="/images/about/mission.webp"
              alt="Our Mission"
              width={600}
              height={400}
              className="object-cover w-full h-56 sm:h-72 md:h-[380px]"
            />
          </div>

          {/* Text + Swiper */}
          <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-semibold text-green-900 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              Our mission is to craft authentic, personalized travel experiences
              that bring out the very best of the Maldives and Sri Lanka. We
              curate journeys that blend luxury, adventure, culture, and nature
              in perfect harmony.
            </p>

            {/* <div className="w-full max-w-md sm:max-w-lg">
              <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop={true}
                spaceBetween={20}
                slidesPerView={1}
                style={{ paddingBottom: "40px" }}
                className="rounded-xl"
              >
                {[
                  {
                    title: "Sustainability",
                    icon: <FaUmbrellaBeach size={40} />,
                    desc: "We work with local communities to promote responsible tourism and protect natural beauty for future generations.",
                  },
                  {
                    title: "Excellence",
                    icon: <IoBedOutline size={40} />,
                    desc: "We go the extra mile to deliver seamless experiences from the moment you reach out until you return home.",
                  },
                  {
                    title: "Personalized Service",
                    icon: <FaLuggageCart size={40} />,
                    desc: "Every journey is tailor-made to match your dreams, ensuring a one-of-a-kind travel experience.",
                  },
                  {
                    title: "Authenticity",
                    icon: <MdRoomService size={40} />,
                    desc: "We showcase the true spirit of the Maldives and Sri Lanka — from local traditions to hidden gems.",
                  },
                ].map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="text-center bg-[#F9F7F1] p-6 rounded-xl shadow-md min-h-[240px] flex flex-col justify-center hover:shadow-lg transition-shadow">
                      <h3 className="text-lg font-semibold text-green-900 mb-3">
                        {item.title}
                      </h3>
                      <span className="flex items-center justify-center text-green-900 mb-3">
                        {item.icon}
                      </span>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div> */}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-[#F9F7F1] py-12 sm:py-16 md:py-20 px-8 md:px-28 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-green-900 mb-10 sm:mb-12">
          Our Values
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {[
            {
              icon: <FaLuggageCart size={48} />,
              title: "Passion for Exploration",
              desc: "We are travelers at heart, driven by curiosity to discover new experiences and share them with you.",
            },
            {
              icon: <MdRoomService size={48} />,
              title: "Integrity & Trust",
              desc: "We value honesty and transparency in everything we do, ensuring you can rely on us completely.",
            },
            {
              icon: <FaUmbrellaBeach size={48} />,
              title: "Commitment to Quality",
              desc: "We handpick every partner and destination to ensure an exceptional standard throughout your journey.",
            },
            {
              icon: <IoBedOutline size={48} />,
              title: "Customer-Centric Approach",
              desc: "Your satisfaction is our top priority — we make your dream trip seamless, personal, and unforgettable.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center"
            >
              <span className="text-green-900 mb-4">{item.icon}</span>
              <h3 className="text-lg font-semibold text-green-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
