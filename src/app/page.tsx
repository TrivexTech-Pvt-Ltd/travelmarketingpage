
import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import TourPackages from "@/components/tour/TourPackages";
import Quotation from "@/components/ui/Quotation";
import ReviewForm from "@/components/ui/ReviewForm";
import Testimonials from "@/components/ui/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <TourPackages />
      <Quotation />
      <ReviewForm />
      <Testimonials />
    </>
  );
}
