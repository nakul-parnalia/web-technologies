// src/components/Home.jsx
import React, { useEffect } from 'react';
import './Home.css';

const Home = () => {
  
  // --- JOKER SOUND LOGIC ---
  const playJokerSound = () => {
    // Check if audio object exists, if not create it
    if (!window.jokerAudio) {
      // Using a Joker laugh sound effect (placeholder URL)
      // You can replace this URL with your local file like '/assets/joker_laugh.mp3'
      const audio = new Audio("/assets/jokerlaugh.mp3");
      audio.volume = 0.5; // Set volume to 50%
      window.jokerAudio = audio;
    }
    
    // Reset time to 0 so it can be replayed instantly
    window.jokerAudio.currentTime = 0;
    
    // Play the sound
    window.jokerAudio.play().catch(error => {
      console.log("Audio playback failed:", error);
    });
  };

  // --- CLICK EFFECT LOGIC ---
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
        zIndex: '2147483647',
        textShadow: '2px 2px 0px #000',
        whiteSpace: 'nowrap',
        transform: 'translate(-50%, -50%)',
      });
      
      document.body.appendChild(textEl);

      // Animation
      const randomRotation = (Math.random() - 0.5) * 60;
      
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

    window.addEventListener('click', handleGlobalClick, true);
    return () => window.removeEventListener('click', handleGlobalClick, true);
  }, []);

  return (
    <div id='home' className="home-container">
      
      {/* --- FLOATING CARDS --- */}
      <div className="floating-card-wrapper card-left-pos">
        <img src="/assets/card1.png" alt="Joker Card" className="draggable-card" />
      </div>

      <div className="floating-card-wrapper card-right-pos">
        <img src="/assets/card2.png" alt="Ace of Spades" className="draggable-card" />
      </div>

      <div className="floating-card-wrapper card-bottom-pos">
        <img src="/assets/card3.png" alt="King of Hearts" className="draggable-card" />
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="profile-content">
        <div className="avatar-wrapper">
         {/* Added onClick handler for sound */}
         <img 
            src="/assets/avatar.png" 
            alt="Joker Avatar" 
            className="avatar" 
            onClick={playJokerSound}
            style={{ cursor: 'pointer' }} // Visual cue that it's clickable
         />
        </div>
        <h1 className="name">I'm Nakul Parnalia</h1>
        <p className="title">Full Stack Developer</p>
        
        <p className="tagline">
          Crafting chaos into code.<br />
          Building digital experiences that leave a lasting impression.
        </p>

        <div className="button-group">
          <a href='#projects'><button className="btn btn-primary">View My Work</button></a>
          <a href='#getintouch'><button className="btn btn-secondary">Get In Touch</button></a>
        </div>

        <div className="social-icons">
          <a href="#" aria-label="GitHub"><i className="fab fa-github"></i></a>
          <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
          <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
        </div>
      </div>
    </div>
  );
};

export default Home;
