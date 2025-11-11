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
                        ? { scaleY: [0, 1], transition: { duration: 0.6, ease: "easeOut" } }
                        : {}
                );
                await new Promise((r) => setTimeout(r, 200));
            }

            await new Promise((r) => setTimeout(r, 600));
            await controls.start({ opacity: 0, transition: { duration: 1 } });
            onFinish();
        }

        runAnimation();
    }, [controls, onFinish]);

    const treeImgs = [
        "/trees/tree1.jpg",
        "/trees/tree2.png",
        "/trees/tree3.jpg",
        "/trees/tree4.jpg",
        "/trees/tree5.jpg",
    ];

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={controls}
            className="intro-screen"
        >
            <div className="trees-container">
                {treeImgs.map((src, i) => (
                    <motion.img
                        key={i}
                        src={src}
                        alt={`Tree ${i}`}
                        custom={i}
                        initial={{ scaleY: 0, transformOrigin: "bottom" }}
                        animate={controls}
                        className="tree-img"
                    />
                ))}
            </div>
        </motion.div>
    );
}
