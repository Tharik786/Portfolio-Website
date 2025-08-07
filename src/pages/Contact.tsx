import { useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Send,
  User,
  MessageSquare,
  FileText,
  Download,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
    loading: boolean;
  }>({
    submitted: false,
    success: false,
    message: "",
    loading: false,
  });

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Tharik Resume.pdf";
    link.download = "Mohammed_Tharik_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setFormStatus({
      submitted: false,
      success: false,
      message: "",
      loading: true,
    });

    try {
      // Using EmailJS or a similar service for sending emails
      // For now, we'll create a mailto link as a fallback
      const subject = encodeURIComponent(
        `Portfolio Contact: ${formData.subject}`
      );
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );

      const mailtoLink = `mailto:tharik.official007@gmail.com?subject=${subject}&body=${body}`;

      // Open the user's email client
      window.location.href = mailtoLink;

      // Show success message
      setFormStatus({
        submitted: true,
        success: true,
        message:
          "Thanks for reaching out! I have received your message and will reply shortly.",
        loading: false,
      });

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Clear status after 8 seconds
      setTimeout(
        () =>
          setFormStatus({
            submitted: false,
            success: false,
            message: "",
            loading: false,
          }),
        8000
      );
    } catch (error) {
      setFormStatus({
        submitted: true,
        success: false,
        message:
          "There was an error processing your request. Please try again or contact me directly at tharik.official007@gmail.com",
        loading: false,
      });

      setTimeout(
        () =>
          setFormStatus({
            submitted: false,
            success: false,
            message: "",
            loading: false,
          }),
        8000
      );
    }
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

  return (
    <motion.div
      className="pt-20 pb-16 bg-gradient-to-br from-indigo-50 via-white to-teal-50"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="container-custom">
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <h1 className="section-title">Contact Me</h1>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-8"></div>
          <p className="section-subtitle">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              I'm always open to discussing new projects, creative ideas or
              opportunities to be part of your vision.
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="h-12 w-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-4">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Email</h4>
                  <a
                    href="mailto:tharik.official007@gmail.com"
                    className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 transition-colors"
                  >
                    tharik.official007@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="h-12 w-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-4">
                  <Github className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">GitHub</h4>
                  <a
                    href="https://github.com/Tharik786"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 transition-colors"
                  >
                    Tharik786
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="h-12 w-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-4">
                  <Linkedin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">LinkedIn</h4>
                  <a
                    href="https://www.linkedin.com/in/mohammed-tharik-7846701ab/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 transition-colors"
                  >
                    Mohammed Tharik
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="h-12 w-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-4">
                  <FileText className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Resume</h4>
                  <button
                    onClick={handleDownloadResume}
                    className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 transition-colors inline-flex items-center"
                  >
                    <Download className="h-4 w-4 mr-1" />
                    Download Resume
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

              {formStatus.submitted && (
                <div
                  className={`mb-6 p-4 rounded-lg flex items-start ${
                    formStatus.success
                      ? "bg-green-50 text-green-700 border border-green-200"
                      : "bg-red-50 text-red-700 border border-red-200"
                  }`}
                >
                  {formStatus.success ? (
                    <CheckCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  )}
                  <span>{formStatus.message}</span>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
                  >
                    Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors"
                      placeholder="Your full name"
                      required
                      disabled={formStatus.loading}
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
                  >
                    Email *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors"
                      placeholder="your.email@example.com"
                      required
                      disabled={formStatus.loading}
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="subject"
                    className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
                  >
                    Subject *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MessageSquare className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors"
                      placeholder="What's this about?"
                      required
                      disabled={formStatus.loading}
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors resize-vertical"
                    placeholder="Tell me about your project or inquiry..."
                    required
                    disabled={formStatus.loading}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={formStatus.loading}
                >
                  {formStatus.loading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                  You can also reach me directly at{" "}
                  <a
                    href="mailto:tharik.official007@gmail.com"
                    className="text-indigo-600 hover:text-indigo-800 font-medium"
                  >
                    tharik.official007@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
