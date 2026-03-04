import React from "react";
import { useParams, Link } from "react-router-dom";
import "./ProjectDetails.css";
import iotimage from "./images/iot.png";
import heartdieaseimage from "./images/heartdieaseimage.png";

export default function ProjectDetails() {
  const { id } = useParams();

  const projects = {
    1: {
      title: "Heart Disease Prediction",

      cover: heartdieaseimage,

      description:
        "Machine Learning project that predicts the probability of heart disease using medical data.",

      technologies: ["Python", "Machine Learning", "Flask", "HTML", "CSS"],

      github: "https://github.com/rajaganeshcse/heart-disease",

      demo: "https://heartdiease.vercel.app",

      images: [
        "https://via.placeholder.com/400",
        "https://via.placeholder.com/400",
        "https://via.placeholder.com/400"
      ]
    },

    2: {
      title: "IoT Smart Healthcare",

      cover: iotimage,

      description:
        "IoT healthcare monitoring system using ESP8266 and sensors to measure Pulse, SPO2, and Temperature.",

      technologies: ["Arduino", "ESP8266", "IoT", "Web Dashboard"],

      github: "https://github.com/rajaganeshcse/iot-healthcare",

      demo: "#",

      images: [
        "https://via.placeholder.com/400",
        "https://via.placeholder.com/400",
        "https://via.placeholder.com/400"
      ]
    }
  };

  const project = projects[id];

  if (!project) return <h2>Project Not Found</h2>;

  return (
    <div className="project-page">

      <div className="project-card">

        {/* TOP PROJECT IMAGE */}

        <img
          src={project.cover}
          alt={project.title}
          className="project-cover"
        />

        <div className="project-body">

          <h1>{project.title}</h1>

          <p className="project-desc">{project.description}</p>

          {/* TECHNOLOGIES */}

          <h3>Technologies Used</h3>

          <ul className="tech-list">
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>

          {/* IMAGE GALLERY */}

          <h3>Project Gallery</h3>

          <div className="gallery">
            {project.images.map((img, index) => (
              <img key={index} src={img} alt="project" />
            ))}
          </div>

          {/* BUTTONS */}

          <div className="project-buttons">

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              GitHub
            </a>

            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Live Demo
            </a>

          </div>

          {/* BACK BUTTON */}

          <Link to="/" className="back-btn">
            ← Back to Home
          </Link>

        </div>

      </div>

    </div>
  );
}