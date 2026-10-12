import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Loader } from 'lucide-react';
import { fetchRepositories } from '../utils/github';
import { Repository } from '../types';

const Projects = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getRepositories = async () => {
      try {
        setLoading(true);
        const data = await fetchRepositories('Tharik786');
        setRepos(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load repositories. Please try again later.');
        setLoading(false);
      }
    };

    getRepositories();
  }, []);

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
      className="pt-20 pb-16 bg-gray-50 dark:bg-gray-900"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="container-custom">
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <h1 className="section-title">My Projects</h1>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-8"></div>
          <p className="section-subtitle">
            A collection of my recent projects and GitHub repositories
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Loader className="h-10 w-10 text-indigo-600 animate-spin" />
            <span className="ml-4 text-lg">Loading projects...</span>
          </div>
        ) : error ? (
          <motion.div 
            variants={itemVariants}
            className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 rounded-lg p-6 text-center"
          >
            <p>{error}</p>
            <p className="mt-4">
              Meanwhile, you can visit my{' '}
              <a 
                href="https://github.com/Tharik786" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline"
              >
                GitHub profile
              </a>
            </p>
          </motion.div>
        ) : (
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {repos.length > 0 ? (
              repos.map((repo) => (
                <motion.div
                  key={repo.id}
                  className="card overflow-hidden h-full flex flex-col"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="h-40 bg-gradient-to-r from-indigo-500 to-teal-500 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Github className="text-white h-16 w-16 opacity-25" />
                    </div>
                  </div>
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-bold mb-3">{repo.name}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {repo.topics && repo.topics.map((topic, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-6 pt-0 mt-auto">
                    <div className="flex justify-between items-center">
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-indigo-600 hover:text-indigo-800"
                      >
                        <Github className="h-4 w-4 mr-1" />
                        View Code
                      </a>
                      {repo.homepage && (
                        <a
                          href={repo.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-indigo-600 hover:text-indigo-800"
                        >
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-12 bg-gray-50 rounded-lg">
                <p className="text-lg text-gray-600 dark:text-gray-400">No repositories found</p>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Projects;