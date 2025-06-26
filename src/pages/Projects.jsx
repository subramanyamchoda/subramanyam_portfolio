import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useInView } from "framer-motion";

const projects = [
   {
    title: "PandaRestaurant – Restaurant Booking",
    description:
      "Table reservation & ordering platform with user portals. Welcome to Panda Restaurant – where great food meets smart booking!✨ Log in to explore restaurants near you.🍽️ Browse available tables and choose your perfect time slot.📅 Book instantly and track your reservation details in real-time.No calls. No waiting. Just seamless dining.",   
    techStack: [
        "React.js",
      "Node.js",
       "Express.js",
       "MongoDB",     
      "Tailwind CSS",
      "Framer Motion",
      "JWT",
      "Google OAuth",
      "Deploy on Vercel & Render",
    ],
    images: [
      "panarestuser1.png",
      "panarestuser2.png",
      "panarestuser3.png",
      "panarestuser4.png",
      "panarestuser5.png",
      "panarestuser6.png",
      "panarestuser7.png",
      "panarestuser8.png",
      "panarestuser9.png",
    ],
    liveDemo: "https://pandarestaurantsuser.vercel.app/",
    githubLink: "https://github.com/subramanyamchoda/panda-rest-user",
  },
  
  {
    title: "EasyHomes – Smart Rental Platform",
    description:
      "Platform for renters to list homes and users to search, view, and contact after payment verification. -	Created a dual-role rental platform for homeowners and tenants.Enabled secure property listings, smart search, and UPI-based contact access",
   
    techStack: [
        "React.js",
      "Node.js",
       "Express.js",
       "MongoDB",     
      
      "JWT",
      "Tailwind CSS",
      "Framer Motion",
      "Deploy on Vercel & Render",
    ],
    images: [
      "easyhomes1.png",
      "easyhomes2.png",
      "easyhomes3.png",
      "easyhomes4.png",
      "easyhomes5.png",
      "easyhomes6.png",
      "easyhomes7.png",
      "easyhomes8.png",
      "easyhomes9.png",
      "easyhomes10.png",
    ],
    liveDemo: "https://easyhomes7.vercel.app",
    githubLink: "https://github.com/subramanyamchoda/easyhomes_client",
  },
 
 
  {
    title: "PandaFiles – Secure File Manager",
    description:
      "Modern, secure file manager built with the MERN stack and Google OAuth2. -	Built a secure file manager with support for all file types and Google login.	Features include real-time upload progress, dark mode, and mobile responsiveness",
      

    techStack: [
     
      "React.js",
      "Node.js",
       "Express.js",
       "MongoDB",     
      "Tailwind CSS",
      "Framer Motion",
      "Google OAuth",
      "Deploy on Vercel & Render",
    ],
    images: [
      "pandafiles1.png",
      "pandafiles2.png",
      "pandafiles3.png",
      "pandafiles4.png",
      "pandafiles5.png",
      "pandafiles6.png",
    ],
    liveDemo: "https://pandafiles.vercel.app",
    githubLink: "https://github.com/subramanyamchoda/pandafiles-client",
  },
  {
    title: "PandaChats – Real‑Time Chat App",
    description:
      "PandaChats is a real-time chat app built with the MERN stack, Tailwind CSS, and Socket.IO, offering a smooth messaging experience. It supports 🧑‍🤝‍🧑 one-to-one and group chats, 💬 real-time messaging with typing indicators, 📂 media sharing, 👀 online presence tracking, 😄 emoji reactions.",

    techStack: [
         "React.js",
      "Node.js",
       "Express.js",
       "MongoDB",     
      "Socket.IO",
      "Tailwind CSS",
      "Framer Motion",
       "Deploy on Vercel & Render",
    ],
    images: [
      "pandachat1.png",
      "pandachat2.png",
      "pandachat3.png",
      
    ],
    liveDemo: "https://pandachats.vercel.app",
    githubLink: "https://github.com/subramanyamchoda/chat_client",
  },
  {
    title: "Rainwater Harvesting Dashboard",
    description:
      "A real-time data visualization dashboard simulates a rainwater harvesting system using Chart.js and Socket.IO, featuring live updates for key performance metrics. It includes dynamic charts for monitoring 🚰 water tank levels, 🌊 water flow rates, ⚙️ turbine RPM, ⚡ electricity output, and 🔋 battery storage.",

    techStack: [
        "React.js",
      "Node.js",
       "Express.js",
       "MongoDB",     
      
      "Socket.IO",
      "Chart.js",
      "Tailwind CSS",
       "Framer Motion",
       "Deploy on Vercel & Render",
    ],
    images: [
      "rainwater1.png",
      "rainwater2.png",
      "rainwater3.png",
      "rainwater4.png",
      "rainwater5.png",
    ],
    liveDemo: "https://pandarainwaterharvesting.vercel.app",
    githubLink: "https://github.com/subramanyamchoda/rainwaterharvesting_client",
  },
  
  {
    title: "PandaAdder - Add Your Restaurants and Tables",
    description:
      "Add your restaurant profile and configure table layouts with ease.Manage table bookings and view real-time reservations.Streamline your entire restaurant operation from one powerful dashboard.",

    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Google OAuth",
      "Deploy on Vercel & Render"
    ],
    images: [
     "pandarestadder1.png",
      "pandarestadder2.png",
      "pandarestadder3.png",
      "pandarestadder4.png",
      "pandarestadder5.png",
      "pandarestadder6.png",
      "pandarestadder7.png",
      "pandarestadder8.png",
      "pandarestadder9.png",
    ],
    liveDemo: "https://pandarestaurantsadder.vercel.app/",
    githubLink: "https://github.com/subramanyamchoda/panda-rest-adder",
  },
];


