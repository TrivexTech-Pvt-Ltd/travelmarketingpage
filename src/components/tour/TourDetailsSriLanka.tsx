"use client";
import { useEffect } from "react";
import { getSriLankanBySlug } from "@/utils/hotel";
import { useSLTourPackageStore } from "@/store/TourPackageStore";
import TourHeroSl from "./TourHeroSl";
import TourItinerary from "./TourItinerary";
import TourSliderSl from "./TourSliderSl";
import FooterNote from "../destination/FooterNote";
import Testimonials from "../ui/Testimonials";

const TourDetailsSriLanka = ({ slug }: { slug: string }) => {
  const packageData = getSriLankanBySlug(slug);
  const setPackageData = useSLTourPackageStore((s) => s.setPackage);

  useEffect(() => {
    setPackageData(packageData);
  }, [packageData, setPackageData]);
  return (
    <>
      <TourHeroSl />
      <TourItinerary />
      <TourSliderSl data={packageData?.slItineryDetails} />
      <FooterNote />
      <Testimonials />
    </>
  );
};

export default TourDetailsSriLanka;
