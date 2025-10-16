import React, { useState, useEffect } from 'react';
import './App.css';

function Navbar({ toggleTheme }) {
  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="logo">Ganesh</h1>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <button onClick={toggleTheme} className="toggle-btn">Theme</button>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <h1>Hi, I'm <span>Ganesh</span></h1>
      <p>I’m a Front-End Developer creating modern, fast, and responsive web applications using React.</p>
      <div className="hero-buttons">
        <a href="#projects" className="btn-primary">See Projects</a>
        <a href="#contact" className="btn-secondary">Contact Me</a>
      </div>
    </section>
  );
}

function Projects() {
  const data = [
    { title: 'Portfolio Website', desc: 'Personal website built with React.', tech: 'React, TailwindCSS', link: '#' },
    { title: 'E-commerce App', desc: 'Full-stack shopping app prototype.', tech: 'React, Node.js', link: '#' },
    { title: 'Dashboard UI', desc: 'Data visualization dashboard.', tech: 'React, Chart.js', link: '#' },
  ];
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {data.map((p, i) => (
          <div className="project-card" key={i}>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <span>{p.tech}</span>
            <a href={p.link} className="btn-link">View</a>
          </div>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  const list = ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Git', 'Node.js'];
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {list.map((s, i) => (
          <div key={i} className="skill-item">{s}</div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <p>I’m a React Developer who loves crafting clean, responsive UIs. Passionate about performance, accessibility, and user experience. Always exploring new technologies and improving my craft.</p>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
  }, [darkMode]);

  return (
    <div className="App">
      <Navbar toggleTheme={() => setDarkMode(!darkMode)} />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <footer className="footer">© 2025 Ganesh | Built with React</footer>
    </div>
  );
}
