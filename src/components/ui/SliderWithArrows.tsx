// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
// import Image, { StaticImageData } from "next/image";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { useEffect, useRef, useState, useMemo } from "react";
// import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
// import FsLightbox from "fslightbox-react";

// type SliderWithArrowsProps = {
//   images: (StaticImageData | string)[];
// };

// const SliderWithArrows = ({ images }: SliderWithArrowsProps) => {
//   const prevRef = useRef<HTMLButtonElement | null>(null);
//   const nextRef = useRef<HTMLButtonElement | null>(null);
//   const swiperRef = useRef<any>(null);

//   const [toggler, setToggler] = useState(false);
//   const [slideIndex, setSlideIndex] = useState(0);

//   // Lightbox handle BOTH string + StaticImageData
//   const lightboxSources = useMemo(() => {
//     return images.map((img) => (typeof img === "string" ? img : img.src));
//   }, [images]);

//   // Fix navigation refs
//   useEffect(() => {
//     if (
//       swiperRef.current &&
//       swiperRef.current.params &&
//       prevRef.current &&
//       nextRef.current
//     ) {
//       swiperRef.current.params.navigation.prevEl = prevRef.current;
//       swiperRef.current.params.navigation.nextEl = nextRef.current;
//       swiperRef.current.navigation.destroy();
//       swiperRef.current.navigation.init();
//       swiperRef.current.navigation.update();
//     }
//   }, []);

//   return (
//     <>
//       {/* Lightbox */}
//       <FsLightbox
//         toggler={toggler}
//         sources={lightboxSources}
//         slide={slideIndex}
//       />

//       <div className="relative w-full h-96 lg:h-full xl:h-96 4xl:h-[840px] rounded-2xl overflow-hidden group">
//         <Swiper
//           modules={[Navigation, Pagination, Autoplay, A11y]}
//           slidesPerView={1}
//           autoplay={{ delay: 4000, disableOnInteraction: false }}
//           speed={800}
//           loop={true}
//           navigation={{
//             prevEl: prevRef.current,
//             nextEl: nextRef.current,
//           }}
//           onSwiper={(swiper) => (swiperRef.current = swiper)}
//           className="w-full h-full"
//         >
//           {images.map((img, index) => (
//             <SwiperSlide key={index} className="relative w-full h-full">
//               <div
//                 className="w-full h-full cursor-pointer"
//                 onClick={() => {
//                   setSlideIndex(index);
//                   setToggler((prev) => !prev);
//                 }}
//               >
//                 <Image
//                   src={typeof img === "string" ? img : img.src}
//                   alt={`accommodation_${index}`}
//                   fill
//                   className="object-cover object-center"
//                   sizes="100vw"
//                 />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Nav arrows */}
//         <button
//           ref={prevRef}
//           className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
//         >
//           <BsArrowLeft size={36} />
//         </button>

//         <button
//           ref={nextRef}
//           className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
//         >
//           <BsArrowRight size={36} />
//         </button>
//       </div>
//     </>
//   );
// };

// export default SliderWithArrows;

"use client";

import React, { useState, useMemo } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import Image, { StaticImageData } from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

type SliderWithArrowsProps = {
  images: (StaticImageData | string)[];
};

const SliderWithArrows = ({ images }: SliderWithArrowsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const slides = useMemo(
    () =>
      images.map((img) => ({
        src: typeof img === "string" ? img : img.src,
      })),
    [images]
  );

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slideChanged(s) {
      setCurrentIndex(s.track.details.rel);
    },
  });

  return (
    <>
      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={currentIndex}
      />

      <div className="relative group rounded-2xl overflow-hidden w-full h-96 lg:h-full xl:h-96 4xl:h-[840px]">
        <div ref={sliderRef} className="keen-slider w-full h-full">
          {images.map((img, i) => (
            <div
              key={i}
              className="keen-slider__slide relative w-full h-full cursor-pointer"
              onClick={() => {
                setCurrentIndex(i);
                setOpen(true);
              }}
            >
              <Image
                src={typeof img === "string" ? img : img.src}
                alt={`image_${i}`}
                fill
                className="object-cover object-center"
                sizes="100vw"
              />
            </div>
          ))}
        </div>

        {/* Prev */}
        <button
          onClick={() => slider.current?.prev()}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 
          opacity-0 group-hover:opacity-100 transition-all hover:scale-110 text-white"
        >
          <BsArrowLeft size={36} />
        </button>

        {/* Next */}
        <button
          onClick={() => slider.current?.next()}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 
          opacity-0 group-hover:opacity-100 transition-all hover:scale-110 text-white"
        >
          <BsArrowRight size={36} />
        </button>
      </div>
    </>
  );
};

export default SliderWithArrows;
