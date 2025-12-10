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
import emailjs from "@emailjs/browser";

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
      emailjs.init("WufrnKrPLkqVTv03E");

      // 1️⃣ SEND MESSAGE TO YOU (main inbox)
      await emailjs.send("service_ff5xppl", "template_hhgmya8", {
        name: formData.name,
        from_name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        reply_to: formData.email,
      });

      // 2️⃣ SEND AUTO-REPLY ONLY TO THE USER
      await emailjs.send("service_ff5xppl", "template_9p9jk1g", {
        name: formData.name,
        email: formData.email, // visitor receives auto-reply
        reply_to: formData.email,
      });

      setFormStatus({
        submitted: true,
        success: true,
        message:
          "Your message has been sent! A confirmation email has been delivered to your inbox.",
        loading: false,
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
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
    } catch (error) {
      console.error("EmailJS Error:", error);

      setFormStatus({
        submitted: true,
        success: false,
        message:
          "There was an error sending your message. Please try again or contact me directly.",
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
      transition: { delayChildren: 0.3, staggerChildren: 0.2 },
    },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
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
          <h1 className="section-title text-gray-900 dark:text-white">
            Contact Me
          </h1>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-8"></div>
          <p className="section-subtitle text-gray-600 dark:text-gray-400">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* LEFT SIDE DETAILS */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Get In Touch
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              I'm always open to discussing new projects or opportunities.
            </p>

            <div className="space-y-6">
              {/* EMAIL */}
              <div className="flex items-center">
                <div className="h-12 w-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 mr-4">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Email
                  </h4>
                  <a
                    href="mailto:tharik.official007@gmail.com"
                    className="text-gray-600 dark:text-gray-400 hover:text-indigo-600"
                  >
                    tharik.official007@gmail.com
                  </a>
                </div>
              </div>

              {/* GITHUB */}
              <div className="flex items-center">
                <div className="h-12 w-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 mr-4">
                  <Github className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    GitHub
                  </h4>
                  <a
                    href="https://github.com/Tharik786"
                    target="_blank"
                    className="text-gray-600 dark:text-gray-400 hover:text-indigo-600"
                  >
                    Tharik786
                  </a>
                </div>
              </div>

              {/* LINKEDIN */}
              <div className="flex items-center">
                <div className="h-12 w-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 mr-4">
                  <Linkedin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    LinkedIn
                  </h4>
                  <a
                    href="https://www.linkedin.com/in/mohammed-tharik-7846701ab/"
                    target="_blank"
                    className="text-gray-600 dark:text-gray-400 hover:text-indigo-600"
                  >
                    Mohammed Tharik
                  </a>
                </div>
              </div>

              {/* RESUME */}
              <div className="flex items-center">
                <div className="h-12 w-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 mr-4">
                  <FileText className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Resume
                  </h4>
                  <button
                    onClick={handleDownloadResume}
                    className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 flex items-center"
                  >
                    <Download className="h-4 w-4 mr-1" />
                    Download Resume
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div variants={itemVariants}>
            <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Send Me a Message
              </h3>

              {/* STATUS MESSAGE */}
              {formStatus.submitted && (
                <div
                  className={`mb-6 p-4 rounded-lg flex items-start ${
                    formStatus.success
                      ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400"
                      : "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400"
                  }`}
                >
                  {formStatus.success ? (
                    <CheckCircle className="h-5 w-5 mr-2 mt-0.5" />
                  ) : (
                    <AlertCircle className="h-5 w-5 mr-2 mt-0.5" />
                  )}
                  <span>{formStatus.message}</span>
                </div>
              )}

              {/* FORM */}
              <form onSubmit={handleSubmit}>
                {/* NAME */}
                <div className="mb-6">
                  <label className="block mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    className="w-full px-4 py-3 rounded-lg border dark:border-gray-600 bg-white dark:bg-gray-700"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* EMAIL */}
                <div className="mb-6">
                  <label className="block mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg border dark:border-gray-600 bg-white dark:bg-gray-700"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* SUBJECT */}
                <div className="mb-6">
                  <label className="block mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    className="w-full px-4 py-3 rounded-lg border dark:border-gray-600 bg-white dark:bg-gray-700"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* MESSAGE */}
                <div className="mb-6">
                  <label className="block mb-2">Message *</label>
                  <textarea
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border dark:border-gray-600 bg-white dark:bg-gray-700"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  className="btn btn-primary w-full"
                  disabled={formStatus.loading}
                >
                  {formStatus.loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
