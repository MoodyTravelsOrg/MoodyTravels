

import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import TravelMood from "../components/TravelMood/TravelMood";
import OurMission from "../components/OurMission";
import HowItWorks from "../components/HowItWorks";
import HeroSection from "../components/HeroSection";
import Testimonials from "../components/Testimonials";
import { animateScroll as scroll } from "react-scroll";

const Homepage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        scroll.scrollTo(element.offsetTop - 64, {
          duration: 500,
          smooth: true,
        });
      }
    }
  }, [location]);

  return (
    <div className="pt-28 space-y-16 pb-24">
      <HeroSection />
      <TravelMood />
      <OurMission />
      <HowItWorks />
      <Testimonials />
    </div>
  );
};

export default Homepage;