import React from "react";
import { motion } from "framer-motion";
import "../styles/Donate.css";
import SeamlessLoopVideo from "../components/SeamlessLoopVideo.tsx";

export default function DonateSection() {
    return (
        <div className="donate-section">

            {/* Background video */}
            <div className="donate-video-container">
                {/* <video autoPlay loop muted playsInline>
                    <source src="/videos/Donate.mp4" type="video/mp4" />
                </video> */}
                <SeamlessLoopVideo src="/videos/Donate.mp4" />
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
                    If you feel called to contribute to our mission, please send your contribution via Zelle, Venmo, or check.
                </p>
                <button className="donate-btn">
                    Donate Now
                </button>
            </motion.div>
        </div>
    );
}
