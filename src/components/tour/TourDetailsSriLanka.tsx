"use client";
import { useEffect } from "react";
import { getSriLankanBySlug } from "@/utils/hotel";
import { useSLTourPackageStore } from "@/store/TourPackageStore";
import TourHeroSl from "./TourHeroSl";
import Container from "../Container";
import TourItinerary from "./TourItinerary";
import RoomCategories from "./RoomCategories";
import FeaturedHotelSl from "./FeaturedHotelSl";
import TourSliderSl from "./TourSliderSl";

const TourDetailsSriLanka = ({ slug }: { slug: string }) => {
  const packageData = getSriLankanBySlug(slug);
  const setPackageData = useSLTourPackageStore((s) => s.setPackage);

  useEffect(() => {
    setPackageData(packageData);
  }, [packageData, setPackageData]);
  return (
    <div className="bg-light-cyan">
      <div className="pt-20">
        <TourHeroSl />
      </div>
      <TourItinerary />
      <TourSliderSl data={packageData?.slItineryDetails} />
      <Container>
        <RoomCategories />
        <FeaturedHotelSl />
      </Container>
    </div>
  );
};

export default TourDetailsSriLanka;
