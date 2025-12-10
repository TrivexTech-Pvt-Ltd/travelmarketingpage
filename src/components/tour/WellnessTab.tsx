"use client";
import { ResortWellnessSpa } from "@/types/hotel.package.type";
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
  wellnessSpa?: ResortWellnessSpa[];
}

const WellnessTab = ({ wellnessSpa }: Props) => {
  if (!wellnessSpa) return null;

  return (
    // <div className="my-8">
    //   {wellnessSpa.map((item, index) => (
    //     <div
    //       key={index}
    //       className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center my-10"
    //     >
    //       <SliderWithArrows images={item.images} />

    //       <div className="space-y-4">
    //         <h4 className="text-xl font-medium font-work-sans text-black uppercase">
    //           {item.title}
    //         </h4>

    //         <hr />
    //         <p className="text-gray-600 py-1 text-base">{item.description}</p>
    //         <div className="text-gray-600">
    //           <ul className="list-disc pl-5">
    //             {item.highlights?.map((highlight, i) => (
    //               <li key={i} className="py-1">
    //                 {highlight}
    //               </li>
    //             ))}
    //           </ul>
    //         </div>

    //         <div className="text-gray-600">
    //           {/* <h5 className="font-semibold">Signature Treatments</h5> */}
    //           <div className="space-y-3">
    //             {item.signatureTreatments?.map((treat, i) => (
    //               <div key={i}>
    //                 <p className="font-semibold">{treat.name}</p>
    //                 <p className="text-sm">{treat.description}</p>
    //               </div>
    //             ))}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   ))}
    // </div>

    <div className="my-8">
      {wellnessSpa.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center my-10"
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

          {/* RIGHT → Text block animation */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-4"
          >
            <h4 className="text-xl font-medium font-work-sans text-black uppercase">
              {item.title}
            </h4>

            <hr />

            <p className="text-gray-600 py-1 text-base">{item.description}</p>

            <div className="text-gray-600">
              <ul className="list-disc pl-5">
                {item.highlights?.map((highlight, i) => (
                  <li key={i} className="py-1">
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-gray-600">
              <div className="space-y-3">
                {item.signatureTreatments?.map((treat, i) => (
                  <div key={i}>
                    <p className="font-semibold">{treat.name}</p>
                    <p className="text-sm">{treat.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default WellnessTab;
