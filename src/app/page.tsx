"use client" 
import "aos/dist/aos.css"
import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";
import Hero3 from "@/components/Hero3";
import AirMaxSection from "@/components/AirMaxSection";
import Featured from "@/components/Featured";
import Gearup from "@/components/Gearup";
import Jordanspring from "@/components/Jordanspring";
import Essential from "@/components/Essential";
import CategoryLinks from "@/components/CategoryLinks";
import AOS from "aos" 
import { useEffect } from "react";



export default  function Home() {
  useEffect (() => {

    AOS.init({
    easing:"ease-out-back",
    duration:1200,
    delay:100,
    mirror: true,
    anchorPlacement:"bottom-bottom",
    offset:160,
    
    });
    AOS.refresh()
    },[]);
    
  return (
    <>
      <Hero />
      <Hero2 />
      <Hero3 />
      <AirMaxSection />
      
      <Featured />
      <Gearup />
      <Jordanspring />
      <Essential />
      <CategoryLinks />
    </>
  );
}
