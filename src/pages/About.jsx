import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 50,
      damping: 12,
      when: 'beforeChildren',
      staggerChildren: 0.25,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 60,
      damping: 10,
    },
  },
};

const About = () => {
  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100 px-6 py-24"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          variants={itemVariants}
          className="text-4xl sm:text-5xl font-bold text-blue-400 mb-10"
        >
          About Me
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-gray-300 leading-relaxed"
        >
          I'm a <span className="font-semibold text-blue-400">MERN Stack Developer</span> with strong experience in MongoDB, Express.js, React.js, and Node.js. I also enjoy coding in <span className="font-medium text-gray-200">Java</span> and <span className="font-medium text-gray-200">Python</span>, and building real-time apps using <span className="font-medium text-gray-200">Socket.IO</span> and testing APIs with <span className="font-medium text-gray-200">Postman</span>.
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-gray-300 mt-6 leading-relaxed"
        >
          I'm skilled with modern UI tools like <span className="font-medium text-gray-200">Tailwind CSS</span>, and confident deploying with <span className="font-medium text-gray-200">Vercel</span>, <span className="font-medium text-gray-200">Render</span>, and <span className="font-medium text-gray-200">Vite</span>. I use <span className="font-medium text-gray-200">Git & GitHub</span> daily for version control and collaboration.
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-gray-300 mt-6 leading-relaxed"
        >
          I love solving real-world problems with code and constantly explore new technologies. I'm actively looking for opportunities in teams that value creativity, innovation, and modern tech.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default About;
