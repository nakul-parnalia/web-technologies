// src/components/AboutMe.jsx
import React, { useEffect, useState } from 'react';
import './AboutMe.css';

const AboutMe = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  // --- GUARANTEED CLICK EFFECT: WEB ANIMATION API ---
  useEffect(() => {
    const handleGlobalClick = (e) => {
      // 1. "HA!" Text Element
      const textEl = document.createElement('div');
      const laughs = ["HA!", "HEE!", "HO!", "JOKER", "CHAOS", "WHY SO SERIOUS?"];
      textEl.innerText = laughs[Math.floor(Math.random() * laughs.length)];
      
      // Inline Styling
      Object.assign(textEl.style, {
        position: 'fixed',
        left: `${e.clientX}px`,
        top: `${e.clientY}px`,
        color: Math.random() > 0.5 ? '#00cc66' : '#9c4dcc',
        fontSize: '24px',
        fontWeight: 'bold',
        fontFamily: 'monospace',
        pointerEvents: 'none',
        zIndex: '2147483647', // Max Z-Index
        textShadow: '2px 2px 0px #000',
        whiteSpace: 'nowrap',
        transform: 'translate(-50%, -50%)', // Center initially
      });
      
      document.body.appendChild(textEl);

      // JS Animation (No CSS dependency)
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

      // Cleanup elements
      setTimeout(() => {
        if (textEl.isConnected) textEl.remove();
        if (circleEl.isConnected) circleEl.remove();
      }, 850);
    };

    // Use 'capture' phase to ensure it works even if other elements stop propagation
    window.addEventListener('click', handleGlobalClick, true);
    return () => window.removeEventListener('click', handleGlobalClick, true);
  }, []);

  const playQuote = () => {
    if (!window.jokerAudio) {
      const audio = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-retro-arcade-coin-202.mp3");
      audio.volume = 0.2;
      window.jokerAudio = audio;
    }
    window.jokerAudio.play().catch(e => console.log("Audio play blocked:", e));
  };

  return (
    <section id='about' className="about-me-section">
      
      {/* Theme Toggle */}
      <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
        {theme === 'dark' ? '☀' : '☾'}
      </button>

      <div className="joker-face-bg"></div>

      <h2 className="AboutMeFont" onMouseEnter={playQuote}>
        About Me
      </h2>

      <div className="about-content">
        <div className="content-grid">
          {/* Text Column */}
          <div className="text-column">
            <p>
              I'm a passionate full-stack developer with a love for creating innovative web applications.
              With expertise in modern technologies and a keen eye for design, I transform ideas into reality.
            </p>
            <p>
              My approach combines technical excellence with creative problem-solving, ensuring every project delivers exceptional user experiences.
              I thrive in challenging environments where I can push boundaries and explore new possibilities.
            </p>
            <p>
              When I'm not coding, you'll find me exploring the latest tech trends, contributing to open-source projects, or sharing knowledge with the developer community.
            </p>

            <div className="interest-tags">
              <span className="tag">Web Development</span>
              <span className="tag">UI/UX Design</span>
              <span className="tag">Cloud Architecture</span>
              <span className="tag">DevOps</span>
            </div>
          </div>

          {/* Skills Column */}
          <div className="skills-column">
            <h3>Technical Skills</h3>
            <div className="skills-list">
              {[
                { name: 'React', level: 95 },
                { name: 'TypeScript', level: 90 },
                { name: 'Node.js', level: 85 },
                { name: 'Python', level: 80 },
                { name: 'MongoDB', level: 85 },
                { name: 'PostgreSQL', level: 80 },
                { name: 'AWS', level: 75 },
                { name: 'Docker', level: 70 },
              ].map((skill, index) => (
                <div 
                  key={index} 
                  className="skill-item" 
                  style={{ '--target-width': `${skill.level}%` }} 
                >
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-bar-fill"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
