import React from "react";
import { motion } from "framer-motion";
import "../styles/Donate.css";

export default function DonateSection() {
    return (
        <div className="donate-section">

            {/* Background video */}
            <div className="donate-video-container">
                <video autoPlay loop muted playsInline>
                    <source src="/videos/Donate.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Dark overlay */}
            <div className="donate-overlay"></div>

            {/* Foreground content */}
            <motion.div
                className="donate-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="title">Support Our Mission</h1>
                <p className="desc">
                    Your donation helps us continue our outreach programs and build a
                    stronger community. Every contribution counts.
                </p>
                <button className="donate-btn">
                    Donate Now
                </button>
            </motion.div>
        </div>
    );
}
