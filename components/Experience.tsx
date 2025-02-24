"use client";

import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    role: "Software Engineer",
    company: "Cognizant Technology Solutions",
    location: "Hyderabad, India",
    logo: "/cognizant-logo.png",
    duration: "June 2022 – May 2023",
    responsibilities: [
      "Improved a client’s website with Angular and React, enhancing navigation and checkout flow, increasing user retention by 15%.",
      "Automated routine tasks with Python, reducing manual effort by 20% and improving operational efficiency.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Cognizant Technology Solutions",
    location: "Hyderabad, India",
    logo: "/cognizant-logo.png",
    duration: "January 2022 – May 2022",
    responsibilities: [
      "Developed a Mail Order Pharmacy portal using Java, Spring Boot, and Microservices, improving order processing efficiency by 25%.",
      "Built and optimized frontend features with React, enabling medicine search, ordering, and seamless payment processing.",
      "Enhanced backend performance with MySQL and Spring Boot, ensuring secure drug supply management and 30% faster data synchronization.",
    ],
  },
  {
    role: "Student Research Assistant",
    company: "Vardhaman College of Engineering",
    location: "Hyderabad, India",
    logo: "/vardhaman-logo.png",
    duration: "June 2021 – December 2021",
    responsibilities: [
      "Automated data processing workflows using Python scripts and machine learning models, improving data analysis efficiency by 40%.",
      "Collaborated with a multidisciplinary research team to collect, organize, and analyze datasets, optimizing research methodologies.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative z-10 py-20 px-6 sm:px-10 md:px-20 lg:px-32 w-full bg-gray-100 dark:bg-gray-900"
    >
      {/* Title */}
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
        <FaBriefcase className="text-gray-700 dark:text-gray-300" /> Work Experience
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
        My professional journey in software engineering.
      </p>

      {/* Experience Cards */}
      <div className="mt-12 space-y-10">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start gap-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            {/* Company Logo */}
            <img
              src={exp.logo}
              alt={`${exp.company} Logo`}
              className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-lg shadow-md"
            />
            
            {/* Experience Details */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {exp.role}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {exp.company} • {exp.location} • {exp.duration}
              </p>
              <ul className="mt-3 list-disc pl-5 text-gray-600 dark:text-gray-400">
                {exp.responsibilities.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
