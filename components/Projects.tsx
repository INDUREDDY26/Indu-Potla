"use client";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Teaching Assistant Assignment System",
    description: "A system to assign teaching assistants to courses using AI.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/yourgithub/taas-project",
    demo: "#",
  },
  {
    title: "Library Management System",
    description: "A system to manage books and library operations efficiently.",
    tech: ["Java", "Spring Boot", "PostgreSQL"],
    github: "https://github.com/yourgithub/library-management",
    demo: "#",
  },
  {
    title: "Disease Prediction Model",
    description: "Machine learning model predicting general diseases.",
    tech: ["Python", "Flask", "Machine Learning"],
    github: "https://github.com/yourgithub/disease-prediction",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="h-screen flex flex-col justify-center px-8 md:px-20 lg:px-32 w-full">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Projects</h2>
      {/*<p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
        Hover over a project to see details.
      </p>*/}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative border border-gray-700 p-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl bg-[#171717] text-white"
          >
        
            <h3 className="text-3xl font-semibold text-white">{project.title}</h3>
            <p className="text-gray-400 text-lg mt-2">{project.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span key={i} className="px-3 py-1 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons stay visible and clickable */}
            <div className="mt-6 flex justify-center space-x-4">
              {/* Commented out GitHub button */}
              {/* 
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 bg-gray-200 text-black font-semibold rounded-lg hover:bg-gray-300 transition"
              >
                <FaGithub />
                <span>GitHub</span>
              </a> 
              */}

              {project.demo !== "#" && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                  <FaExternalLinkAlt />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
