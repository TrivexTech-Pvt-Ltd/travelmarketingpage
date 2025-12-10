// // import Image, { StaticImageData } from "next/image";
// // import { MapPin, Calendar1, PlaneIcon, SailboatIcon } from "lucide-react";
// // import Link from "next/link";
// // import { FiMapPin } from "react-icons/fi";
// // import { motion } from "framer-motion";
// // const fadeUp = {
// //   hidden: { opacity: 0, y: 40 },
// //   show: { opacity: 1, y: 0 },
// // };

// // const fadeDown = {
// //   hidden: { opacity: 0, y: -40 },
// //   show: { opacity: 1, y: 0 },
// // };
// // interface TravelCardProps {
// //   name: string;
// //   location: string;
// //   image: string;
// //   title: string;
// //   slug: string;
// //   country?: string;
// //   nights: string;
// // }

// // const PackageCard = ({
// //   image,
// //   name,
// //   location,
// //   slug,
// //   country,
// //   title,
// //   nights,
// // }: TravelCardProps) => {
// //   return (
// //     // <div className="relative w-full overflow-hidden group">
// //     //   {/* Background Image */}
// //     //   <div className="relative h-96 md:h-[680px] 4xl:h-[920px] w-full">
// //     //     <Image
// //     //       src={image}
// //     //       alt={title}
// //     //       fill
// //     //       className="object-cover transition-transform duration-700 group-hover:scale-105"
// //     //       priority
// //     //     />
// //     //   </div>

// //     //   {/* Overlay */}
// //     //   <div
// //     //     className="absolute inset-0 bg-black/40 transition-opacity duration-500
// //     //                group-hover:bg-black/20 pointer-events-none"
// //     //   />

// //     //   {/* Content */}
// //     //   <div className="absolute bottom-10 left-0 right-0 px-6 text-white text-center">
// //     //     <div className="flex justify-center items-center">
// //     //       <p className="text-sm 4xl:text-lg opacity-90 flex items-center gap-x-2 mx-auto capitalize">
// //     //         {" "}
// //     //         <FiMapPin /> {location}
// //     //       </p>
// //     //     </div>

// //     //     <h2 className="mt-2 text-2xl 4xl:text-4xl font-playfair-display font-medium">
// //     //       {name}
// //     //     </h2>
// //     //     {country === "sri-lanka" ? (
// //     //       <div className="flex justify-center items-center pt-3">
// //     //         <p className="text-sm 4xl:text-lg opacity-90 flex items-center gap-x-2 mx-auto capitalize text-center">
// //     //           {nights}
// //     //         </p>
// //     //       </div>
// //     //     ) : null}

// //     //     <Link
// //     //       href={`/${country}/${slug}`}
// //     //       className="mt-6 inline-block border shadow-md border-sea-green rounded-4xl bg-transparent text-sea-green px-6 py-2
// //     //                  text-sm font-medium hover:bg-sea-green hover:text-white hover:scale-105
// //     //                  transition-all duration-300"
// //     //     >
// //     //       More Info
// //     //     </Link>
// //     //   </div>
// //     // </div>
// //     <motion.div
// //       className="relative w-full overflow-hidden group"
// //       initial="hidden"
// //       whileInView="show"
// //       viewport={{ once: true, amount: 0.2 }}
// //       transition={{ staggerChildren: 0.2 }}
// //     >
// //       {/* Background Image — fade UP */}
// //       <motion.div
// //         variants={fadeUp}
// //         transition={{ duration: 0.7, ease: "easeOut" }}
// //         className="relative h-96 md:h-[680px] 4xl:h-[920px] w-full"
// //       >
// //         <Image
// //           src={image}
// //           alt={title}
// //           fill
// //           className="object-cover transition-transform duration-700 group-hover:scale-105"
// //           priority
// //         />
// //       </motion.div>

// //       {/* Overlay (static) */}
// //       <div className="absolute inset-0 bg-black/40 transition-opacity duration-500 group-hover:bg-black/20 pointer-events-none" />

// //       {/* Content — fade DOWN */}
// //       <motion.div
// //         variants={fadeDown}
// //         transition={{ duration: 0.7, ease: "easeOut" }}
// //         className="absolute bottom-10 left-0 right-0 px-6 text-white text-center"
// //       >
// //         <div className="flex justify-center items-center">
// //           <p className="text-sm 4xl:text-lg opacity-90 flex items-center gap-x-2 mx-auto capitalize">
// //             <FiMapPin /> {location}
// //           </p>
// //         </div>

// //         <h2 className="mt-2 text-2xl 4xl:text-4xl font-playfair-display font-medium">
// //           {name}
// //         </h2>

// //         {country === "sri-lanka" && (
// //           <div className="flex justify-center items-center pt-3">
// //             <p className="text-sm 4xl:text-lg opacity-90 mx-auto capitalize text-center">
// //               {nights}
// //             </p>
// //           </div>
// //         )}

