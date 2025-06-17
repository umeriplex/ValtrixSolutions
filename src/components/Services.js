// src/components/Services.js
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaCode, FaMobile, FaServer, FaChartLine, FaCloud, FaShieldAlt } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const ServicesContainer = styled.section`
  background: ${({ theme }) => theme.background};
  position: relative;
  overflow: hidden;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ServiceCard = styled(motion.div)`
  background: ${({ theme }) => theme.cardBg};
  border-radius: 15px;
  padding: 2rem;
  box-shadow: ${({ theme }) => theme.cardShadow};
  transition: all 0.3s ease;
  text-align: center;
  border-bottom: 4px solid ${({ theme }) => theme.primary};

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px -15px rgba(0,0,0,0.3);
  }
`;

const ServiceIcon = styled.div`
  font-size: 3rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1.5rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.primary};
`;

const ServiceDescription = styled.p`
  color: ${({ theme }) => theme.text};
  opacity: 0.8;
`;

const services = [
  {
    icon: <FaCode />,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies like React, Next.js, and Node.js.'
  },
  {
    icon: <FaMobile />,
    title: 'Mobile Development',
    description: 'Cross-platform mobile apps for iOS and Android using React Native and Flutter.'
  },
  {
    icon: <FaServer />,
    title: 'Backend Development',
    description: 'Scalable backend solutions with Node.js, Python, Django, and database management.'
  },
  {
    icon: <FaChartLine />,
    title: 'Data Analytics',
    description: 'Data visualization and analytics solutions to help you make informed business decisions.'
  },
  {
    icon: <FaCloud />,
    title: 'Cloud Solutions',
    description: 'Cloud architecture, deployment, and management on AWS, Azure, and Google Cloud.'
  },
  {
    icon: <FaShieldAlt />,
    title: 'Cyber Security',
    description: 'Security audits, penetration testing, and secure development practices.'
  }
];

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <ServicesContainer id="services" ref={ref}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          My Services
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <ServicesGrid>
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                variants={itemVariants}
              >
                <ServiceIcon>{service.icon}</ServiceIcon>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </motion.div>
      </div>
    </ServicesContainer>
  );
};

export default Services;