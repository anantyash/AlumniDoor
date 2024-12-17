import React from "react";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import QuickLinks from "../components/QuickLinks";
import Footer from "../components/Footer";

function LandingPage() {
  return (
    <>
      <NavBar page="LandingPage" />
      <HeroSection />
      <QuickLinks />
      <Footer />
    </>
  );
}

export default LandingPage;
