"use client";
import { ResortWellnessSpa } from "@/types/hotel.package.type";
import SliderWithArrows from "../ui/SliderWithArrows";

interface Props {
  wellnessSpa?: ResortWellnessSpa[];
}

const WellnessTab = ({ wellnessSpa }: Props) => {
  if (!wellnessSpa) return null;

  return (
    <div className="my-8">
      {wellnessSpa.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center my-10"
        >
          <SliderWithArrows images={item.images} />

          <div className="space-y-4">
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
              {/* <h5 className="font-semibold">Signature Treatments</h5> */}
              <div className="space-y-3">
                {item.signatureTreatments?.map((treat, i) => (
                  <div key={i}>
                    <p className="font-semibold">{treat.name}</p>
                    <p className="text-sm">{treat.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WellnessTab;
