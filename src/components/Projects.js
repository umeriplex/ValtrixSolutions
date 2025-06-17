// src/components/Projects.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';

const ProjectsContainer = styled.section`
  background: ${({ theme }) => theme.body};
  position: relative;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: ${({ theme }) => theme.cardBg};
  border-radius: 15px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.cardShadow};
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px -15px rgba(0,0,0,0.3);
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  ${ProjectCard}:hover & img {
    transform: scale(1.1);
  }
`;

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.7));
  display: flex;
  align-items: flex-end;
  padding: 1.5rem;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.primary};
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.text};
  opacity: 0.8;
  margin-bottom: 1rem;
`;

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background: ${({ theme }) => theme.primary};
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.primary};
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;

const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  background: ${({ active, theme }) => active ? theme.primary : 'transparent'};
  color: ${({ active, theme }) => active ? 'white' : theme.text};
  border: 2px solid ${({ theme }) => theme.primary};
  padding: 0.5rem 1.5rem;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;

  &:hover {
    background: ${({ active, theme }) => !active && theme.cardBg};
  }
`;

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with product listings, cart functionality, and payment processing.',
    image: 'https://via.placeholder.com/600x400?text=E-commerce',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: '#',
    live: '#',
    category: 'web'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A productivity application for managing tasks with drag-and-drop functionality and team collaboration.',
    image: 'https://via.placeholder.com/600x400?text=Task+App',
    tags: ['React', 'Firebase', 'Material UI'],
    github: '#',
    live: '#',
    category: 'web'
  },
  {
    id: 3,
    title: 'Fitness Tracker Mobile App',
    description: 'Mobile application for tracking workouts, nutrition, and fitness progress with data visualization.',
    image: 'https://via.placeholder.com/600x400?text=Fitness+App',
    tags: ['React Native', 'Firebase', 'Redux'],
    github: '#',
    live: '#',
    category: 'mobile'
  },
  {
    id: 4,
    title: 'AI Chatbot',
    description: 'A conversational AI chatbot integrated with natural language processing capabilities.',
    image: 'https://via.placeholder.com/600x400?text=AI+Chatbot',
    tags: ['Python', 'TensorFlow', 'NLTK'],
    github: '#',
    live: '#',
    category: 'ai'
  },
  {
    id: 5,
    title: 'Weather Dashboard',
    description: 'Real-time weather information dashboard with interactive maps and forecasting.',
    image: 'https://via.placeholder.com/600x400?text=Weather+App',
    tags: ['JavaScript', 'API', 'Chart.js'],
    github: '#',
    live: '#',
    category: 'web'
  },
  {
    id: 6,
    title: 'Blockchain Explorer',
    description: 'A tool for exploring blockchain transactions and wallet balances with real-time updates.',
    image: 'https://via.placeholder.com/600x400?text=Blockchain',
    tags: ['React', 'Web3.js', 'Ethereum'],
    github: '#',
    live: '#',
    category: 'blockchain'
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'ai', name: 'AI/ML' },
    { id: 'blockchain', name: 'Blockchain' }
  ];

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
    <ProjectsContainer id="projects" ref={ref}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <FilterButtons>
            {categories.map(category => (
              <FilterButton
                key={category.id}
                onClick={() => setFilter(category.id)}
                active={filter === category.id}
              >
                {category.name}
              </FilterButton>
            ))}
          </FilterButtons>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <ProjectsGrid>
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
              >
                <ProjectImage>
                  <img src={project.image} alt={project.title} />
                  <ProjectOverlay>
                    <ProjectTitle>{project.title}</ProjectTitle>
                  </ProjectOverlay>
                </ProjectImage>
                <ProjectContent>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <ProjectTech>
                    {project.tags.map((tag, i) => (
                      <TechTag key={i}>{tag}</TechTag>
                    ))}
                  </ProjectTech>
                  <ProjectLinks>
                    <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                      <FiGithub /> Code
                    </ProjectLink>
                    <ProjectLink href={project.live} target="_blank" rel="noopener noreferrer">
                      <FiExternalLink /> Live Demo
                    </ProjectLink>
                  </ProjectLinks>
                </ProjectContent>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </motion.div>
      </div>
    </ProjectsContainer>
  );
};

export default Projects;