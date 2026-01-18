import React from "react";
import "../styles/Home.css";
import SeamlessLoopVideo from "../components/SeamlessLoopVideo.tsx";


export default function HomeSection() {
    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="section-content home-section">
            {/* background video remains unchanged */}
            <div className="background-video-container home-video">
                {/* <video autoPlay loop muted playsInline>
                    <source src="/videos/home-background.mp4" type="video/mp4" />
                </video> */}
                <SeamlessLoopVideo src="/videos/home-background.mp4" />
            </div>

            <div className="background-video-overlay"></div>

            <div className="home-logo">

                {/* <section className="text-center max-w-3xl bg-white/60 backdrop-blur-md p-8 rounded-xl shadow-lg"> */}
                <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
                    <img src="/logo/LogoClearColor.png" />
                    <span className="text-yellow-500">Eden Nursery</span>
                </h1>
                {/* <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                        This is a modern React + Framer Motion starter layout where your main content will live.
                    </p>
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-full transition-all shadow-md"
                        onClick={() => scrollToSection("missions")}>
                        Get Started
                    </button> */}
                {/* </section> */}

            </div>
        </div>
    );
}
