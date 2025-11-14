import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import IntroAnimation from "./IntroAnimation";
import Navigation from "./components/Navigation";
import Missions from "./pages/Missions";
import OurTeam from "./pages/OurTeam";
import Donate from "./pages/Donate";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  if (showIntro) return <IntroAnimation onFinish={() => setShowIntro(false)} />;

  return (
    <>
      <Navigation />
      <main style={{ paddingTop: "80px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/team" element={<OurTeam />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </main>
    </>
  );
}
