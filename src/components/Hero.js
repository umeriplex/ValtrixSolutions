// src/components/Hero.js
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaFacebook, FaArrowDown, FaInstagram } from 'react-icons/fa';
const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 80px;
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    text-align: center;
  }
`;

const HeroText = styled.div`
  flex: 1;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  color: ${({ theme }) => theme.primary};

  span {
    color: ${({ theme }) => theme.accent};
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.text};
  opacity: 0.9;
`;

const HeroButtons = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const Button = styled.a`
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  font-weight: 500;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const PrimaryButton = styled(Button)`
  background: ${({ theme }) => theme.primary};
  color: white;

  &:hover {
    background: ${({ theme }) => theme.secondary};
    transform: translateY(-3px);
  }
`;

const SecondaryButton = styled(Button)`
  border: 2px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: white;
    transform: translateY(-3px);
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: translateY(-3px);
  }
`;

const ScrollDown = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  span {
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
  }
`;

const Hero = () => {
  return (
    <HeroContainer id="home">
      <div className="container">
        <HeroContent>
          <HeroText>
            <HeroTitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Hi, I'm <span>Umer Iftikhar</span>
            </HeroTitle>
            <HeroTitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Full Stack Developer
            </HeroTitle>
            <HeroSubtitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              I build exceptional digital experiences that are fast, accessible, and visually appealing.
            </HeroSubtitle>
            <HeroButtons
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <PrimaryButton href="#contact">Get In Touch</PrimaryButton>
              <SecondaryButton href="#projects">View My Work</SecondaryButton>
            </HeroButtons>
            <SocialLinks
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <SocialLink href="https://github.com/umeriplex" target='_blank' aria-label="GitHub"><FaGithub /></SocialLink>
              <SocialLink href="https://www.linkedin.com/in/umer-iftikhar-a3842122a/" target='_blank' aria-label="LinkedIn"><FaLinkedin /></SocialLink>
              <SocialLink href="https://www.instagram.com/_ummmer/" target='_blank' aria-label="Instagram"><FaInstagram /></SocialLink>
              <SocialLink href="https://web.facebook.com/umeriftikhar2526/" target='_blank' aria-label="Facebook"><FaFacebook /></SocialLink>

            </SocialLinks>
          </HeroText>
        </HeroContent>
        <ScrollDown
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
        >
          <span>Scroll Down</span>
          <FaArrowDown />
        </ScrollDown>
      </div>
    </HeroContainer>
  );
};

export default Hero;