import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";
import Hero3 from "@/components/Hero3";
import AirMaxSection from "@/components/AirMaxSection";
import ProductGrid from "@/components/ProductGrid";
import Featured from "@/components/Featured";
import Gearup from "@/components/Gearup";
import Jordanspring from "@/components/Jordanspring";
import Essential from "@/components/Essential";
import CategoryLinks from "@/components/CategoryLinks";

export default function Home() {
  return (
    <>
      <Hero />
      <Hero2 />
      <Hero3 />
      <AirMaxSection />
      <ProductGrid />
      <Featured />
      <Gearup />
      <Jordanspring />
      <Essential />
      <CategoryLinks />
    </>
  );
}
