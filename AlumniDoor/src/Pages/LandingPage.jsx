import React from "react";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import QuickLinks from "../components/QuickLinks";

function LandingPage() {
  return (
    <>
      <NavBar page="LandingPage" />
      <HeroSection />
      <QuickLinks />
    </>
  );
}

export default LandingPage;
