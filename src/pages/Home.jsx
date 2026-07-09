import React from "react";
import Navbar from "./Navbar";
import HeroCarousel from "../components/HeroCaresoul";
import WelcomeSection from "../components/Welcomesection";
import ProjectsSection from "../components/Projectsection";
import WhyChooseUs from "../components/Whychooseus";
import Clients from "../components/Clients";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <HeroCarousel />
      <WelcomeSection />
      <ProjectsSection />
      <WhyChooseUs />
      <Clients />
      <Footer />
    </div>
  );
}

export default Home;
