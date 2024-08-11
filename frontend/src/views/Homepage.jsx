//  ! Here I also removed the commented out code snippets, as they are no longer needed.

import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import TravelMood from "../components/TravelMood/TravelMood";
import OurMission from "../components/OurMission";
import HowItWorks from "../components/HowItWorks";
import Carousel from "../components/Carousel";
import LoginViaTemple from "../components/LoginViaTemple";
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
      <Carousel />
      <TravelMood />
      <OurMission />
      <HowItWorks />
      <Testimonials />
      {/* <LoginViaTemple /> */} {/* We decided to get rid of that, right? */}
    </div>
  );
};

export default Homepage;