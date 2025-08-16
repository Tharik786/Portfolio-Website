import { NavLink } from 'react-router-dom';
import { Github, Linkedin, Mail, FileText, Download } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Tharik Resume.pdf';
    link.download = 'Mohammed_Tharik_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300 py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Mohammed Tharik</h3>
            <p className="mb-4 text-gray-400 dark:text-gray-500">
              Passionate Web Developer | Crafting Elegant Interfaces & Scalable Backends
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Tharik786"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/mohdtharik"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:tharik.official007@gmail.com"
                className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <button
                onClick={handleDownloadResume}
                className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors"
                aria-label="Download Resume"
              >
                <FileText size={20} />
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/"
                  className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/skills"
                  className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors"
                >
                  Skills
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors"
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:tharik.official007@gmail.com">tharik.official007@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Github size={16} />
                <a
                  href="https://github.com/Tharik786"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white dark:text-gray-500 transition-colors"
                >
                  Tharik786
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Linkedin size={16} />
                <a
                  href="https://www.linkedin.com/in/mohdtharik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white dark:text-gray-500 transition-colors"
                >
                  Mohammed Tharik
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Download size={16} />
                <button
                  onClick={handleDownloadResume}
                  className="hover:text-white dark:text-gray-500 transition-colors text-left"
                >
                  Download Resume
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 text-center text-gray-400 dark:text-gray-500">
          <p>© {currentYear} Mohammed Tharik. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
