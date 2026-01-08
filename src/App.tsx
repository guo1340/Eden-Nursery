import React, { useState } from "react";
import IntroAnimation from "./IntroAnimation";

import Navigation from "./components/Navigation";

// Sections
import HomeSection from "./sections/HomeSection";
import MissionsSection from "./sections/MissionsSection";
import TeamSection from "./sections/TeamSection";
import DonateSection from "./sections/DonateSection";
import ShopSection from "./sections/ShopSection";

import "./index.css";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  if (showIntro) return <IntroAnimation onFinish={() => setShowIntro(false)} />;

  return (
    <>
      <Navigation />   {/* <-- FIXED right NAV BAR */}

      <div className="snap-container">
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

        <section id="shop" className="fullpage-section">
          <ShopSection />
        </section>
      </div>

      <div className="global-rights">
        © {new Date().getFullYear()} Eden Nursery. All rights reserved.
      </div>
    </>
  );
}
