import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import "./App.css";

export default function IntroAnimation({ onFinish }: { onFinish: () => void }) {
    const controls = useAnimation();

    useEffect(() => {
        async function runAnimation() {
            for (let i = 0; i < 5; i++) {
                await controls.start((index) =>
                    index === i
                        ? { scaleY: [0, 1], transition: { duration: 0.5, ease: "easeOut" } }
                        : {}
                );
                await new Promise((r) => setTimeout(r, 200));
            }

            await new Promise((r) => setTimeout(r, 100));
            await controls.start({ opacity: 0, transition: { duration: 0.3 } });
            onFinish();
        }

        runAnimation();
    }, [controls, onFinish]);

    // const logoImg = [

    //     "/logo/logoBlack.png",
    //     "/logo/LogoClearColor.png",
    // ]

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={controls}
            className="intro-screen"
        >
            <div className="logo-stack">
                <motion.img
                    key={0}
                    src={"/logo/logoBlack.png"}
                    alt={`Logo ${0}`}
                    custom={0}
                    initial={{ scaleY: 0, transformOrigin: "bottom" }}
                    animate={controls}
                    className={`logo-img bottom-logo`}
                />
                <motion.img
                    key={1}
                    src={"/logo/LogoClearColor.png"}
                    alt={`Logo ${1}`}
                    custom={1}
                    initial={{ scaleY: 0, transformOrigin: "bottom" }}
                    animate={controls}
                    className={`logo-img top-logo`}
                    style={{ zIndex: 10 }}
                />
            </div>
        </motion.div>
    );
}
