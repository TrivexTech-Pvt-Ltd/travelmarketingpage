"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ResortDining } from "@/types/hotel.package.type";
import SliderWithArrows from "../ui/SliderWithArrows";
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
  dinings?: ResortDining[];
}

const DiningTab = ({ dinings }: Props) => {
  if (!dinings) return null;
  return (
    // <div className="my-8">
    //   {dinings.map((item, index) => (
    //     <div
    //       className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center my-10"
    //       key={index}
    //     >
    //       <SliderWithArrows images={item.images} />
    //       <div className="space-y-4">
    //         <h4 className="text-xl font-medium font-work-sans text-black uppercase">
    //           {item.name}
    //         </h4>
    //         <hr />
    //         <div className="text-gray-600">
    //           {item.description.map((text, index) => (
    //             <p className="py-4 text-base" key={index}>
    //               {text}
    //             </p>
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //   ))}
    // </div>

    <div className="my-8">
      {dinings.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center my-10"
        >
          {/* LEFT → Slider animation */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <SliderWithArrows images={item.images} />
          </motion.div>

          {/* RIGHT → Text block animation */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-4"
          >
            <h4 className="text-xl font-medium font-work-sans text-black uppercase">
              {item.name}
            </h4>

            <hr />

            <div className="text-gray-600">
              {item.description.map((text, idx) => (
                <p className="py-4 text-base" key={idx}>
                  {text}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default DiningTab;
