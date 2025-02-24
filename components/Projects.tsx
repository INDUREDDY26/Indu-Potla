"use client";

import { FaExternalLinkAlt } from "react-icons/fa";

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
    <section id="projects" className="relative z-10 py-20 px-6 sm:px-10 md:px-20 lg:px-32 w-full bg-gray-100 dark:bg-gray-900">
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-gray-300 dark:border-gray-700 p-6 rounded-lg shadow-lg bg-white dark:bg-[#171717] text-gray-900 dark:text-white transition-all"
          >
            {/* Project Title */}
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg mt-2">{project.description}</p>

            {/* Tech Stack Badges */}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span key={i} className="px-3 py-1 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons - Keep GitHub button commented for now */}
            <div className="mt-6 flex justify-start space-x-4">
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
