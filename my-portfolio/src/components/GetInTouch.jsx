// src/components/GetInTouch.jsx
import React, { useEffect } from 'react';
import './GetInTouch.css';

const GetInTouch = () => {
  
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

    // Animate form and text on load
    const elements = document.querySelectorAll('.animate-in');
    elements.forEach((el, index) => {
      el.style.animationDelay = `${index * 0.1}s`;
      el.classList.add('visible');
    });

    return () => window.removeEventListener('click', handleGlobalClick, true);
  }, []);

  return (
    <section className="get-in-touch-section" id='getintouch'>
      {/* Floating Joker Cards */}
      <div className="floating-cards">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="joker-card"></div>
        ))}
      </div>

      <div className="contact-container">
        <h2 className="Getintouchfont">Let's Create Chaos</h2>

        <div className="contact-grid">
          {/* Contact Info Side */}
          <div className="contact-info animate-in">
            <h3>Let's Connect</h3>
            <p>
              Have a project in mind or just want to chat? Feel free to reach out.
              I'm always open to discussing new opportunities and collaborations.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <span className="icon">✉️</span>
                <div>
                  <strong>Email</strong>
                  <a href="mailto:nakulparnalia18@gmail.com">nakulparnalia18@gmail.com</a>
                </div>
              </div>
              <div className="contact-item">
                <span className="icon">📞</span>
                <div>
                  <strong>Phone</strong>
                  <a href="tel:+447887172487">+44 7887172487</a>
                </div>
              </div>
              <div className="contact-item">
                <span className="icon">📍</span>
                <div>
                  <strong>Location</strong>
                  ILFORD, London, UK
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Side */}
          <form className="contact-form animate-in" onSubmit={(e) => e.preventDefault()}>
            
            {/* NAME INPUT */}
            <div className="form-group input-container">
              <input type="text" placeholder="Your Name" required />
              <span className="joker-hint">WHO ARE YOU?</span>
            </div>

            {/* EMAIL INPUT */}
            <div className="form-group input-container">
              <input type="email" placeholder="Your Email" required />
              <span className="joker-hint">SENDING WHERE?</span>
            </div>

            {/* SUBJECT INPUT */}
            <div className="form-group input-container">
              <input type="text" placeholder="Subject" required />
              <span className="joker-hint">SO SERIOUS?</span>
            </div>

            {/* MESSAGE TEXTAREA */}
            <div className="form-group input-container">
              <textarea placeholder="Your Message" rows="5" maxLength="500" required></textarea>
              <div className="char-count">0/500 characters</div>
              <span className="joker-hint">WHAT'S YOUR SECRET?</span>
            </div>
            
            <button type="submit" className="send-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
