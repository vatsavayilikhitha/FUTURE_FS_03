import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrendingRow from "@/components/TrendingRow";
import CategoriesGrid from "@/components/CategoriesGrid";
import PlansSection from "@/components/PlansSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrendingRow />
      <CategoriesGrid />
      <PlansSection />
      <FaqSection />
      <Footer />
    </>
  );
}
