import React, { useState } from "react";
import "./App.css";

/* Correct Image Imports */
import profileImg from "./images/profile.jpg";
import emailIcon from "./images/Email.png";
import githubIcon from "./images/github.png";
import linkedinIcon from "./images/linkedin .png";
import whatsappIcon from "./images/whatsapp.png";
import downloadIcon from "./images/download.png";

/* ================= NAVBAR ================= */

function Navbar({ onAdminClick }) {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-left">
          <img src={profileImg} alt="Profile" className="profile-image" />
          <h1 className="logo">RajaGanesh</h1>
        </div>

        <div className="navbar-right">
          <a href="#about">About</a>
          <a href="#resume">Resume</a>
          <a href="#projects">Projects</a>
          <a href="#blogs">Blogs</a>
          <a href="#contact">Contact</a>
          <button className="admin-btn" onClick={onAdminClick}>
            Admin
          </button>
        </div>
      </div>
    </nav>
  );
}

/* ================= HERO ================= */

function Hero() {
  return (
    <section id="home" className="hero">
      <h1>
        Hi, I'm <span>RajaGanesh</span>
      </h1>
      <p>
        Motivated Android App Developer with hands-on experience in Java and
        Kotlin. Seeking an opportunity to contribute to innovative app
        development projects.
      </p>
    </section>
  );
}

/* ================= ABOUT ================= */

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <p>
        I’m a React Developer who loves crafting clean, responsive UIs.
        Passionate about performance and user experience.
      </p>
    </section>
  );
}

/* ================= RESUME ================= */

function Resume() {
  return (
    <section id="resume" className="resume">
      <h2>Resume</h2>
      <p>You can download my resume below.</p>

      <a href="/resume.pdf" download className="resume-btn">
        <img src={downloadIcon} alt="Download" className="btn-icon" />
        Download Resume
      </a>
    </section>
  );
}

/* ================= PROJECTS ================= */

function Projects() {
  const data = [
    { title: "Portfolio Website", desc: "Built with React", link: "#" },
    { title: "E-commerce App", desc: "React + Node.js", link: "#" },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {data.map((p, i) => (
          <div className="project-card" key={i}>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <a href={p.link} className="btn-link">
              View
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ================= BLOGS ================= */

function Blogs() {
  const data = [
    { title: "React Tips", link: "#" },
    { title: "CSS Tricks", link: "#" },
  ];

  return (
    <section id="blogs" className="blogs">
      <h2>Blogs</h2>
      <ul>
        {data.map((b, i) => (
          <li key={i}>
            <a href={b.link}>{b.title}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ================= CONTACT ================= */

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>

      <div className="contact-item">
        <img src={emailIcon} alt="Email" className="icon-img" />
        <a href="mailto:ganesh209832@gmail.com">
          ganesh209832@gmail.com
        </a>
      </div>

      <div className="contact-item">
        <img src={githubIcon} alt="GitHub" className="icon-img" />
        <a
          href="https://github.com/rajaganeshcse"
          target="_blank"
          rel="noreferrer"
        >
          rajaganeshcse
        </a>
      </div>

      <div className="contact-item">
        <img src={linkedinIcon} alt="LinkedIn" className="icon-img" />
        <a
          href="https://linkedin.com/in/rajaGanesh"
          target="_blank"
          rel="noreferrer"
        >
          RajaGanesh
        </a>
      </div>

      <div className="contact-item">
        <img src={whatsappIcon} alt="WhatsApp" className="icon-img" />
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp Me
        </a>
      </div>
    </section>
  );
}

/* ================= ADMIN LOGIN ================= */

function AdminLogin({ onClose }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "1234") {
      alert("Login Successful!");
      onClose();
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-page">
      <button className="close-btn" onClick={onClose}>
        X
      </button>
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="User ID"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}

/* ================= MAIN APP ================= */

export default function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="container1">
      <Navbar onAdminClick={() => setShowLogin(true)} />
      {showLogin && <AdminLogin onClose={() => setShowLogin(false)} />}
      <Hero />
      <About />
      <Resume />
      <Projects />
      <Blogs />
      <Contact />
      <footer className="footer">
        © 2025 RajaGanesh | My Own Website
      </footer>
    </div>
  );
}