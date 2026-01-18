import React from "react";
import { motion } from "framer-motion";
import "../styles/Missions.css";
import SeamlessLoopVideo from "../components/SeamlessLoopVideo.tsx";

export default function MissionsSection() {
    return (
        <div className="missions-section">

            {/* Background video */}
            <div className="missions-video-container">
                {/* <video autoPlay loop muted playsInline>
                    <source src="/videos/Hahn.mp4" type="video/mp4" />
                </video> */}
                <SeamlessLoopVideo src="/videos/Hahn.mp4" />
            </div>


            {/* DARK OVERLAY */}
            <div className="background-video-overlay"></div>

            {/* FOREGROUND CONTENT */}
            <motion.div
                className="missions-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="title">Business as an engine for positive impact</h1>
                <p className="desc">
                    When you support Eden Nursery, you aren't just getting a new landscape, plant, or plant product, you are fueling a mission. Our goal is to create a community of plants and people. Profits from Landscaping, dry goods, and merch are able to directly contribute to community engagement initiatives. Check out some of our previous community projects below.
                </p>
            </motion.div>
        </div>
    );
}