// //         <Link
// //           href={`/${country}/${slug}`}
// //           className="mt-6 inline-block border shadow-md border-sea-green rounded-4xl bg-transparent text-sea-green px-6 py-2
// //                      text-sm font-medium hover:bg-sea-green hover:text-white hover:scale-105
// //                      transition-all duration-300"
// //         >
// //           More Info
// //         </Link>
// //       </motion.div>
// //     </motion.div>
// //   );
// // };

// // export default PackageCard;
// import Image from "next/image";
// import { FiMapPin } from "react-icons/fi";
// import Link from "next/link";
// import { motion } from "framer-motion";

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   show: { opacity: 1, y: 0 },
// };

// const fadeDown = {
//   hidden: { opacity: 0, y: -40 },
//   show: { opacity: 1, y: 0 },
// };

// interface TravelCardProps {
//   name: string;
//   location: string;
//   image: string;
//   title: string;
//   slug: string;
//   country?: string;
//   nights: string; // expects string → that's why we fixed it above
// }

// const PackageCard = ({
//   image,
//   name,
//   location,
//   slug,
//   country,
//   title,
//   nights,
// }: TravelCardProps) => {
//   return (
//     <motion.div
//       className="relative w-full overflow-hidden group"
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: true, amount: 0.2 }}
//       transition={{ staggerChildren: 0.2 }}
//     >
//       {/* Image Animation */}
//       <motion.div
//         variants={fadeUp}
//         transition={{ duration: 0.7, ease: "easeOut" }}
//         className="relative h-96 md:h-[680px] 4xl:h-[920px] w-full"
//       >
//         <Image
//           src={image}
//           alt={title}
//           fill
//           className="object-cover transition-transform duration-700 group-hover:scale-105"
//           priority
//         />
//       </motion.div>

//       {/* Dark overlay */}
//       <div className="absolute inset-0 bg-black/40 transition-opacity duration-500 group-hover:bg-black/20 pointer-events-none" />

//       {/* Text Content */}
//       <motion.div
//         variants={fadeDown}
//         transition={{ duration: 0.7, ease: "easeOut" }}
//         className="absolute bottom-10 left-0 right-0 px-6 text-white text-center"
//       >
//         <p className="text-sm 4xl:text-lg opacity-90 flex items-center gap-x-2 mx-auto capitalize">
//           <FiMapPin /> {location}
//         </p>

//         <h2 className="mt-2 text-2xl 4xl:text-4xl font-playfair-display font-medium">
//           {name}
//         </h2>

//         {country === "sri-lanka" && (
//           <p className="text-sm 4xl:text-lg opacity-90 mx-auto capitalize text-center pt-3">
//             {nights}
//           </p>
//         )}

//         <Link
//           href={`/${country}/${slug}`}
//           className="mt-6 inline-block border shadow-md border-sea-green rounded-4xl bg-transparent text-sea-green px-6 py-2
//                      text-sm font-medium hover:bg-sea-green hover:text-white hover:scale-105
//                      transition-all duration-300"
//         >
//           More Info
//         </Link>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default PackageCard;
"use client";

import Image from "next/image";
import { FiMapPin } from "react-icons/fi";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const fadeDown = {
  hidden: { opacity: 0, y: -40 },
  show: { opacity: 1, y: 0 },
};

interface TravelCardProps {
  name: string;
  location: string; // ⭐ required
  image: string;
  title: string;
  slug: string;
  country?: string;
  nights: string;
}

const PackageCard = ({
  image,
  name,
  location,
  slug,
  country,
  title,
  nights,
}: TravelCardProps) => {
  return (
    <motion.div
      className="relative w-full overflow-hidden group"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
    >
      {/* Image */}
      <motion.div
        variants={fadeUp}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative h-96 md:h-[680px] 4xl:h-[920px] w-full"
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 transition-opacity duration-500 group-hover:bg-black/20 pointer-events-none" />

      {/* Text */}
      <motion.div
        variants={fadeDown}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="absolute bottom-10 left-0 right-0 px-6 text-white text-center"
      >
        <p className="text-sm 4xl:text-lg opacity-90 flex items-center gap-x-2 mx-auto capitalize">
          <FiMapPin /> {location}
        </p>

        <h2 className="mt-2 text-2xl 4xl:text-4xl font-playfair-display font-medium">
          {name}
        </h2>

        {/* ONLY Sri Lanka shows nights */}
        {country === "sri-lanka" && (
          <p className="text-sm 4xl:text-lg opacity-90 mx-auto capitalize pt-3">
            {nights}
          </p>
        )}

        <Link
          href={`/${country}/${slug}`}
          className="mt-6 inline-block border shadow-md border-sea-green rounded-4xl bg-transparent text-sea-green px-6 py-3 
                     text-sm font-medium hover:bg-sea-green hover:text-white hover:scale-105  
                     transition-all duration-300"
        >
          More Info
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default PackageCard;
