import SriLankaDestination from "@/components/destination/SriLankaDestination";
import Hero from "@/components/home/Hero";
import { srilankaHeroData } from "@/utils/data";
import React from "react";

const SriLanka = () => {
  return (
    <>
      <Hero heroData={srilankaHeroData} height="h-96 lg:h-full xl:h-[680px] 4xl:h-[1080px]" />
      <SriLankaDestination />
    </>
  );
};

export default SriLanka;
