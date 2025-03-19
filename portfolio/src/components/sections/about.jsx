import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaLinkedin, FaGithub } from 'react-icons/fa';

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const handleDownload = () => {
    // Get the file URL
    const fileUrl = '/resume/newresume.pdf';
    
    // Create a link element
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'newresume.pdf'; // Suggested name for download
    
    // Append to document, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <motion.div
            {...fadeIn}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="aspect-w-4 aspect-h-5">
                <img
                  src="/images/profile.jpg"
                  alt="Profile"
                  className="rounded-2xl object-cover shadow-xl"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-100 rounded-full -z-10"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-yellow-100 rounded-full -z-10"></div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            {...fadeIn}
            className="space-y-6"
          >
            <div className="space-y-2">
              <h2 className="text-4xl font-bold text-gray-800">About Me</h2>
              <div className="mx-auto w-20 h-1 bg-blue-600"></div>
            </div>

            <p className="text-lg text-gray-600">
              Hi there! I'm a passionate Frontend Developer with 9+ years of experience in creating beautiful ui interface. I specialize in HTML, CSS, JavaScript, OpenCart, and responsive design and Basic Knowledge of React, JavaScript, and modern web technologies.
            </p>

            <p className="text-lg text-gray-600">
              My journey in web development started with a curiosity for creating interactive user experiences. Today, I focus on building responsive, accessible, and performant web applications that solve real-world problems.
            </p>

            {/* Quick Facts */}
            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="space-y-1">
                <h4 className="font-semibold text-gray-800">Location</h4>
                <p className="text-gray-600">Ludhiana, Punjab, India</p>
              </div>
              <div className="space-y-1">
                <h4 className="font-semibold text-gray-800">Experience</h4>
                <p className="text-gray-600">9+ Years</p>
              </div>
              <div className="space-y-1">
                <h4 className="font-semibold text-gray-800">Education</h4>
                <p className="text-gray-600">MCA</p>
              </div>
              <div className="space-y-1">
                <h4 className="font-semibold text-gray-800">Languages</h4>
                <p className="text-gray-600">English, Punjabi, Hindi</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center">
              <a
                href="https://linkedin.com/in/baljinder-kaur-0811101a5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com/Gurnaaz25"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <FaGithub size={24} />
              </a>
            </div>

            {/* Resume Button */}
            <motion.button
              onClick={handleDownload}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mx-auto"
            >
              <FaDownload />
              Download Resume
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;