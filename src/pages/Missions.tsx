import React from "react";
import { motion } from "framer-motion";

export default function Missions() {
    return (
        <motion.div
            className="min-h-screen flex flex-col items-center justify-center bg-yellow-50 text-gray-800 px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <h1 className="text-5xl font-bold mb-6">Our Mission</h1>
            <p className="text-lg max-w-2xl text-center leading-relaxed">
                We are dedicated to spreading hope and positive impact through our
                community initiatives. Join us in making a difference.
            </p>
        </motion.div>
    );
}
