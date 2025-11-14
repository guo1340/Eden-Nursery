import React from "react";
import "../styles/Home.css";

export default function Home() {
    return (
        <>
            {/* Background Video */}
            <div className="background-video-container">
                <video autoPlay loop muted playsInline>
                    <source src="/videos/home-background.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Black Overlay */}
            <div className="background-video-overlay"></div>

            {/* below is two videos overlay */}

            {/* <div className="background-video-container">
                <video className="videoA" autoPlay loop muted playsInline>
                    <source src="/videos/home-background.mp4" type="video/mp4" />
                </video>
                <video className="videoB" autoPlay loop muted playsInline>
                    <source src="/videos/home-background.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="background-video-overlay"></div> */}

            {/* Foreground Content */}
            <div className="home-fade flex flex-col items-center justify-center min-h-screen text-gray-200 px-6 relative z-10">

                {/* Hero Section */}
                <section className="text-center max-w-3xl bg-white/60 backdrop-blur-md p-8 rounded-xl shadow-lg">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
                        Welcome to <span className="text-yellow-500">Eden Nusery</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                        This is a modern React + Framer Motion starter layout where your main content will live.
                    </p>
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-full transition-all shadow-md">
                        Get Started
                    </button>
                </section>

                {/* Content Section */}
                <section className="mt-16 text-center max-w-2xl bg-white/60 backdrop-blur-md p-8 rounded-xl shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4">About This Site</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Everything fades in smoothly after the intro animation, creating a clean visual transition.
                    </p>
                </section>
            </div>
        </>
    );
}
