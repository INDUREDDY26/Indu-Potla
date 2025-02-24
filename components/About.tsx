"use client"; // Required for client-side rendering

import { FaGraduationCap } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="py-20 px-8 md:px-20 lg:px-32 w-full text-white bg-gray-100 dark:bg-gray-900">
      {/* About Me */}
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white">About Me</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mt-4 leading-relaxed">
        Software Developer with experience in full-stack development, building scalable applications, and optimizing backend workflows.
        Proficient in Python, Java, and JavaScript, with hands-on experience in Flask, Spring Boot, React, and cloud platforms like AWS and GCP.
        Skilled at integrating RESTful APIs, improving system performance, and working in agile teams to deliver efficient solutions. Passionate
        about writing clean, reusable code and developing user-friendly tools that enhance functionality and experience.
      </p>

      {/* Education Section */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
          <FaGraduationCap className="text-gray-700 dark:text-gray-300" /> Education
        </h3>

        {/* University of Florida */}
        <div className="mt-6 flex items-center gap-4 bg-gray-200 dark:bg-gray-800 p-5 rounded-lg shadow-lg">
          <img
            src="/uf-logo.png"
            alt="University of Florida Logo"
            className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-lg shadow-md"
          />
          <div>
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
              University of Florida, Gainesville, FL
            </h4>
            <p className="text-gray-700 dark:text-gray-300">Master of Science in Computer and Information Sciences</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">September 2023 – April 2025</p>
          </div>
        </div>

        {/* Jawaharlal Nehru Technological University */}
        <div className="mt-6 flex items-center gap-4 bg-gray-200 dark:bg-gray-800 p-5 rounded-lg shadow-lg">
          <img
            src="/jntuh-logo.png"
            alt="JNTU Logo"
            className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-lg shadow-md"
          />
          <div>
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
              Jawaharlal Nehru Technological University, Hyderabad
            </h4>
            <p className="text-gray-700 dark:text-gray-300">Bachelor of Science in Computer Science</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">July 2018 – May 2022</p>
          </div>
        </div>
      </div>
      
    </section>
  );
}
