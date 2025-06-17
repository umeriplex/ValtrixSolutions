// src/components/Skills.js
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

const SkillsContainer = styled.section`
  background: ${({ theme }) => theme.background};
  position: relative;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

const SkillCard = styled(motion.div)`
  background: ${({ theme }) => theme.cardBg};
  border-radius: 10px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: ${({ theme }) => theme.cardShadow};
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px -10px rgba(0,0,0,0.2);
  }
`;

const SkillIcon = styled.div`
  width: 60px;
  height: 60px;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

const SkillName = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.primary};
`;

const SkillLevel = styled.div`
  width: 100%;
  height: 8px;
  background: ${({ theme }) => theme.cardBg};
  border-radius: 4px;
  margin-top: 0.5rem;
  overflow: hidden;
`;

const SkillLevelBar = styled.div`
  height: 100%;
  background: ${({ theme }) => theme.gradient};
  border-radius: 4px;
  width: ${({ level }) => level}%;
`;

const skills = [
  { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', level: 85 },
  { name: 'Android', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg', level: 80 },
  { name: 'iOS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg', level: 75 },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', level: 80 },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', level: 85 },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', level: 75 },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', level: 85 },
  { name: 'AI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', level: 70 },
];

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <SkillsContainer id="skills" ref={ref}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Technical Skills
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <SkillsGrid>
            {skills.map((skill, index) => (
              <SkillCard
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <SkillIcon>
                  <img src={skill.icon} alt={skill.name} />
                </SkillIcon>
                <SkillName>{skill.name}</SkillName>
                <SkillLevel>
                  <SkillLevelBar level={skill.level} />
                </SkillLevel>
              </SkillCard>
            ))}
          </SkillsGrid>
        </motion.div>
      </div>
    </SkillsContainer>
  );
};

export default Skills;