import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Team.css";

const teamMembers = [
    {
        id: 1,
        name: "John Doe",
        role: "Lead Pastor",
        image: "/team/john.png",
        bio: "John leads the vision of the church and oversees spiritual growth within our community.",
    },
    {
        id: 2,
        name: "Sarah Lee",
        role: "Worship Leader",
        image: "/team/sarah.png",
        bio: "Sarah leads worship and develops teams that help create a powerful atmosphere of praise.",
    },
    {
        id: 3,
        name: "Michael Brown",
        role: "Youth Director",
        image: "/team/michael.png",
        bio: "Michael supports students and young adults through mentorship, events, and discipleship.",
    },
    {
        id: 4,
        name: "Emily Stone",
        role: "Creative Director",
        image: "/team/emily.png",
        bio: "Emily oversees media, visuals, and brand storytelling for the ministry.",
    },
];

export default function OurTeam() {
    const [openId, setOpenId] = useState<number | null>(null);
    const scrollRef = useRef<HTMLDivElement | null>(null);

    // FORCE vertical wheel → horizontal scroll
    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        const handleWheel = (e: WheelEvent) => {
            if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
                el.scrollLeft += e.deltaY;
                e.preventDefault();
            }
        };

        el.addEventListener("wheel", handleWheel, { passive: false });

        return () => {
            el.removeEventListener("wheel", handleWheel);
        };
    }, []);

    return (
        <motion.div
            className="team-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <h1 className="team-title">Meet Our Team</h1>
            <p className="team-desc">
                Our team is made up of passionate individuals who believe in growth,
                faith, and collaboration. Together, we build and serve.
            </p>

            <div className="team-scroll" ref={scrollRef}>
                {teamMembers.map((member) => {
                    const isOpen = openId === member.id;

                    return (
                        <motion.div
                            key={member.id}
                            className={`team-card ${isOpen ? "open" : ""}`}
                            onMouseEnter={() => setOpenId(member.id)}
                            onMouseLeave={() => setOpenId(null)}
                            layout
                            transition={{ layout: { duration: 0.35, ease: "easeOut" } }}
                        >
                            <img src={member.image} alt={member.name} className="team-img" />

                            <div className="team-info">
                                <h3>{member.name}</h3>
                                <p>{member.role}</p>
                            </div>

                            <AnimatePresence>
                                {isOpen && (
                                    <motion.div
                                        className="team-bio"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <p>{member.bio}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}
            </div>
        </motion.div>
    );
}
