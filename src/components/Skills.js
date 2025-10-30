import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import '../css/Skills.css';
import { Icon } from '@iconify/react';

const Skills = ({ sharedSkills }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const skills = sharedSkills?.map((skill, i) => (
    <motion.li 
      className="skill-item" 
      key={i}
      variants={itemVariants}
    >
      <div className="skill-icon">
        <Icon 
          icon={skill.class}  
          style={{ fontSize: "3rem" }} 
          color={skill.color}
        />
      </div>
      <div className="skill-name">
        {skill.name}
      </div>
    </motion.li>
  ));

  return (
    <motion.section 
      className="skills"
      id="skills"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="container">
        <motion.h1 
          className="skills-title"
          variants={itemVariants}
        >
          Technical Skills
        </motion.h1>

        <motion.div 
          className="skills-grid"
          variants={containerVariants}
        >
          {skills}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;