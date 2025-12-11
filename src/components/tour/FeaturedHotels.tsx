
"use client";
import { MaldivesData } from "@/utils/data";
import { useTourPackageStore } from "@/store/TourPackageStore";
import PackageCard from "../ui/PackageCard";

const FeaturedHotels = () => {
  const data = useTourPackageStore((s) => s.tourPackage);

  if (!data) return null;

  const featuredHotelsData = MaldivesData.filter((x) =>
    data?.featuredHotels?.includes(x.id)
  );

  return (
    <div className="py-16 md:px-36 4xl:px-96">
      <h3 className="text-3xl sm:text-4xl text-sea-green font-semibold font-playfair-display py-5">
        You May Also Like
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 p-4">
        {featuredHotelsData.map((hotel, index) => (
          <PackageCard
            key={index}
            country="maldives"
            {...hotel}
            nights={String(hotel.nights)} 
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedHotels;
