import React from "react";
import { motion } from "framer-motion";

export default function DonateSection() {
    return (
        <motion.div
            className="min-h-screen flex flex-col items-center justify-center bg-yellow-100 text-gray-800 px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <h1 className="text-5xl font-bold mb-6">Support Our Mission</h1>
            <p className="text-lg max-w-2xl text-center leading-relaxed mb-8">
                Your donation helps us continue our outreach programs and build a
                stronger community. Every contribution counts.
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all">
                Donate Now
            </button>
        </motion.div>
    );
}
