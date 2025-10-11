
import Hero from "@/components/home/Hero";
import TourPackages from "@/components/tour/TourPackages";
import Quotation from "@/components/ui/Quotation";
import ReviewForm from "@/components/ui/ReviewForm";
import Testimonials from "@/components/ui/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <TourPackages />
      <Quotation />
      <ReviewForm />
      <Testimonials />
    </>
  );
}
