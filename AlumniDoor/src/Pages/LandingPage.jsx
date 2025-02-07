import React from "react";

import { NavBar, HeroSection, QuickLinks } from "../components";

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
