// src/components/FeaturedProjects.jsx
import React, { useEffect } from 'react';
import './FeaturedProjects.css';

const FeaturedProjects = () => {
  
  // --- CLICK EFFECT LOGIC ---
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
        zIndex: '2147483647', // Max Z-Index to stay on top of cards
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
    
    // Animate project cards on load
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.1}s`;
      card.classList.add('visible');
    });

    return () => window.removeEventListener('click', handleGlobalClick, true);
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration and inventory management",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "../assets/ECommercePlatform.png"
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for tracking social media metrics across multiple platforms",
      tech: ["React", "TypeScript", "Chart.js", "Firebase"],
      image: "../assets/Social Media Dashboard.png"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates and team features",
      tech: ["React", "Redux", "WebSocket", "PostgreSQL"],
      image: "../assets/Task Management App.png"
    },
    {
      title: "Weather Forecast App",
      description: "Real-time weather application with location-based forecasts and alerts",
      tech: ["React", "API Integration", "Geolocation", "CSS3"],
      image: "../assets/WeatherForcast.png"
    },
    {
      title: "Portfolio CMS",
      description: "Content management system for creative professionals to showcase their work",
      tech: ["React", "Next.js", "Sanity", "Tailwind"],
      image: "../assets/Portfolio CMS.png"
    },
    {
      title: "Fitness Tracker",
      description: "Mobile-responsive fitness tracking app with workout plans and progress monitoring",
      tech: ["React Native", "Redux", "SQLite", "Charts"],
      image: "../assets/FitnessTracker.png"
    }
  ];

  return (
    <section className="featured-projects-section" id='projects'>
      {/* Floating Joker Cards */}
      <div className="floating-cards">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="joker-card"></div>
        ))}
      </div>

      <div className="projects-container">
        <h2 className="FPFont">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tech-tags">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
