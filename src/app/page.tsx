import Destinations from "@/components/home/Destinations";
import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import Services from "@/components/home/Services";
import TourPackages from "@/components/tour/TourPackages";
import ContactUs from "@/components/ui/ContactUs";
import Quotation from "@/components/ui/Quotation";
import ReviewForm from "@/components/ui/ReviewForm";
import Testimonials from "@/components/ui/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Destinations />
      <Services />
      <TourPackages />
      <Quotation />
      <ReviewForm />
      <Testimonials />
    </>
  );
}
