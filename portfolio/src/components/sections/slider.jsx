import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import './slider.css';

const Slider = () => {
  const skills = [
    { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
    { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
    { name: 'React', icon: <FaReact />, color: '#61DAFB' }, 
    { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
    { name: 'Tailwind', icon: <SiTailwindcss />, color: '#38B2AC' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="skills" className="slider-section py-20 bg-gray-50 mt-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Technical Skills</h2>
        <div className="flex justify-center items-center">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-card"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div 
                  className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  style={{ borderTop: `4px solid ${skill.color}` }}
                >
                  <div className="text-4xl mb-4" style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">{skill.name}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Slider;