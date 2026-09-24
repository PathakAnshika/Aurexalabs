"use client";

import { useState } from "react";

import Hero from "../components/Hero";
import Navbar from "@/components/Navbar";
import FeaturedWork from "@/components/FeaturedWork";
import BigStatement from "@/components/Bigstatement";
import Services from "@/components/Services";
import Process from "@/components/Process";
import BuiltForBuisness from "../components/BuiltForBuissness";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import AurexaGuide from "../components/AurexaGuide";

export default function Home() {
  const [guideOpen, setGuideOpen] = useState(false);

  return (
    <main className="site">
      <Navbar />

      <Hero onGuideOpen={() => setGuideOpen(true)} />

      <FeaturedWork />
      <BigStatement />
      <Services />
      <Process />
      <BuiltForBuisness />
      <Clients />
      <Contact />

      {guideOpen && (
        <AurexaGuide
          onClose={() => setGuideOpen(false)}
        />
      )}
    </main>
  );
}