// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    // --- GLOBAL CLICK EFFECT (Joker Theme) ---
    useEffect(() => {
        const handleGlobalClick = (e) => {
            // 1. "HA!" Text Element
            const textEl = document.createElement('div');
            const laughs = ["HA!", "HEE!", "HO!", "JOKER", "CHAOS", "WHY SO SERIOUS?"];
            textEl.innerText = laughs[Math.floor(Math.random() * laughs.length)];
            
            // Inline Styling for guaranteed visibility
            Object.assign(textEl.style, {
                position: 'fixed',
                left: `${e.clientX}px`,
                top: `${e.clientY}px`,
                color: Math.random() > 0.5 ? '#00cc66' : '#9c4dcc', // Green or Purple
                fontSize: '24px',
                fontWeight: 'bold',
                fontFamily: 'monospace',
                pointerEvents: 'none',
                zIndex: '2147483647', // Max Z-Index
                textShadow: '2px 2px 0px #000',
                whiteSpace: 'nowrap',
                transform: 'translate(-50%, -50%)',
            });
            
            document.body.appendChild(textEl);

            // Animation
            const randomRotation = (Math.random() - 0.5) * 60; // -30 to +30 deg
            
            textEl.animate([
                { opacity: 0, transform: `translate(-50%, -50%) scale(0.5) rotate(0deg)` },
                { opacity: 1, transform: `translate(-50%, -50%) scale(1.2) rotate(${randomRotation}deg)`, offset: 0.2 },
                { opacity: 0, transform: `translate(-50%, -150px) scale(1) rotate(${randomRotation * 1.5}deg)` }
            ], {
                duration: 800,
                easing: 'ease-out',
                fill: 'forwards'
            });

            // 2. Glow Circle Element
            const circleEl = document.createElement('div');
            const isGreen = Math.random() > 0.5;
            
            Object.assign(circleEl.style, {
                position: 'fixed',
                left: `${e.clientX}px`,
                top: `${e.clientY}px`,
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                backgroundColor: 'transparent',
                border: `2px solid ${isGreen ? '#00cc66' : '#9c4dcc'}`,
                boxShadow: `0 0 10px ${isGreen ? '#00cc66' : '#9c4dcc'}`,
                pointerEvents: 'none',
                zIndex: '2147483646',
                transform: 'translate(-50%, -50%)'
            });
            
            document.body.appendChild(circleEl);
            
            circleEl.animate([
                { width: '20px', height: '20px', opacity: 1, borderWidth: '5px' },
                { width: '150px', height: '150px', opacity: 0, borderWidth: '0px' }
            ], {
                duration: 500,
                easing: 'ease-out',
                fill: 'forwards'
            });

            // Cleanup
            setTimeout(() => {
                if (textEl.isConnected) textEl.remove();
                if (circleEl.isConnected) circleEl.remove();
            }, 850);
        };

        // Attach listener
        window.addEventListener('click', handleGlobalClick, true);
        return () => window.removeEventListener('click', handleGlobalClick, true);
    }, []);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Logo */}
                <div className="navbar-logo">
                    <div className="logo-circle">
                        <img src="/assets/avatar.png" alt="logo" className="logo-img" />
                    </div>
                    <span className="MyJokerFont">My Portfolio</span>
                </div>

                {/* Hamburger */}
                <div
                    className={`hamburger ${open ? "active" : ""}`}
                    onClick={() => setOpen(!open)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <ul className={`navbar-menu ${open ? "open" : ""}`}>
                    <a href="#home">
                        <li className="Navnewfont">Home</li> 
                    </a>
                    <a href="#about">
                        <li className="Navnewfont">About</li>
                    </a>
                    <a href="#projects">
                        <li className="Navnewfont">Projects</li>
                    </a>
                    <a href="#getintouch">
                        <li className="Navnewfont">Contact</li>
                    </a>
                </ul>

            </div>
        </nav>
    );
};

export default Navbar;
