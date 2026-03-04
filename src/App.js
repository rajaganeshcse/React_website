import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProjectDetails from "./ProjectDetails";
import AdminPanel from "./AdminPanel";
import "./App.css";

import profileImg from "./images/profile.jpg";
import emailIcon from "./images/Email.png";
import githubIcon from "./images/github.png";
import linkedinIcon from "./images/linkedin.png";
import whatsappIcon from "./images/whatsapp.png";
import downloadIcon from "./images/download.png";
import iotimage from "./images/iot.png";
import heartdieaseimage from "./images/heartdieaseimage.png";

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
    <section className="hero">
      <h1>
        Hi, I'm <span>RajaGanesh</span>
      </h1>

      <p>
        Motivated Android App Developer with experience in Java, Kotlin,
        React and IoT development.
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
        I am passionate about building Android apps, React websites and IoT
        systems that solve real-world problems.
      </p>

    </section>
  );
}

/* ================= RESUME ================= */

function Resume() {
  return (
    <section id="resume" className="resume">

      <h2>Resume</h2>

      <a href="src/pdf/resume.pdf" download className="resume-btn">
        <img src={downloadIcon} alt="download" className="btn-icon" />
        Download Resume
      </a>

    </section>
  );
}

/* ================= PROJECTS ================= */

function Projects({ projects }) {
  return (
    <section id="projects" className="projects">

      <h2>Projects</h2>

      <div className="project-scroll">

        {projects.map((p) => (

          <div key={p.id} className="project-card">

            <img
              src={p.image}
              alt={p.title}
              className="project-img"
            />

            <div className="project-content">

              <h3>{p.title}</h3>

              <p>{p.desc}</p>

              <Link to={`/project/${p.id}`} className="btn-link">
                View Details
              </Link>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

/* ================= BLOGS ================= */

function Blogs() {
  return (
    <section id="blogs" className="blogs">

      <h2>Blogs</h2>

      <ul>
        <li><a href="#">React Tips</a></li>
        <li><a href="#">Android Development</a></li>
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
        <img src={emailIcon} alt="email" className="icon-img" />
        <a href="mailto:ganesh209832@gmail.com">ganesh209832@gmail.com</a>
      </div>

      <div className="contact-item">
        <img src={githubIcon} alt="github" className="icon-img" />
        <a href="https://github.com/rajaganeshcse">rajaganeshcse</a>
      </div>

      <div className="contact-item">
        <img src={linkedinIcon} alt="linkedin" className="icon-img" />
        <a href="https://www.linkedin.com/in/rajaganesh-t-835a21364">
          RajaGanesh
        </a>
      </div>

      <div className="contact-item">
        <img src={whatsappIcon} alt="whatsapp" className="icon-img" />
        <a href="https://wa.me/916382641748">WhatsApp Me</a>
      </div>

    </section>
  );
}

/* ================= ADMIN LOGIN ================= */

function AdminLogin({ onClose, onLogin }) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {

    e.preventDefault();

    if (username === "ganesh" && password === "209832") {

      alert("Login Successful");

      onLogin();

    } else {

      alert("Invalid Login");

    }

  };

  return (
    <div className="login-page">

      <button className="close-btn" onClick={onClose}>X</button>

      <h2>Admin Login</h2>

      <form onSubmit={handleLogin}>

        <input
          type="text"
          placeholder="User ID"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="btn-primary">
          Login
        </button>

      </form>

    </div>
  );
}

/* ================= HOME PAGE ================= */

function Home({ projects, setShowLogin }) {

  return (
    <div>

      <Navbar onAdminClick={() => setShowLogin(true)} />

      <Hero />

      <About />

      <Resume />

      <Projects projects={projects} />

      <Blogs />

      <Contact />

      <footer className="footer">
        © 2025 RajaGanesh | Portfolio
      </footer>

    </div>
  );
}

/* ================= MAIN APP ================= */

export default function App() {

  const [showLogin, setShowLogin] = useState(false);
  const [admin, setAdmin] = useState(false);

  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Heart Disease Prediction",
      desc: "Machine learning system to predict heart disease.",
      src: "https://www.linkedin.com/pulse/revolutionizing-healthcare-mobile-apps-benefits-features",
      image: heartdieaseimage
    },
    {
      id: 2,
      title: "IoT Smart Healthcare",
      desc: "IoT system to monitor pulse, spo2 and temperature.",
      image: iotimage
    },
    {
      id: 3,
      title: "React Portfolio Website",
      desc: "Personal developer portfolio built using React.",
      image: "https://via.placeholder.com/300x180"
    }
  ]);

  const addProject = (project) => {

    setProjects([
      ...projects,
      { ...project, id: projects.length + 1 }
    ]);

  };

  return (
    <Router>

      {showLogin && (
        <AdminLogin
          onClose={() => setShowLogin(false)}
          onLogin={() => {
            setAdmin(true);
            setShowLogin(false);
          }}
        />
      )}

      <Routes>

        <Route
          path="/"
          element={
            <Home
              projects={projects}
              setShowLogin={setShowLogin}
            />
          }
        />

        <Route
          path="/project/:id"
          element={<ProjectDetails />}
        />

        {admin && (
          <Route
            path="/admin"
            element={<AdminPanel addProject={addProject} />}
          />
        )}

      </Routes>

    </Router>
  );
}