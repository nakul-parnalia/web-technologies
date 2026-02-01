// import React, { useState } from "react";
// import "./index.css";

// export default function App() {
//   const [formData, setFormData] = useState({ name: "", email: "", message: "" });

//   const projects = [
//     {
//       title: "Student Management System",
//       description: "Salesforce-based platform to manage student data across institutions.",
//     },
//     {
//       title: "Smart Car Parking System",
//       description: "IoT-based system using Arduino, IR sensors, and servo motors to manage parking slots.",
//     },
//     {
//       title: "Salesforce Automation Tool",
//       description: "Automates repetitive Salesforce tasks to save hours of manual work.",
//     },
//   ];

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     alert("Message sent! Check console for details.");
//     setFormData({ name: "", email: "", message: "" });
//   };

//   return (
//     <div className="app">
//       {/* Floating Joker Cards */}
//       <div className="joker-cards">
//         {[...Array(25)].map((_, i) => {
//           const left = Math.random() * 100;
//           const size = 20 + Math.random() * 25;
//           const delay = Math.random() * 10;
//           return (
//             <div
//               key={i}
//               className="joker-card"
//               style={{
//                 left: `${left}vw`,
//                 width: `${size}px`,
//                 height: `${size * 1.5}px`,
//                 animationDelay: `${delay}s`,
//               }}
//             ></div>
//           );
//         })}
//       </div>

//       <nav className="navbar">
//         <a href="#home">Home</a>
//         <a href="#about">About</a>
//         <a href="#projects">Projects</a>
//         <a href="#contact">Contact</a>
//       </nav>

//       <section id="home" className="section home">
//         <h1 className="glitch" data-text="Nakul Parnalia">
//           Nakul Parnalia
//         </h1>
//         <p className="subtitle">Salesforce Admin & Developer</p>
//         <p className="quote">"Why so serious? Let's automate it."</p>
//       </section>

//       <section id="about" className="section about">
//         <h2>About Me</h2>
//         <p>
//           Salesforce Administrator & Developer experienced in CRM and IoT solutions.
//           I love automation, data management, and agile development.
//         </p>
//         <ul>
//           <li>London, UK</li>
//           <li>parnalianakul@gmail.com</li>
//           <li>07887172487</li>
//         </ul>
//       </section>

//       <section id="projects" className="section projects">
//         <h2>Projects</h2>
//         <div className="project-grid">
//           {projects.map((project, i) => (
//             <div key={i} className="project-card">
//               <h3>{project.title}</h3>
//               <p>{project.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section id="contact" className="section contact">
//         <h2>Contact Me</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           <textarea
//             name="message"
//             placeholder="Your Message"
//             rows="4"
//             value={formData.message}
//             onChange={handleChange}
//             required
//           ></textarea>
//           <button type="submit">Send Message</button>
//         </form>
//       </section>

//       <footer>© 2025 Nakul Parnalia | Joker Theme</footer>
//     </div>
//   );
// }
