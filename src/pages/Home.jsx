import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Hero = () => {
  const controls = useAnimation();

  // Trigger animation when component comes into view
  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleViewResume = () => {
    window.open("/chodasubramanyam1.pdf", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      <motion.section
        id="home"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="min-h-screen flex items-center justify-center pt-24 pb-24"
      >
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between w-full gap-12 px-4 md:px-8">
          {/* Left Content */}
          <motion.div
            variants={itemVariants}
            className="text-center lg:text-left space-y-6 max-w-2xl"
          >
            <p className="text-xl sm:text-2xl font-medium text-gray-300">
              Hello, I'm
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-400 leading-tight">
              Subramanyam Choda
            </h1>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-200">
              MERN Stack Developer
            </h2>

            <p className="text-base sm:text-lg text-gray-400 max-w-md sm:max-w-lg mx-auto lg:mx-0">
              Passionate about building scalable, intuitive full-stack web applications that deliver seamless user experiences.
            </p>

            {/* Social Icons */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start items-center gap-6 mt-6 text-2xl sm:text-3xl"
            >
              <motion.a
                href="https://github.com/subramanyamchoda"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="text-gray-100 hover:text-gray-300 transition"
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/subramanyamchoda"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="text-blue-400 hover:text-blue-500 transition"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="mailto:subramanyamchoda50@gmail.com"
                whileHover={{ scale: 1.2 }}
                className="text-red-400 hover:text-red-500 transition"
              >
                <FaEnvelope />
              </motion.a>
            </motion.div>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center sm:justify-start gap-4 mt-6"
            >
              <motion.button
                onClick={handleViewResume}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-6 py-3 text-base sm:text-lg rounded-2xl shadow-md hover:bg-blue-700 transition"
              >
                📄 View Resume
              </motion.button>

              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-white px-6 py-3 text-base sm:text-lg rounded-2xl transition"
              >
                👋 Let's Connect
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="w-48 sm:w-64 md:w-80 lg:w-96 aspect-square rounded-full border-4 border-blue-400 shadow-lg overflow-hidden"
          >
            <img
              src="/subbu1.png"
              alt="Subramanyam Choda"
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Hero;
