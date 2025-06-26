import React from 'react';
import { motion } from 'framer-motion';
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaJava,
  FaPython, FaGitAlt, FaGithub, FaChartBar
} from 'react-icons/fa';
import {
  SiMongodb, SiExpress, SiTailwindcss, SiVite, SiPostman,
  SiSocketdotio, SiMysql, SiRender, SiVercel
} from 'react-icons/si';

const skills = [

  { icon: <FaReact className="text-blue-400" />, name: 'React' },
  { icon: <FaNodeJs className="text-green-600" />, name: 'Node.js' },
  { icon: <SiExpress className="text-gray-200" />, name: 'Express' },
  { icon: <SiMongodb className="text-green-500" />, name: 'MongoDB' },
  { icon: <SiTailwindcss className="text-cyan-400" />, name: 'Tailwind Css' },
  { icon: <FaHtml5 className="text-orange-500" />, name: 'HTML' },
  { icon: <FaCss3Alt className="text-blue-500" />, name: 'CSS' },
  { icon: <FaJs className="text-yellow-400" />, name: 'JavaScript' },
  { icon: <FaBootstrap className="text-purple-500" />, name: 'Bootstrap' },
  { icon: <SiVite className="text-purple-400" />, name: 'Vite' },
  { icon: <FaJava className="text-red-500" />, name: 'Java' },
  { icon: <FaPython className="text-blue-300" />, name: 'Python' },
  { icon: <SiMysql className="text-blue-500" />, name: 'SQL' },
  { icon: <FaGitAlt className="text-orange-400" />, name: 'Git' },
  { icon: <FaGithub className="text-white" />, name: 'GitHub' },
  { icon: <SiSocketdotio className="text-white" />, name: 'Socket.IO' },
  { icon: <FaChartBar className="text-indigo-400" />, name: 'Chart.js' },
  { icon: <SiPostman className="text-orange-400" />, name: 'Postman' },
  { icon: <SiVercel className="text-white" />, name: 'Vercel' },
  { icon: <SiRender className="text-blue-400" />, name: 'Render' },
];

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 100 },
  },
};

const Skills = () => {
  return (
    <motion.section
      id="skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="min-h-screen px-6 py-20 bg-gray-900 text-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          variants={itemVariants}
          className="text-4xl font-bold text-blue-400 mb-12"
        >
          My Skills
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 justify-items-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center justify-center group hover:scale-110 transition-transform duration-300"
            >
              <div className="text-6xl sm:text-7xl mb-2">
                {skill.icon}
              </div>
              <p className="text-base font-medium text-gray-300 group-hover:text-blue-400 transition-colors duration-300">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
