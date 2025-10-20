"use client";

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-800">
      <div
        className="bg-no-repeat bg-cover bg-center relative flex items-center justify-center h-64 sm:h-80 md:h-96 lg:h-[32rem]"
        style={{ backgroundImage: "url('/images/hero/services-hero.webp')" }}
      ></div>

      <section className="py-12 sm:py-16 md:py-20 text-center max-w-3xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-green-900 mb-6">
          About Travel Nation
        </h1>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
          At Travel Nation, we believe that travel is more than just visiting a
          new destination – it’s about experiencing the world in a way that
          transforms you. Founded with a passion for exploring the vibrant
          cultures and breathtaking landscapes of the Maldives and Sri Lanka,
          our mission is to bring these incredible destinations closer to you,
          with bespoke journeys tailored to your needs and dreams.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8 items-center bg-[#F9F7F1] py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-16">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-green-900 mb-4">
            Our Story
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            Travel Nation was born out of a simple idea: to create travel
            experiences that leave a lasting impact. What began as a small,
            dedicated team with a shared love for adventure has grown into a
            trusted travel company that specializes in two of the world’s most
            iconic destinations. With years of experience in the travel
            industry, we aim to create unique, meaningful experiences for every
            traveler.
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-md">
          <Image
            src="/images/about/story.webp"
            alt="Our Story"
            width={600}
            height={400}
            className="object-cover w-full h-64 sm:h-80 md:h-full"
          />
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-8 items-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-16 bg-[#F9F7F1]">
        <div className="rounded-2xl overflow-hidden shadow-md">
          <Image
            src="/images/about/mission.webp"
            alt="Our Mission"
            width={600}
            height={400}
            className="object-cover w-full h-64 sm:h-80 md:h-full"
          />
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-green-900 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
            Our mission is simple: to craft authentic, personalized travel
            experiences that bring out the very best of the Maldives and Sri
            Lanka. We believe in curating journeys that blend luxury, adventure,
            culture, and nature in perfect harmony.
          </p>

          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            spaceBetween={20}
            className="rounded-xl"
          >
            <SwiperSlide>
              <div className="text-center bg-white p-4 sm:p-6 rounded-xl shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold text-green-900 mb-2">
                  Sustainability
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                  We respect the environments we operate in and work with local
                  communities to promote responsible tourism that preserves
                  these destinations for future generations.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="text-center bg-white p-4 sm:p-6 rounded-xl shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold text-green-900 mb-2">
                  Excellence
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                  We go the extra mile for our clients, ensuring seamless
                  experiences from the moment you contact us until you return
                  home.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 text-center px-4 sm:px-6 lg:px-16 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold text-green-900 mb-10 sm:mb-12">
          Our Values
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-green-900 mb-2">
              Passion for Exploration
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              We are travelers at heart, driven by a desire to uncover new
              experiences and share them with you.
            </p>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-green-900 mb-2">
              Integrity and Trust
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              We value honesty and transparency in everything we do, ensuring
              you can always rely on us to deliver what we promise.
            </p>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-green-900 mb-2">
              Commitment to Quality
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              We carefully select our partners, ensuring every element of your
              journey is of the highest standard.
            </p>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-green-900 mb-2">
              Customer-Centric Approach
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Your satisfaction is our top priority. We’re here to make your
              dream trip a reality, with personalized attention every step of
              the way.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
