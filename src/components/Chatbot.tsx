import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Minimize2, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm your AI assistant. I can help you with questions about Mohammed Tharik's portfolio, skills, projects, or general web development topics. How can I assist you today?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Portfolio-specific responses
    if (lowerMessage.includes('tharik') || lowerMessage.includes('mohammed')) {
      return "Mohammed Tharik is a passionate Web Developer with expertise in both frontend and backend technologies. He specializes in creating modern, responsive web applications using HTML, CSS, JavaScript, Bootstrap, ReactJS, Python, and MySQL.";
    }
    
    if (lowerMessage.includes('skill') || lowerMessage.includes('technology') || lowerMessage.includes('tech stack')) {
      return "Mohammed Tharik's tech stack includes:\n\n🎨 Frontend: HTML (90%), CSS (85%), JavaScript (80%), Bootstrap (85%), ReactJS (80%)\n\n⚙️ Backend: Python (85%)\n\n🗄️ Database: MySQL (85%)\n\nHe also works with tools like Git, VS Code, and GitHub for development workflow.";
    }
    
    if (lowerMessage.includes('project') || lowerMessage.includes('work') || lowerMessage.includes('portfolio')) {
      return "You can view Mohammed Tharik's projects in the Projects section of this portfolio. His GitHub profile (Tharik786) contains various repositories showcasing his development skills. Each project demonstrates different aspects of web development from frontend interfaces to backend functionality.";
    }
    
    if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('reach')) {
      return "You can contact Mohammed Tharik through:\n\n📧 Email: tharik.official007@gmail.com\n💼 LinkedIn: Mohammed Tharik\n🐙 GitHub: Tharik786\n\nFeel free to reach out for collaboration opportunities or project discussions!";
    }
    
    if (lowerMessage.includes('experience') || lowerMessage.includes('background')) {
      return "Mohammed Tharik is a dedicated Web Developer with hands-on experience in full-stack development. He focuses on creating user-friendly interfaces and robust backend solutions, with a strong foundation in modern web technologies and best practices.";
    }
    
    // General web development responses
    if (lowerMessage.includes('react') || lowerMessage.includes('reactjs')) {
      return "ReactJS is a powerful JavaScript library for building user interfaces. It's component-based, making it great for creating reusable UI elements. Mohammed Tharik uses React to build dynamic and interactive web applications with modern features like hooks and state management.";
    }
    
    if (lowerMessage.includes('python')) {
      return "Python is a versatile programming language that Mohammed Tharik uses for backend development. It's excellent for web development, data processing, and building APIs. Python's clean syntax and extensive libraries make it perfect for rapid development.";
    }
    
    if (lowerMessage.includes('mysql') || lowerMessage.includes('database')) {
      return "MySQL is a reliable relational database management system. Mohammed Tharik uses it to store and manage application data efficiently. It's great for handling complex queries and ensuring data integrity in web applications.";
    }
    
    if (lowerMessage.includes('web development') || lowerMessage.includes('frontend') || lowerMessage.includes('backend')) {
      return "Web development involves creating websites and web applications. Frontend focuses on user interfaces (HTML, CSS, JavaScript, React), while backend handles server-side logic (Python, databases). Mohammed Tharik works with both to create complete web solutions.";
    }
    
    // Greeting responses
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hello! Welcome to Mohammed Tharik's portfolio. I'm here to help you learn more about his skills, projects, and experience. What would you like to know?";
    }
    
    if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
      return "You're welcome! I'm happy to help. Feel free to ask me anything else about Mohammed Tharik's work or web development in general.";
    }
    
    // Default responses
    const defaultResponses = [
      "That's an interesting question! While I specialize in information about Mohammed Tharik's portfolio and web development, I'd be happy to help you explore his projects and skills. What specific aspect would you like to know more about?",
      "I'm here to help you learn about Mohammed Tharik's web development expertise. You can ask me about his skills, projects, experience, or general web development topics. What interests you most?",
      "Great question! I can provide information about Mohammed Tharik's portfolio, his technical skills, or general web development concepts. How can I assist you today?",
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(inputText),
        isBot: true,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 bg-indigo-600 hover:bg-indigo-700 text-white p-4 rounded-full shadow-lg transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <MessageCircle className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className={`fixed bottom-6 right-6 z-50 bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 ${
              isMinimized ? 'w-80 h-16' : 'w-80 sm:w-96 h-96 sm:h-[500px]'
            } transition-all duration-300`}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-indigo-600 text-white rounded-t-lg">
              <div className="flex items-center space-x-2">
                <Bot className="h-5 w-5" />
                <span className="font-medium">AI Assistant</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="hover:bg-indigo-700 p-1 rounded transition-colors"
                >
                  {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-indigo-700 p-1 rounded transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 h-64 sm:h-80">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                    >
                      <div
                        className={`flex items-start space-x-2 max-w-[80%] ${
                          message.isBot ? 'flex-row' : 'flex-row-reverse space-x-reverse'
                        }`}
                      >
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            message.isBot
                              ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400'
                              : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                          }`}
                        >
                          {message.isBot ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
                        </div>
                        <div
                          className={`px-3 py-2 rounded-lg ${
                            message.isBot
                              ? 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                              : 'bg-indigo-600 text-white'
                          }`}
                        >
                          <p className="text-sm whitespace-pre-line">{message.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="flex items-start space-x-2">
                        <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                          <Bot className="h-4 w-4" />
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-lg">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask me anything..."
                      className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm"
                      disabled={isTyping}
                    />
                    <button
                      onClick={handleSendMessage}
                      disabled={!inputText.trim() || isTyping}
                      className="px-3 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 text-white rounded-lg transition-colors"
                    >
                      <Send className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;