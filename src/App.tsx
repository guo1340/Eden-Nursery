import React, { useState } from "react";
import Home from "./Home";
import IntroAnimation from "./IntroAnimation";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && <IntroAnimation onFinish={() => setShowIntro(false)} />}
      <main>{!showIntro && <Home />}</main>
    </>
  );
}
