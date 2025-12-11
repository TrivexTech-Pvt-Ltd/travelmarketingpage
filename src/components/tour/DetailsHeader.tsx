"use client";
import { useTourPackageStore } from "@/store/TourPackageStore";
import Image from "next/image";
import { useState } from "react";
import Modal from "../ui/Modal";
import Quotation from "../ui/Quotation";
import { motion } from "framer-motion";

const fadeDown = {
  hidden: { opacity: 0, y: -40 },
  show: { opacity: 1, y: 0 },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};
const DetailsHeader = () => {
  const data = useTourPackageStore((s) => s.tourPackage);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  if (!data) return null;
  return (
    <motion.div
      className="flex flex-col lg:flex-row md:justify-center md:items-center gap-8 md:gap-16 my-5 max-w-7xl mx-auto"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
    >
      {/* LOGO — fade DOWN */}
      {data?.logo && (
        <motion.div
          variants={fadeDown}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex-shrink-0"
        >
          <Image
            src={data.logo}
            alt={data.name}
            width={200}
            height={200}
            className="max-sm:mx-auto"
          />
        </motion.div>
      )}

      {/* DESCRIPTION — fade UP */}
      <motion.div
        variants={fadeUp}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-lg text-gray-500 flex-1 max-sm:text-center"
      >
        {data?.descriptionLong}
      </motion.div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Get a Quote"
      >
        <Quotation />
      </Modal>
    </motion.div>
  );
};

export default DetailsHeader;
