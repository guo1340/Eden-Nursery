import React, { useState, useEffect } from "react";
import "./Navigation.css";

export default function Navigation() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    const scrollToSection = (id: string) => {
        closeMenu();
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: "smooth" });
    };

    // Detect which section is currently on screen
    useEffect(() => {
        const sections = document.querySelectorAll("section.fullpage-section");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.6, // section is considered active when 60% visible
            }
        );

        sections.forEach((sec) => observer.observe(sec));
        return () => sections.forEach((sec) => observer.unobserve(sec));
    }, []);

    return (
        <nav className="navigation">

            {/* DESKTOP RIGHT-SIDE VERTICAL NAV */}
            <div className="nav-vertical">
                <button
                    className={activeSection === "home" ? "active" : ""}
                    onClick={() => scrollToSection("home")}
                >
                    Home
                </button>

                <button
                    className={activeSection === "missions" ? "active" : ""}
                    onClick={() => scrollToSection("missions")}
                >
                    Missions
                </button>

                <button
                    className={activeSection === "team" ? "active" : ""}
                    onClick={() => scrollToSection("team")}
                >
                    Our Team
                </button>

                <button
                    className={activeSection === "donate" ? "active" : ""}
                    onClick={() => scrollToSection("donate")}
                >
                    Donate
                </button>

                <button
                    className={activeSection === "shop" ? "active" : ""}
                    onClick={() => scrollToSection("shop")}
                >
                    Shop
                </button>
            </div>

            {/* MOBILE HAMBURGER */}
            <button
                className={`hamburger ${menuOpen ? "open" : ""}`}
                onClick={toggleMenu}
                aria-label="Toggle navigation"
            >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>

            {/* MOBILE MENU */}
            <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
                <button onClick={() => scrollToSection("home")} className={activeSection === "home" ? "active" : ""}>Home</button>
                <button onClick={() => scrollToSection("missions")} className={activeSection === "missions" ? "active" : ""}>Missions</button>
                <button onClick={() => scrollToSection("team")} className={activeSection === "team" ? "active" : ""}>Our Team</button>
                <button onClick={() => scrollToSection("donate")} className={activeSection === "donate" ? "active" : ""}>Donate</button>
                <button onClick={() => scrollToSection("shop")} className={activeSection === "shop" ? "active" : ""}>Shop</button>
            </div>
        </nav>
    );
}
