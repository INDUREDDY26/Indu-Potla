"use client";

import {
  FaReact,
  FaNodeJs,
  
  FaTools,
  FaJava,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiFlask,
  SiDjango,
  SiExpress,
  SiSpringboot,
  SiAngular,
  SiDocker,
  SiJira,
  SiPostman,
  SiTailwindcss,
} from "react-icons/si";

export default function Skills() {
  return (
    <section id="skills" className="flex flex-col justify-center px-8 md:px-20  lg:px-32 w-full">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Skills</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
        Technologies I’ve worked with:
      </p>

      {/* Languages & Databases */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Languages & Databases
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <SkillCard icon={<SiPython className="text-blue-600" />} label="Python" />
          <SkillCard icon={<FaJava className="text-orange-600" />} label="Java" />
          <SkillCard icon={<SiJavascript className="text-yellow-500" />} label="JavaScript" />
          <SkillCard icon={<SiMysql className="text-blue-500" />} label="MySQL" />
          <SkillCard icon={<SiPostgresql className="text-blue-700" />} label="PostgreSQL" />
          <SkillCard icon={<SiMongodb className="text-green-400" />} label="MongoDB" />
        </div>
      </div>

      {/* Frameworks & Technologies */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Frameworks & Technologies
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <SkillCard icon={<SiFlask className="text-gray-500" />} label="Flask" />
          <SkillCard icon={<SiDjango className="text-green-600" />} label="Django REST Framework" />
          <SkillCard icon={<FaReact className="text-blue-400" />} label="React" />
          <SkillCard icon={<FaNodeJs className="text-green-500" />} label="Node.js" />
          <SkillCard icon={<SiExpress className="text-gray-600" />} label="Express.js" />
          <SkillCard icon={<SiSpringboot className="text-green-500" />} label="Spring Boot" />
          <SkillCard icon={<SiAngular className="text-red-600" />} label="Angular" />
          <SkillCard icon={<SiTailwindcss className="text-blue-400" />} label="Tailwind CSS" />
        </div>
      </div>

      {/* Cloud & DevOps */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Cloud & DevOps
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/*<SkillCard icon={<FaAws className="text-yellow-600" />} label="AWS" />*/}
          <SkillCard icon={<SiDocker className="text-blue-500" />} label="Docker" />
        </div>
      </div>

      {/* Tools & Methodologies */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Tools & Methodologies
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <SkillCard icon={<FaGitAlt className="text-orange-500" />} label="Git" />
          <SkillCard icon={<SiPostman className="text-orange-500" />} label="Postman" />
          <SkillCard icon={<SiJira className="text-blue-500" />} label="JIRA" />
          <SkillCard icon={<FaTools className="text-gray-600" />} label="SDLC & Agile" />
        </div>
      </div>
    </section>
  );
}

function SkillCard({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-md">
      <div className="text-5xl">{icon}</div>
      <span className="text-gray-900 dark:text-white mt-2 font-semibold">{label}</span>
    </div>
  );
}
