import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaFileAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { motion, useInView } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 100 },
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Contact() {
  const formRef = useRef();
  const sectionRef = useRef();
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_3du3hec", // your service ID
        "template_8hzzewl", // your template ID
        formRef.current,
        "zZJhy6aWQqrOWbjk4" // your public key
      )
      .then(() => {
        setMessageSent(true);
        formRef.current.reset();
        setTimeout(() => setMessageSent(false), 5000);
      })
      .catch((error) => console.error("EmailJS Error:", error));
  };

  return (
    <section
      ref={sectionRef}
      className="bg-gray-900 text-white py-16 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-3">
            Get In Touch
          </h1>
          <p className="text-gray-400 text-base max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I’d love to hear from you.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12">
          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-700"
          >
            <h2 className="text-2xl font-bold mb-6">Send me a message</h2>
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="flex flex-col gap-4"
            >
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full bg-gray-700 text-white placeholder-gray-400 border border-gray-600 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full bg-gray-700 text-white placeholder-gray-400 border border-gray-600 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
                className="w-full bg-gray-700 text-white placeholder-gray-400 border border-gray-600 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              ></textarea>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-700 transition text-white font-semibold py-2 px-4 rounded-lg"
              >
                <FaPaperPlane /> Send Message
              </button>
              {messageSent && (
                <p className="text-green-400 mt-2 text-sm font-medium">
                  ✅ Message sent successfully!
                </p>
              )}
            </form>
          </motion.div>

          {/* Social + Info */}
          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            {/* Social Links */}
            <div className="bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-700">
              <h2 className="text-2xl font-bold mb-6">Connect with me</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <a
                  href="mailto:subramanyamchoda50@email.com"
                  className="flex flex-col items-center justify-center bg-gray-700 hover:bg-gray-600 p-4 rounded-lg transition text-center"
                >
                  <FaEnvelope className="text-2xl mb-1 text-red-400" />
                  <span className="text-sm">Email</span>
                </a>
                <a
                  href="https://github.com/subramanyamchoda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center bg-gray-700 hover:bg-gray-600 p-4 rounded-lg transition text-center"
                >
                  <FaGithub className="text-2xl mb-1" />
                  <span className="text-sm">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/subramanyamchoda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center bg-gray-700 hover:bg-gray-600 p-4 rounded-lg transition text-center"
                >
                  <FaLinkedin className="text-2xl text-blue-400 mb-1" />
                  <span className="text-sm">LinkedIn</span>
                </a>
                <a
                  href="/Subramanyam_Choda.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center bg-gray-700 hover:bg-gray-600 p-4 rounded-lg transition text-center"
                >
                  <FaFileAlt className="text-2xl mb-1" />
                  <span className="text-sm">Resume</span>
                </a>
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-700">
              <h2 className="text-xl font-bold mb-2">Let’s work together</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                I’m always open to exciting opportunities and collaborative work.
                Whether you need a developer or want to build something awesome
                together, feel free to drop a message.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
