import Destinations from "@/components/home/Destinations";
import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import Services from "@/components/home/Services";
import TourPackages from "@/components/tour/TourPackages";
import ReviewForm from "@/components/ui/ReviewForm";
import Testimonials from "@/components/ui/Testimonials";
import { slideData } from "@/utils/data";

export default function Home() {
  return (
    <>
      <Hero heroData={slideData} height="lg:min-h-screen"/>
      <Intro />
      <Destinations />
      <Services />
      <TourPackages />
      <Testimonials />
      <ReviewForm />
    </>
  );
}
