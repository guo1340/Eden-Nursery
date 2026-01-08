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
            <div className="missions-overlay"></div>

            {/* FOREGROUND CONTENT */}
            <motion.div
                className="missions-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="title">Our Mission</h1>
                <p className="desc">
                    We are dedicated to spreading hope and positive impact through our
                    community initiatives. Join us in making a difference.
                </p>
            </motion.div>
        </div>
    );
}
