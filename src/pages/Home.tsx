import { motion } from "framer-motion";
import { ArrowRight, User, Code } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      className="min-h-screen pt-32 md:pt-24 flex items-center bg-gradient-to-br from-indigo-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="container-custom">
        <motion.div
          variants={itemVariants}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="flex justify-center mb-6">
            <img
              src="/Image/Home.jpg"
              alt="Mohammed Tharik - Web Developer"
              className="w-64 h-64 rounded-full object-cover border-4 border-indigo-200 shadow-lg"
            />
          </div>
          <motion.p
            variants={itemVariants}
            className="text-lg text-indigo-600 font-medium mb-4"
          >
            Hello, I'm
          </motion.p>
          <motion.h1
            variants={itemVariants}
            className="font-bold mb-6 gradient-text"
          >
            Mohammed Tharik
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8"
          >
            Passionate Web Developer | Crafting Elegant Interfaces & Scalable
            Backends
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center mb-5 max-w-2xl mx-auto"
          >
            <Link
              to="/about"
              className="btn btn-outline flex items-center justify-center"
            >
              <User className="mr-2 h-5 w-5" />
              About Me
            </Link>
            <Link
              to="/skills"
              className="btn btn-primary flex items-center justify-center"
            >
              <Code className="mr-2 h-5 w-5" />
              TechStack
            </Link>
            <Link
              to="/projects"
              className="btn btn-outline flex items-center justify-center"
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="btn btn-outline flex items-center justify-center"
            >
              Get In Touch
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
