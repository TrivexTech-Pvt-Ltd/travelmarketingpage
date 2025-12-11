
"use client";
import Image from "next/image";
import ImageSlider from "./ui/ImageSlider";
import { aboutUsData } from "@/utils/data";
import { About1, About2, About3, About4, About5 } from "@/utils/staticImages";

import { motion } from "framer-motion";

const fadeDown = {
  hidden: { opacity: 0, y: -40 },
  show: { opacity: 1, y: 0 },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};
const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0 },
};
const AboutUs = () => {
  return (
    <>
      <ImageSlider
        heroData={aboutUsData}
        height="h-screen w-full object-contain"
      />
      <motion.div
        className="flex flex-col justify-center items-center max-w-7xl mx-auto max-sm:px-4 py-4 sm:py-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        transition={{ staggerChildren: 0.2 }}
      >
        {/* Heading — Fade DOWN */}
        <motion.h1
          variants={fadeDown}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-sea-green text-3xl sm:text-4xl md:text-5xl font-normal uppercase font-playfair-display my-5"
        >
          Where Passion Meets Discovery
        </motion.h1>

        {/* Paragraph — Fade UP */}
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-sm lg:text-lg text-gray-500 leading-7 text-center"
        >
          At Travel Nation, we believe that travel is more than just visiting a
          new destination – it&apos;s about experiencing the world in a way that
          transforms you. Founded with a passion for exploring the vibrant
          cultures and breathtaking landscapes of the Maldives and Sri Lanka,
          our mission is to bring these incredible destinations closer to you,
          with bespoke journeys tailored to your needs and dreams.
        </motion.p>
      </motion.div>

      {/* 1️⃣ Our Philosophy */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        {/* IMAGE — fade in FROM LEFT */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-1 lg:order-1"
        >
          <Image
            src={About1}
            height={500}
            width={500}
            alt="maldives"
            className="w-full h-96 lg:h-full xl:h-[680px] 4xl:h-[1080px]"
          />
        </motion.div>

        {/* TEXT — fade in FROM RIGHT */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-soft-beige p-6 flex justify-center items-center flex-col lg:px-12 h-full order-2 lg:order-2"
        >
          <div className="space-y-6 md:space-y-10">
            <h3 className="text-sea-green text-3xl sm:text-4xl md:text-5xl font-normal uppercase font-playfair-display">
              Our Philosophy
            </h3>

            <p className="text-sm lg:text-lg text-gray-500 leading-7">
              At Travel Nation, we believe that travel should transform, not
              merely take you from place to place. Our passion for Sri Lanka and
              the Maldives inspired the creation of journeys where every moment
              matters — where stories, landscapes, and traditions come together
              to leave a lasting impression.
            </p>

            <p className="text-sm lg:text-lg text-gray-500 leading-7">
              But our journeys are about more than exploration. We are committed
              to giving back to the communities we engage with, supporting local
              community initiatives that make a meaningful difference. We also
              strive to protect and preserve the natural environment.
            </p>

            <p className="text-sm lg:text-lg text-gray-500 leading-7">
              Every itinerary is designed with respect for the diverse cultures
              we encounter, honouring local customs and traditions while
              connecting travellers in a way that is both authentic and
              responsible.
            </p>
          </div>
        </motion.div>
      </div>

      {/* 2️⃣ What We Bring to Your Journey */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        {/* IMAGE — fade FROM RIGHT */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-1 lg:order-2"
        >
          <Image
            src={About2}
            height={500}
            width={500}
            alt="maldives"
            className="w-full h-96 lg:h-full xl:h-[680px] 4xl:h-[1080px]"
          />
        </motion.div>

        {/* TEXT — fade FROM LEFT */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-soft-beige p-6 flex justify-center items-center flex-col lg:px-12 h-full order-2 lg:order-1"
        >
          <div className="space-y-6 md:space-y-10">
            <h3 className="text-sea-green text-3xl sm:text-4xl md:text-5xl font-normal uppercase font-playfair-display">
              What We Bring to Your Journey
            </h3>

            <p className="text-sm lg:text-lg text-gray-500 leading-7">
              With decades of collective experience in destination planning,
              hospitality, and guest relations, our team brings unmatched local
              knowledge and insight into every journey. We know these islands
              intimately and use that understanding to design trips that balance
              comfort, authenticity, and seamless logistics. Our strength lies
              in creating moments that resonate — whether it&apos;s a sunrise
              hike through rolling hills, a private cultural performance, or a
              quiet evening by the sea.
            </p>
          </div>
        </motion.div>
      </div>

      {/* 3️⃣ Distinctive Journeys */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        {/* IMAGE — fade from LEFT */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-1 lg:order-1"
        >
          <Image
            src={About3}
            height={500}
            width={500}
            alt="maldives"
            className="w-full h-96 lg:h-full xl:h-[680px] 4xl:h-[1080px]"
          />
        </motion.div>

        {/* TEXT — fade from RIGHT */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-soft-beige p-6 flex justify-center items-center flex-col lg:px-12 h-full order-2 lg:order-2"
        >
          <div className="space-y-6 md:space-y-10">
            <h3 className="text-sea-green text-3xl sm:text-4xl md:text-5xl font-normal uppercase font-playfair-display">
              Distinctive Journeys
            </h3>

            <p className="text-sm lg:text-lg text-gray-500 leading-7">
              We do not simply arrange itineraries; we craft journeys that
              connect you with the heartbeat of a place. Every trip is built to
              immerse you in local traditions, the rhythms of everyday life, and
              the stories that make each destination unique. By combining
              hand-picked accommodations, thoughtful experiences, and attentive
              service, we allow you to travel freely, unburdened by logistics,
              yet enriched by encounters that linger in memory.
            </p>
          </div>
        </motion.div>
      </div>

      {/* 4️⃣ Our Way of Doing Things */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        {/* IMAGE — fade from RIGHT */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-1 lg:order-2"
        >
          <Image
            src={About4}
            height={500}
            width={500}
            alt="maldives"
            className="w-full h-96 lg:h-full xl:h-[680px] 4xl:h-[1080px]"
          />
        </motion.div>

        {/* TEXT — fade from LEFT */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-soft-beige p-6 flex justify-center items-center flex-col lg:px-12 h-full order-2 lg:order-1"
        >
          <div className="space-y-6 md:space-y-10">
            <h3 className="text-sea-green text-3xl sm:text-4xl md:text-5xl font-normal uppercase font-playfair-display">
              Our Way of Doing Things
            </h3>

            <p className="text-sm lg:text-lg text-gray-500 leading-7">
              Travel Nation is guided by a simple philosophy: listen first,
              personalise every detail, and deliver more than expected. From the
              moment you arrive to your final departure, each element of your
              journey is chosen with care. We celebrate the small things — a
              fragrant local breakfast, a sunset over a secluded lagoon, a
              shared laugh with a village family — because these are the moments
              that define travel, not checklists or schedules.
            </p>
          </div>
        </motion.div>
      </div>

      {/* 5️⃣ Your Journey, Our Care */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center pb-16">
        {/* IMAGE — fade FROM LEFT */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-1 lg:order-1"
        >
          <Image
            src={About5}
            height={500}
            width={500}
            alt="maldives"
            className="w-full h-96 lg:h-full xl:h-[680px] 4xl:h-[1080px]"
          />
        </motion.div>

        {/* TEXT — fade FROM RIGHT */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-soft-beige p-6 flex justify-center items-center flex-col lg:px-12 h-full order-2 lg:order-2"
        >
          <div className="space-y-6 md:space-y-10">
            <h3 className="text-sea-green text-3xl sm:text-4xl md:text-5xl font-normal uppercase font-playfair-display">
              Your Journey, Our Care
            </h3>

            <p className="text-sm lg:text-lg text-gray-500 leading-7">
              Choosing Travel Nation means travelling with clarity, confidence,
              and care. Our deep-rooted local connections, knowledge, and
              intuition reveal the hidden layers of Sri Lanka and the Maldives
              that most travellers never see. With us, your journey becomes more
              than a sequence of destinations — it becomes a story of discovery,
              a series of moments that stay with you long after you return home.
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default AboutUs;
