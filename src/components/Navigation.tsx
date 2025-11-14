import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    const isActive = (path: string) => location.pathname === path;
    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className="navigation">
            {/* Desktop Links */}
            <div className="nav-links">
                <Link to="/" className={isActive("/") ? "active" : ""}>
                    Home
                </Link>
                <Link to="/missions" className={isActive("/missions") ? "active" : ""}>
                    Missions
                </Link>
                <Link to="/team" className={isActive("/team") ? "active" : ""}>
                    Our Team
                </Link>
                <Link to="/donate" className={isActive("/donate") ? "active" : ""}>
                    Donate
                </Link>
            </div>

            {/* Hamburger Button */}
            <button
                className={`hamburger ${menuOpen ? "open" : ""}`}
                onClick={toggleMenu}
                aria-label="Toggle navigation"
            >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
                <Link to="/" onClick={closeMenu} className={isActive("/") ? "active" : ""}>
                    Home
                </Link>
                <Link to="/missions" onClick={closeMenu} className={isActive("/missions") ? "active" : ""}>
                    Missions
                </Link>
                <Link to="/team" onClick={closeMenu} className={isActive("/team") ? "active" : ""}>
                    Our Team
                </Link>
                <Link to="/donate" onClick={closeMenu} className={isActive("/donate") ? "active" : ""}>
                    Donate
                </Link>
            </div>
        </nav>
    );
}
