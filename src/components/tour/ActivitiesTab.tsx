"use client";
import { ResortActivity } from "@/types/hotel.package.type";
import Image from "next/image";
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
  activities?: ResortActivity[];
}

const ActivitiesTab = ({ activities }: Props) => {
  if (!activities) return null;
  return (
    // <div className="my-8">
    //   {activities.map((item, index) => (
    //     <div
    //       className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center my-10"
    //       key={index}
    //     >
    //       <SliderWithArrows images={item.images} />
    //       <div className="space-y-4">
    //         <h4 className="text-xl font-medium font-work-sans text-black uppercase">
    //           {item.title}
    //         </h4>
    //         <hr />
    //         <div className="text-gray-600">
    //           {item.description.map((text, index) => (
    //             <p className="py-4 text-base" key={index}>
    //               {text}
    //             </p>
    //           ))}
    //           {item.activityList && (
    //             <ul className="flex flex-col gap-y-1 list-disc pl-4">
    //               {item.activityList.map((item, index) => (
    //                 <li key={index}>{item}</li>
    //               ))}
    //             </ul>
    //           )}
    //         </div>
    //       </div>
    //     </div>
    //   ))}
    // </div>
    <div className="my-8">
      {activities.map((item, index) => (
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center my-10"
          key={index}
        >
          {/* LEFT – Slider fades & slides in from LEFT */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <SliderWithArrows images={item.images} />
          </motion.div>

          {/* RIGHT – Text fades & slides in from RIGHT */}
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

            <div className="text-gray-600">
              {item.description.map((text, idx) => (
                <p className="py-4 text-base" key={idx}>
                  {text}
                </p>
              ))}

              {item.activityList && (
                <ul className="flex flex-col gap-y-1 list-disc pl-4">
                  {item.activityList.map((activity, idx) => (
                    <li key={idx}>{activity}</li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default ActivitiesTab;
