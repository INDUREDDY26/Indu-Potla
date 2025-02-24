"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const textOptions = ["Software Engineer", "Full-Stack Developer", "Problem Solver"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col items-center justify-center text-center h-screen px-6 w-full bg-white">
      {/* Name & Title */}
      <h1 className="text-6xl md:text-7xl font-bold text-gray-900 leading-tight">
        Hi, I'm <span className="text-gray-700">Indu</span>
      </h1>

      <motion.p
        key={textIndex}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-3xl mt-2 font-medium text-gray-600"
      >
        {textOptions[textIndex]}
      </motion.p>

      {/* Elegant Description */}
      <p className="text-gray-700 mt-4 text-lg max-w-2xl">
        Passionate about building modern web applications that enhance user experience and efficiency.
        Specializing in full-stack development, cloud computing, and scalable architectures.
      </p>

      {/* Social Links */}
              <div className="mt-6 flex justify-center space-x-6">
                  <a href="https://www.linkedin.com/in/indu-potla/" target="_blank" rel="noopener noreferrer"
                      className="bg-[#171717] p-3 rounded-full text-white hover:bg-gray-800 transition">
                      <FaLinkedin className="text-3xl" />
                  </a>
                  <a href="https://github.com/INDUREDDY26" target="_blank" rel="noopener noreferrer"
                      className="bg-[#171717] p-3 rounded-full text-white hover:bg-gray-800 transition">
                      <FaGithub className="text-3xl" />
                  </a>
                  <a href="mailto:indupotla26@gmail.com"
                      className="bg-[#171717] p-3 rounded-full text-white hover:bg-gray-800 transition">
                      <FaEnvelope className="text-3xl" />
                  </a>
              </div>

      {/* Buttons */}
      <div className="mt-6 flex space-x-4">
        <a
          href="/resume.pdf"
          download
          className="px-6 py-3 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-700 transition-all shadow-md"
        >
          📄 Download Resume
        </a>
        <a
          href="#contact"
          className="px-6 py-3 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-700 transition-all shadow-md"
        >
          ☎️ Contact Me
        </a>
      </div>
    </section>
  );
}
