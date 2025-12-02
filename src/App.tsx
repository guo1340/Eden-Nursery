import React, { useState } from "react";
import IntroAnimation from "./IntroAnimation";

import Navigation from "./components/Navigation"; // <-- ADD THIS

// Sections
import HomeSection from "./sections/HomeSection";
import MissionsSection from "./sections/MissionsSection";
import TeamSection from "./sections/TeamSection";
import DonateSection from "./sections/DonateSection";

import "./index.css";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  if (showIntro) return <IntroAnimation onFinish={() => setShowIntro(false)} />;

  return (
    <>
      <Navigation />   {/* <-- FIXED NAV BAR */}

      <section id="home" className="fullpage-section">
        <HomeSection />
      </section>

      <section id="missions" className="fullpage-section">
        <MissionsSection />
      </section>

      <section id="team" className="fullpage-section">
        <TeamSection />
      </section>

      <section id="donate" className="fullpage-section">
        <DonateSection />
      </section>
    </>
  );
}
