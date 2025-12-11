// "use client";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { IoCheckmarkDoneSharp } from "react-icons/io5";
// import { ResortAccommodation } from "@/types/hotel.package.type";
// import SliderWithArrows from "../ui/SliderWithArrows";
// import Link from "next/link";
// import { HiArrowLongRight } from "react-icons/hi2";

// interface Props {
//   data?: ResortAccommodation[];
//   slug: string;
// }

// const AccommodationTab = ({ data, slug }: Props) => {
//   if (!data) return null;

//   return (
//     <div className="my-8">
//       {data.map((item, index) => (
//         <div
//           className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center my-10"
//           key={index}
//         >
//           <SliderWithArrows images={item.images} />

//           <div className="space-y-6">
//             <h2 className="text-xl font-medium font-work-sans text-black uppercase">
//               {item.name}
//             </h2>
//             <hr />

//             <div className="text-gray-600 space-y-2">
//               {item.area && (
//                 <p className="text-base font-medium text-sea-green">
//                   Total Area {item.area}
//                 </p>
//               )}

//               <p className="text-base font-medium text-sea-green font-work-sans">
//                 Guests:&nbsp;
//                 {item.paxChild === 0
//                   ? `${item.paxAdult} adults`
//                   : `${item.paxAdult} adults or ${item.paxAdult} adults + ${item.paxChild} child`}
//               </p>
//             </div>

//             <div className="space-y-3">
//               <ul className="space-y-3">
//                 {item.features.map((feature, idx) => (
//                   <li
//                     key={idx}
//                     className="flex items-center gap-2 text-gray-500 text-base"
//                   >
//                     <IoCheckmarkDoneSharp className="text-sea-green w-5 h-5" />
//                     {feature}
//                   </li>
//                 ))}
//               </ul>

//               <Link
//                 href={item.floorPlan.path}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="py-3 group inline-flex items-center gap-x-3 uppercase text-[15px] text-gray-700 font-semibold transition-all"
//               >
//                 <span className="group-hover:underline transition-all duration-300">
//                   View Floor Plan
//                 </span>
//                 <HiArrowLongRight
//                   size={18}
//                   className="opacity-80 transform transition-all duration-300 group-hover:translate-x-1.5 group-hover:opacity-100 group-hover:scale-110"
//                 />
//               </Link>

//               <Link
//                 href={`/maldives/${slug}/${item.slug}`}
//                 className="bg-sea-green text-white px-16 py-3 rounded-md block w-fit hover:bg-transparent hover:text-sea-green border border-sea-green transition-all duration-300"
//               >
//                 Explore
//               </Link>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AccommodationTab;
"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { ResortAccommodation } from "@/types/hotel.package.type";
import SliderWithArrows from "../ui/SliderWithArrows";
import Link from "next/link";
import { HiArrowLongRight } from "react-icons/hi2";
import { motion } from "framer-motion";
const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0 },
};
interface Props {
  data?: ResortAccommodation[];
  slug: string;
}

const AccommodationTab = ({ data, slug }: Props) => {
  if (!data) return null;

  return (
    // <div className="my-8">
    //   {data.map((item, index) => (
    //     <div
    //       className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center my-10"
    //       key={index}
    //     >
    //       {/* FIX: Pass images (string | StaticImageData)[] */}
    //       <SliderWithArrows images={item.images} />

    //       <div className="space-y-6">
    //         <h2 className="text-xl font-medium font-work-sans text-black uppercase">
    //           {item.name}
    //         </h2>
    //         <hr />

    //         <div className="text-gray-600 space-y-2">
    //           {item.area && (
    //             <p className="text-base font-medium text-sea-green">
    //               Total Area {item.area}
    //             </p>
    //           )}

    //           <p className="text-base font-medium text-sea-green font-work-sans">
    //             Guests:&nbsp;
    //             {item.paxChild === 0
    //               ? `${item.paxAdult} adults`
    //               : `${item.paxAdult} adults or ${item.paxAdult} adults + ${item.paxChild} child`}
    //           </p>
    //         </div>

    //         <div className="space-y-3">
    //           <ul className="space-y-3">
    //             {item.features.map((feature, idx) => (
    //               <li
    //                 key={idx}
    //                 className="flex items-center gap-2 text-gray-500 text-base"
    //               >
    //                 <IoCheckmarkDoneSharp className="text-sea-green w-5 h-5" />
    //                 {feature}
    //               </li>
    //             ))}
    //           </ul>

    //           <Link
    //             href={item.floorPlan.path}
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             className="py-3 group inline-flex items-center gap-x-3 uppercase text-[15px] text-gray-700 font-semibold transition-all"
    //           >
    //             <span className="group-hover:underline transition-all duration-300">
    //               View Floor Plan
    //             </span>
    //             <HiArrowLongRight
    //               size={18}
    //               className="opacity-80 transition-all duration-300 group-hover:translate-x-1.5 group-hover:opacity-100 group-hover:scale-110"
    //             />
    //           </Link>

    //           <Link
    //             href={`/maldives/${slug}/${item.slug}`}
    //             className="bg-sea-green text-white px-16 py-3 rounded-md block w-fit hover:bg-transparent hover:text-sea-green border border-sea-green transition-all duration-300"
    //           >
    //             Explore
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   ))}
    // </div>

    <div className="my-8">
      {data.map((item, index) => (
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center my-10"
          key={index}
        >
          {/* LEFT → Slider animation */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <SliderWithArrows images={item.images} />
          </motion.div>

          {/* RIGHT → Content animation */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <h2 className="text-xl font-medium font-work-sans text-black uppercase">
              {item.name}
            </h2>

            <hr />

            <div className="text-gray-600 space-y-2">
              {item.area && (
                <p className="text-base font-medium text-sea-green">
                  Total Area {item.area}
                </p>
              )}

              <p className="text-base font-medium text-sea-green font-work-sans">
                Guests:&nbsp;
                {item.paxChild === 0
                  ? `${item.paxAdult} adults`
                  : `${item.paxAdult} adults or ${item.paxAdult} adults + ${item.paxChild} child`}
              </p>
            </div>

            <div className="space-y-3">
              <ul className="space-y-3">
                {item.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-gray-500 text-base"
                  >
                    <IoCheckmarkDoneSharp className="text-sea-green w-5 h-5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={item.floorPlan.path}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 group inline-flex items-center gap-x-3 uppercase text-[15px] text-gray-700 font-semibold transition-all"
              >
                <span className="group-hover:underline transition-all duration-300">
                  View Floor Plan
                </span>
                <HiArrowLongRight
                  size={18}
                  className="opacity-80 transform transition-all duration-300 group-hover:translate-x-1.5 group-hover:opacity-100 group-hover:scale-110"
                />
              </Link>

              <Link
                href={`/maldives/${slug}/${item.slug}`}
                className="bg-sea-green text-white px-16 py-3 rounded-md block w-fit hover:bg-transparent hover:text-sea-green border border-sea-green transition-all duration-300"
              >
                Explore
              </Link>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default AccommodationTab;
