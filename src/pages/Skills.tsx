import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Code, Database, Layout } from 'lucide-react';

const skills = [
  {
    category: 'Frontend',
    icon: <Layout className="h-12 w-12 text-indigo-500" />,
    items: [
      { name: 'HTML', level: 90 },
      { name: 'CSS', level: 85 },
      { name: 'JavaScript', level: 80 },
      { name: 'Bootstrap', level: 85 },
      { name: 'ReactJS', level: 80 },
    ],
  },
  {
    category: 'Backend',
    icon: <Code className="h-12 w-12 text-indigo-500" />,
    items: [
      { name: 'Python', level: 85 },
    ],
  },
  {
    category: 'Database',
    icon: <Database className="h-12 w-12 text-indigo-500" />,
    items: [
      { name: 'MySQL', level: 85 },
    ],
  },
];

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  const controls = useAnimation();
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (isInView) {
      controls.start({ width: `${level}%` });
    }
    return () => controls.stop();
  }, [controls, isInView, level]);

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-medium text-gray-700 dark:text-gray-300">{name}</span>
        <span className="text-gray-600 dark:text-gray-400">{level}%</span>
      </div>
      <div className="skill-progress bg-gray-200 dark:bg-gray-700">
        <motion.div
          className="skill-progress-bar"
          initial={{ width: 0 }}
          animate={controls}
          transition={{ duration: 1.5, ease: "easeOut" }}
          onViewportEnter={() => setIsInView(true)}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      className="pt-20 pb-16 bg-gradient-to-br from-indigo-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="container-custom">
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <h1 className="section-title text-gray-900 dark:text-white">TechStack</h1>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-8"></div>
          <p className="section-subtitle text-gray-600 dark:text-gray-400">
            These are the technologies and tools I work with to create amazing web experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {skills.map((category, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 border border-gray-200 dark:border-gray-700"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-2xl font-bold ml-4 text-gray-900 dark:text-white">{category.category}</h3>
              </div>
              
              {category.items.map((skill, idx) => (
                <SkillBar key={idx} name={skill.name} level={skill.level} />
              ))}
            </motion.div>
          ))}
        </div>

        <motion.div 
          variants={itemVariants}
          className="mt-20 bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">Tools & Technologies</h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {[
              { name: 'HTML', icon: '/html.svg' },
              { name: 'CSS', icon: '/css.svg' },
              { name: 'JavaScript', icon: '/javascript.svg' },
              { name: 'Bootstrap', icon: '/bootstrap.svg' },
              { name: 'ReactJS', icon: '/reactjs.svg' },
              { name: 'Python', icon: '/python.svg' },
              { name: 'MySQL', icon: '/mysql.svg' },
              { name: 'Git', icon: '/git.svg' },
              { name: 'VS Code', icon: '/vscode.svg' },
              { name: 'GitHub', icon: '/github.svg' },
            ].map((tool, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors border border-gray-200 dark:border-gray-600"
                whileHover={{ scale: 1.05 }}
              >
                <div className="h-16 w-16 flex items-center justify-center mb-3">
                  {/* Using a placeholder div instead of actual icons since we don't have the SVGs */}
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-indigo-400 to-teal-400 flex items-center justify-center text-white font-bold">
                    {tool.name.charAt(0)}
                  </div>
                </div>
                <p className="text-center font-medium text-gray-900 dark:text-white">{tool.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;
