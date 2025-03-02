import React, { forwardRef } from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGit, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiMongoose, SiPostman } from "react-icons/si";

const Skills = forwardRef((props,ref)=> {
  const skills = [
    { skill: "HTML", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
    { skill: "CSS", icon: <FaCss3Alt className="text-blue-500 text-5xl" /> },
    { skill: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500 text-5xl" /> },
    { skill: "JavaScript", icon: <FaJs className="text-yellow-400 text-5xl" /> },
    { skill: "React.js", icon: <FaReact className="text-blue-400 text-5xl" /> },
    { skill: "Node.js", icon: <FaNodeJs className="text-green-500 text-5xl" /> },
    { skill: "Express.js", icon: <SiExpress className="text-gray-400 text-5xl" /> },
    { skill: "MongoDB", icon: <SiMongodb className="text-green-600 text-5xl" /> },
    { skill: "Mongoose", icon: <SiMongoose className="text-red-500 text-5xl" /> },
    { skill: "Git", icon: <FaGit className="text-orange-600 text-5xl " /> },
    { skill: "GitHub", icon: <FaGithub className="text-white text-5xl" /> },
    { skill: "Postman", icon: <SiPostman className="text-orange-500 text-5xl" /> },
  ];

  return (
    <div ref={ref} className="flex flex-col items-center justify-center py-32 select-none ">

      <h2 className="poppins-bold text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
        My Skills
      </h2>

      <div className="flex gap-5 mt-10 flex-wrap items-center justify-center duration-500">
        {skills.map(({ skill, icon }) => (
          <div
            key={skill}
            className="flex items-center space-x-3 text-white border-2 border-transparent bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl py-5 px-8 text-center w-full md:w-72
        hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 hover:border-blue-500 duration-200 ease-in-out"
          >
            {icon}
            <span className="text-xl font-semibold poppins-semibold">{skill}</span>
          </div>
        ))}
      </div>
    </div>

  );
})

export default Skills;
