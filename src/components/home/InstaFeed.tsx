// "use client"

// import Link from "next/link"
// import { motion } from "framer-motion"

// const InstaFeed = () => {
//     return (
//         <motion.div
//             className="w-full overflow-hidden px-28 py-16"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             viewport={{ once: true, amount: 0.3 }}
//         >
//             <motion.p
//                 className="text-base lg:text-lg text-gray-500 leading-7 uppercase font-semibold text-center"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.1 }}
//                 viewport={{ once: true }}
//             >
//                 instagram feed
//             </motion.p>

//             <motion.h3
//                 className="text-sea-green text-3xl sm:text-4xl md:text-5xl uppercase font-normal font-playfair-display text-center py-5"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.7, delay: 0.2 }}
//                 viewport={{ once: true }}
//             >
//                 Stories in motion
//             </motion.h3>

//             <motion.div
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.8, delay: 0.3 }}
//                 viewport={{ once: true }}
//             >
//                 <iframe
//                     src="//lightwidget.com/widgets/a6dcec036cbf5943ab9d24d01eeb965e.html"
//                     // @ts-ignore - non-standard attribute required by LightWidget
//                     allowtransparency="true"
//                     className="lightwidget-widget"
//                     scrolling="no"
//                     style={{ width: "100%", border: 0, overflow: "hidden" }}
//                 />
//             </motion.div>

//             <motion.div
//                 className="flex justify-center py-2"
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ duration: 0.6, delay: 0.4 }}
//                 viewport={{ once: true }}
//             >
//                 <Link
//                     href="https://www.instagram.com/travelnationvip/"
//                     target="_blank"
//                     className="underline text-shadow-wash font-medium transition-all duration-300 font-libreBaskerville hover:scale-105"
//                 >
//                     @TravelNation
//                 </Link>
//             </motion.div>
//         </motion.div>

//     )
// }

// export default InstaFeed

"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const InstaFeed = () => {
  return (
    <motion.div
      className="w-full overflow-hidden px-28 py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.p
        className="text-base lg:text-lg text-gray-500 leading-7 uppercase font-semibold text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        instagram feed
      </motion.p>

      <motion.h3
        className="text-sea-green text-3xl sm:text-4xl md:text-5xl uppercase font-normal font-playfair-display text-center py-5"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Stories in motion
      </motion.h3>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <iframe
          src="https://snapwidget.com/embed/1056085"
          className="w-full"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          allow="autoplay; encrypted-media"
        ></iframe>
      </motion.div>

      <motion.div
        className="flex justify-center py-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Link
          href="https://www.instagram.com/travelnationvip/"
          target="_blank"
          className="underline font-medium transition-all duration-300 hover:scale-105"
        >
          @TravelNation
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default InstaFeed;
