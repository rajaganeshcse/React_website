import React, { useState } from 'react';
import './App.css';
import profileImg from './images/profile.jpg';

function Navbar({ onAdminClick }) {
  return (
    <nav className="navbar">
  <div className="container">
    {/* Left: profile + name */}
    <div className="navbar-left">
      <img src={profileImg} alt="Profile" className="profile-image" />
      <h1 className="logo">RajaGanesh</h1>
    </div>

    {/* Right: links + admin */}
    <div className="navbar-right">
      <a href="#about">About</a>
      <a href="#resume">Resume</a>
      <a href="#projects">Projects</a>
      <a href="#blogs">Blogs</a>
      <a href="#contact">Contact</a>


    </div>
  </div>
</nav>

  );
}
function Hero() {
  return (
    <section id="home" className="hero">
      <h1>Hi, I'm <span>RajaGanesh</span></h1>
      <p>Hi, I'm  passionate web developer with a strong interest in creating modern, responsive, and user-friendly websites. I enjoy turning ideas into interactive digital experiences using technologies like HTML, JavaScript,React, CSS and Java. I’m always eager to learn new tools, improve my coding skills, and take on creative challenges that push the boundaries of design and functionality.</p>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <p>I’m a React Developer who loves crafting clean, responsive UIs. Passionate about performance, accessibility, and user experience.</p>
    </section>
  );
}

function Resume() {
  return (
    <section id="resume" className="resume">
      <h2>Resume</h2>
      <p>Download my resume here or view it online.</p>
      <div class="button">
  <a href="#" class="anchor">
    <span>Download Resume </span>
  </a>
</div>
    </section>
  );
}

function Projects() {
  const data = [
    { title: "Portfolio Website", desc: "Built with React", link: "#" },
    { title: "E-commerce App", desc: "React + Node.js", link: "#" },
  ];

  return (
    <section id="projects " className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {data.map((p, i) => (
          <div className="project-card" key={i}>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <a href={p.link} className="btn-link">View</a>
          </div>
          
        ))}
      </div>
    </section>
  );
}

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
          <li key={i}><a href={b.link}>{b.title}</a></li>
        ))}
      </ul>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <p>Email: <a href="mailto:ganesh209832@gmail.com">ganesh209832@gmail.com</a></p>
      <p>GitHub: <a href="https://github.com/rajaganeshcse">rajaganeshcse</a></p>
      <p>LinkedIn: <a href="https://linkedin.com/in/rajaGanesh">RajaGanesh</a></p>
    </section>
  );
}

// Admin Login Page
function AdminLogin({ onClose }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "1234") {
      alert("Login Successful!");
      onClose(); // Close login page
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-page">
      <button className="close-btn" onClick={onClose}>X</button>
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="User ID" value={username} onChange={e => setUsername(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
        <button type="submit" className="btn-primary">Login</button>
      </form>
    </div>
  );
}

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
      <footer className="footer">© 2025 RajaGanesh | My Own Website</footer>
    </div>
  );
}

