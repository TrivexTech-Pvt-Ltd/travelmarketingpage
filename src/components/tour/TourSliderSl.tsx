// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// type SLItinerary = {
//   id: number;
//   day: number;
//   location: string;
//   travelTime?: string;
//   image: string;
//   highlights: string[];
// };

// type TourSliderProps = {
//   data?: SLItinerary[];
// };

// export default function TourSliderSl({ data = [] }: TourSliderProps) {
//   return (
//     <section className="relative w-full h-[80vh] md:h-screen overflow-hidden py-10 px-8 md:px-12 lg:px-20 xl:px-30 2xl:px-40">
//       <Swiper
//         modules={[Autoplay, Pagination, Navigation]}
//         autoplay={{ delay: 4000, disableOnInteraction: false }}
//         pagination={{ clickable: true }}
//         navigation
//         loop
//         className="w-full h-full"
//       >
//         {data.map((item) => (
//           <SwiperSlide key={item.id}>
//             <div className="relative w-full h-full">
//               {/* BACKGROUND IMAGE (BLURRED + DARK OVERLAY) */}
//               <div
//                 className="absolute inset-0 bg-cover bg-center blur-sm scale-110"
//                 style={{ backgroundImage: `url(${item.image})` }}
//               />
//               <div className="absolute inset-0 bg-black/50" />

//               {/* CONTENT */}
//               <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col md:flex-row items-center justify-center gap-10 px-6">
//                 {/* FOREGROUND IMAGE */}
//                 <div className="w-full md:w-1/2">
//                   <img
//                     src={item.image}
//                     alt={item.location}
//                     className="rounded-xl shadow-2xl object-cover w-full h-[350px] md:h-[450px]"
//                   />
//                 </div>

//                 {/* TEXT AREA */}
//                 <div className="w-full md:w-1/2 text-white">
//                   <h2 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
//                     Day {item.day} – {item.location}
//                   </h2>

//                   {/* Travel time (optional) */}
//                   {item.travelTime && (
//                     <p className="mt-2 text-lg italic opacity-90">
//                       {item.travelTime}
//                     </p>
//                   )}

//                   <ul className="mt-6 space-y-3 text-lg leading-relaxed">
//                     {item.highlights.map((hl, i) => (
//                       <li key={i} className="flex gap-2">
//                         <span>•</span> {hl}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// }
// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// type SLItinerary = {
//   id: number;
//   day: number;
//   location: string;
//   travelTime?: string;
//   image: string; // always starts with "/images/..."
//   highlights: string[];
// };

// type TourSliderProps = {
//   data?: SLItinerary[];
// };

// export default function TourSliderSl({ data = [] }: TourSliderProps) {
//   return (
//     <section className="relative w-full h-[80vh] md:h-screen overflow-hidden py-10 px-8 md:px-12 lg:px-20 xl:px-30 2xl:px-40">
//       <Swiper
//         modules={[Autoplay, Pagination, Navigation]}
//         autoplay={{ delay: 4000, disableOnInteraction: false }}
//         pagination={{ clickable: true }}
//         navigation
//         loop
//         className="w-full h-full"
//       >
//         {data.map((item) => (
//           <SwiperSlide key={item.id}>
//             <div className="relative w-full h-full">
//               {/* BACKGROUND IMAGE */}
//               <div
//                 className="absolute inset-0 bg-cover bg-center blur-sm scale-110 transition-all duration-700"
//                 style={{
//                   backgroundImage: `url(${item.image})`,
//                 }}
//               />

//               {/* DARK OVERLAY */}
//               <div className="absolute inset-0 bg-black/50" />

//               {/* CONTENT */}
//               <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col md:flex-row items-center justify-center gap-10 px-6">
//                 {/* FOREGROUND IMAGE */}
//                 <div className="w-full md:w-1/2">
//                   <img
//                     src={item.image}
//                     alt={item.location}
//                     className="rounded-xl shadow-2xl object-cover w-full h-[350px] md:h-[450px]"
//                   />
//                 </div>

//                 {/* TEXT */}
//                 <div className="w-full md:w-1/2 text-white">
//                   <h2 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
//                     Day {item.day} – {item.location}
//                   </h2>

//                   {item.travelTime && (
//                     <p className="mt-2 text-lg italic opacity-90">
//                       {item.travelTime}
//                     </p>
//                   )}

//                   <ul className="mt-6 space-y-3 text-lg leading-relaxed">
//                     {item.highlights.map((hl, i) => (
//                       <li key={i} className="flex gap-2">
//                         <span>•</span> {hl}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// }
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

type SLItinerary = {
  id: number;
  day: number;
  location: string;
  travelTime?: string;
  image: string;
  highlights: string[];
};

type TourSliderProps = {
  data?: SLItinerary[];
};

export default function TourSliderSl({ data = [] }: TourSliderProps) {
  return (
    <section className="relative w-full h-[85vh] sm:h-[90vh] md:h-screen overflow-hidden py-6 sm:py-10 px-4 sm:px-6 md:px-12 lg:px-20">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true, dynamicBullets: true }}
        navigation
        loop
        className="w-full h-full"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative w-full h-full">
              {/* BACKGROUND IMAGE */}
              <div
                className="absolute inset-0 bg-cover bg-center blur-sm scale-110"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="absolute inset-0 bg-black/60" />

              {/* CONTENT */}
              <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-10 px-4 sm:px-6">
                {/* IMAGE */}
                <div className="w-full md:w-1/2 flex justify-center">
                  <img
                    src={item.image}
                    alt={item.location}
                    className="rounded-xl shadow-2xl object-cover 
                               w-full max-w-md 
                               h-[250px] sm:h-[320px] md:h-[420px]"
                  />
                </div>

                {/* TEXT */}
                <div className="w-full md:w-1/2 text-white text-center md:text-left">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-lg">
                    Day {item.day} – {item.location}
                  </h2>

                  {item.travelTime && (
                    <p className="mt-2 text-base sm:text-lg italic opacity-90">
                      {item.travelTime}
                    </p>
                  )}

                  {/* <ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-3 text-base sm:text-lg leading-relaxed">
                    {item.highlights.map((hl, i) => (
                      <li
                        key={i}
                        className="flex gap-2 justify-center md:justify-start"
                      >
                        <span>•</span> {hl}
                      </li>
                    ))}
                  </ul> */}
                  <ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-3 text-base sm:text-lg leading-relaxed text-white">
                    {item.highlights.map((hl, i) => (
                      <li
                        key={i}
                        className="flex gap-2 justify-center md:justify-start text-white"
                      >
                        <span className="inline-block w-3 text-white !important">
                          •
                        </span>
                        <span className="text-white">{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
