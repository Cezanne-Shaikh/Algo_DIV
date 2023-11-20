import Benefits from "@/components/Benefits";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Plans from "@/components/Plans";
import Support from "@/components/Support";
import React from "react";

const page = () => {
  return (
    <div className="main">
      <Navbar />
      <Hero />
      <Support />
      <Features />
      <Benefits />
      <Plans />
    <Footer />
    </div>

  );
};

export default page;
