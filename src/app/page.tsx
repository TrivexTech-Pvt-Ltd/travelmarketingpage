
import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import TourPackages from "@/components/tour/TourPackages";
import ReviewForm from "@/components/ui/ReviewForm";
import Testimonials from "@/components/ui/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <TourPackages />
      <ReviewForm />
      <Testimonials />
    </>
  );
}
