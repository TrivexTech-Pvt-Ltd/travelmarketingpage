import Blogs from "@/components/home/Blogs";
import Destinations from "@/components/home/Destinations";
import Hero from "@/components/home/Hero";
import InstaFeed from "@/components/home/InstaFeed";
import Intro from "@/components/home/Intro";
import Services from "@/components/home/Services";
import TourPackages from "@/components/tour/TourPackages";
import Testimonials from "@/components/ui/Testimonials";
import TrustBox from "@/components/ui/TrustBox";
import { slideData } from "@/utils/data";
import dynamic from "next/dynamic";

export default function Home() {

  return (
    <>
      <Hero heroData={slideData} height="lg:h-screen" />
      <Intro />
      <Destinations />
      <Services />
      <TourPackages />
      <InstaFeed/>
      <Testimonials />
      <Blogs />
    </>
  );
}