const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 14 },
  },
};

const ProjectCard = ({ project }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % project.images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [project.images.length]);

  return (
    <motion.div
      variants={cardVariants}
      className="bg-gray-800 rounded-3xl shadow-xl overflow-hidden w-full max-w-2xl transition-all hover:scale-[1.01]"
    >
      <div className="relative h-75">
        <img
          src={project.images[index]}
          alt={project.title}
          className="w-full h-full object-cover transition duration-700"
        />
        <div className="absolute  w-full flex justify-center ">
          {project.images.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full ${i === index ? "bg-white" : "bg-white/50"}`}
            />
          ))}
        </div>
      </div>

      <div className="p-6 text-white">
        <h2 className="text-2xl font-bold">{project.title}</h2>
        <p className="mt-2 text-sm text-gray-300">{project.description}</p>

        <div className="mt-2">
          <p className="text-sm font-semibold mb-1">Tech Stack:</p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                className="text-xs px-2 py-1 rounded-full bg-cyan-700 text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-3 flex flex-col sm:flex-row gap-2">
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-600 hover:text-white transition font-semibold text-sm py-2 rounded-xl"
          >
            🚀 Live Demo
          </a>
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center border-2 border-gray-400 text-gray-300 hover:bg-gray-600 hover:text-white transition font-semibold text-sm py-2 rounded-xl"
            >
              💻 GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsCarousel = () => {
  const [scrollIndex, setScrollIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(
    window.innerWidth >= 1024 ? 2 : 1
  );

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(window.innerWidth >= 1024 ? 2 : 1);
      setScrollIndex(0);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.ceil(projects.length / visibleCards) - 1;

  const scroll = (dir) => {
    const newIndex = scrollIndex + dir;
    if (newIndex >= 0 && newIndex <= maxIndex) {
      setScrollIndex(newIndex);
    }
  };

  const visibleProjects = projects.slice(
    scrollIndex * visibleCards,
    scrollIndex * visibleCards + visibleCards
  );

  return (
    <section
      ref={ref}
      className="bg-gray-900 py-16 px-2 transition-colors duration-500 text-white"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h1 className="text-3xl  font-bold  bg-clip-text bg-gradient-to-r text-white mb-3 mt-2 text-center">
          🚀 Projects Showcase
        </h1>

        <div className="relative w-full flex justify-center items-center">
          <button
            onClick={() => scroll(-1)}
            disabled={scrollIndex === 0}
            className="absolute left-[-30px] bg-gray-700 p-2 rounded-full text-cyan-300 hover:bg-gray-600 transition z-10"
          >
            <ChevronLeft />
          </button>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-wrap lg:flex-nowrap justify-center gap-8 w-full transition-all duration-500 ease-in-out"
          >
            {visibleProjects.map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </motion.div>

          <button
            onClick={() => scroll(1)}
            disabled={scrollIndex === maxIndex}
            className="absolute right-[-30px] bg-gray-700 p-2 rounded-full text-cyan-300 hover:bg-gray-600 transition z-10"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCarousel;
