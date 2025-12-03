import React from "react";
import "../styles/Shop.css";


export default function ShopSection() {
    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="section-content home-section">
            {/* background video remains unchanged */}
            <div className="background-video-container home-video">
                <video autoPlay loop muted playsInline>
                    {/* <source src="/videos/home-background.mp4" type="video/mp4" /> */}
                </video>
            </div>

            <div className="background-video-overlay"></div>

            <div className="home-fade flex flex-col items-center justify-center min-h-screen text-gray-200 px-6 relative z-10">

                <section className="text-center max-w-3xl bg-white/60 backdrop-blur-md p-8 rounded-xl shadow-lg">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
                        Welcome to <span className="text-yellow-500">Eden Nursery Shop Section</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                        This is a modern React + Framer Motion starter layout where your main content will live.
                    </p>
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-full transition-all shadow-md"
                        onClick={() => scrollToSection("missions")}>
                        Get Started
                    </button>
                </section>

            </div>
        </div>
    );
}
