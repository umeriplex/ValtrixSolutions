// src/components/Projects.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
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
    description: 'A full-featured e-commerce platform with product listings, cart functionality, payment processing and custom product design.',
    image: 'https://www.uberprints.com/assets/images/hp/banners/custom-t-shirts-spring-break2-1328x640.webp',
    tags: ['Flutter', 'Node.js', 'MongoDB', 'Stripe'],
    github: '#',
    live: 'https://www.uberprints.com/?srsltid=AfmBOorC3yZJBcRhjNSeT5IB4muNJMsUCcBod7aMkPN3tSQ3DFbLxLtB',
    category: 'web'
  },
  {
    id: 2,
    title: 'Quran Islamic App',
    description: 'An application for reading and learning the Quran with audio recitations and translations.',
    image: 'https://umeriplex.github.io/webpage/images/ai.jpg',
    tags: ['Flutter', 'Firebase', 'Material UI'],
    github: '#',
    live: '#',
    category: 'mobile'
  },
  {
    id: 3,
    title: 'Online Consultation System',
    description: 'A platform for connecting patients with healthcare professionals for virtual consultations.',
    image: 'https://umeriplex.github.io/webpage/images/wc.jpg',
    tags: ['Flutter', 'Firebase', 'Laravel', 'MySQL'],
    github: '#',
    live: '#',
    category: 'mobile'
  },
  {
    id: 4,
    title: 'AI Chatbot',
    description: 'A conversational AI chatbot integrated with natural language processing capabilities.',
    image: 'https://umeriplex.github.io/webpage/images/cb.jpg',
    tags: ['Python', 'TensorFlow', 'NLTK', 'OpenAI', 'Flutter'],
    github: '#',
    live: '#',
    category: 'ai'
  },
  {
    id: 5,
    title: 'Online Book Store',
    description: 'An e-commerce platform for buying and selling books with user reviews and ratings.',
    image: 'https://umeriplex.github.io/webpage/images/bs.jpg',
    tags: ['Flutter', 'Firebase'],
    github: '#',
    live: '#',
    category: 'mobile'
  },
  {
    id: 6,
    title: 'Music Streaming App',
    description: 'A platform for streaming and discovering music with personalized playlists and recommendations.',
    image: 'https://umeriplex.github.io/webpage/images/ap.jpg',
    tags: ['Android', 'Kotlin', 'Firebase'],
    github: '#',
    live: '#',
    category: 'mobile'
  },
  {
    id: 7,
    title: 'Barber Booking Web App',
    description: 'A web application for booking barber appointments and managing schedules.',
    image: 'https://cdn.sanity.io/images/tepqsdgu/production/da025f3ac1abf7f21f13a79d8d9aa5b9a72498ea-960x900.jpg',
    tags: ['React', 'Styled Components', 'Framer Motion'],
    github: '#',
    live: '#',
    category: 'web'
  },
  {
    id: 8,
    title: 'Grocery Delivery App',
    description: 'A web application for ordering groceries online with home delivery.',
    image: 'https://www.deepcovemarket.com/uploads/1/3/8/1/138136616/dsc-4371_orig.jpg',
    tags: ['Flutter', 'Firebase', 'Google Maps', 'Dart', 'Node.js'],
    github: '#',
    live: '#',
    category: 'web'
  },
  {
    id: 9,
    title: 'App Locker',
    description: 'A mobile application for securing personal apps with a password or biometric authentication.',
    image: 'https://umeriplex.github.io/webpage/images/al.jpg',
    tags: ['Android', 'Java', 'SQLite', 'Room Database'],
    github: '#',
    live: '#',
    category: 'mobile'
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
    { id: 'ai', name: 'AI/ML' }
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