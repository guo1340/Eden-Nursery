import React from "react";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <motion.div
            className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800 px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
        >
            {/* Hero Section */}
            <section className="text-center max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
                    Welcome to <span className="text-yellow-600">My Website</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                    This is a modern React + Framer Motion starter layout where your main content will live.
                    You can replace this with your real homepage, portfolio, or dashboard.
                </p>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-full transition-all shadow-md">
                    Get Started
                </button>
            </section>

            {/* Content Section */}
            <section className="mt-16 text-center max-w-2xl">
                <h2 className="text-2xl font-semibold mb-4">About This Site</h2>
                <p className="text-gray-600 leading-relaxed">
                    Everything you see here fades in smoothly after the intro animation.
                    You can add your navigation, gallery, or sections here. The fade effect
                    makes the transition from the loading animation feel seamless and intentional.
                </p>
            </section>
        </motion.div>
    );
}
