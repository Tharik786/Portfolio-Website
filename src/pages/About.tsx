import { motion } from "framer-motion";
import { Code, Database, Layout, User, Download } from "lucide-react";

const About = () => {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Tharik Resume.pdf";
    link.download = "Mohammed_Tharik_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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

  const cards = [
    {
      title: "Frontend Development",
      description:
        "Creating responsive, accessible, and beautiful user interfaces with modern frameworks and tools.",
      icon: <Layout className="h-10 w-10 text-indigo-500" />,
    },
    {
      title: "Backend Development",
      description:
        "Building robust server-side applications with secure authentication and efficient data handling.",
      icon: <Code className="h-10 w-10 text-indigo-500" />,
    },
    {
      title: "Database Management",
      description:
        "Designing and optimizing database schemas for performance, security, and scalability.",
      icon: <Database className="h-10 w-10 text-indigo-500" />,
    },
    {
      title: "User Experience",
      description:
        "Focusing on creating intuitive and engaging user experiences that solve real problems.",
      icon: <User className="h-10 w-10 text-indigo-500" />,
    },
  ];

  return (
    <motion.div
      className="pt-20 pb-16 bg-gray-50 dark:bg-gray-900"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="container-custom">
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <h1 className="section-title">About Me</h1>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto mb-20">
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-6 gradient-text">
              Mohammed Tharik
            </h2>
            <h3 className="text-xl text-gray-700 dark:text-gray-300 mb-6">Web Developer</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I am a passionate Web Developer with a strong focus on building
              modern, responsive web applications. With hands on experience in
              both frontend and backend technologies, I specialize in crafting
              user interfaces and robust server-side solutions.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              My Techstack includes HTML, CSS, JavaScript, Bootstrap, and
              ReactJS for frontend development. On the backend, I work with
              Python and MySQL to develop scalable systems and manage data
              efficiently. This full-stack capability enables me to deliver
              comprehensive web solutions that align with business goals and
              exceed user expectations.
            </p>
            <button
              onClick={handleDownloadResume}
              className="btn btn-primary inline-flex items-center"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </button>
          </motion.div>
        </div>

        <motion.h3
          variants={itemVariants}
          className="text-2xl font-bold text-center mb-12"
        >
          What I Do
        </motion.h3>

        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="card p-8 hover:border-l-4 hover:border-indigo-500 transition-all"
              whileHover={{ y: -5 }}
            >
              <div className="mb-4">{card.icon}</div>
              <h4 className="text-xl font-bold mb-3">{card.title}</h4>
              <p className="text-gray-600 dark:text-gray-400">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
