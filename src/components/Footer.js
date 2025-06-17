// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.background};
  padding: 3rem 0;
  text-align: center;
  border-top: 1px solid rgba(0,0,0,0.1);
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
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

const Copyright = styled.p`
  color: ${({ theme }) => theme.text};
  opacity: 0.7;
  font-size: 0.9rem;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const FooterLink = styled.a`
  color: ${({ theme }) => theme.text};
  opacity: 0.8;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
    opacity: 1;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div className="container">
        <FooterContent>
          <SocialLinks>
            <SocialLink href="#" aria-label="GitHub"><FaGithub /></SocialLink>
            <SocialLink href="#" aria-label="LinkedIn"><FaLinkedin /></SocialLink>
            <SocialLink href="#" aria-label="Twitter"><FaTwitter /></SocialLink>
            <SocialLink href="#" aria-label="Instagram"><FaInstagram /></SocialLink>
          </SocialLinks>
          
          <FooterLinks>
            <FooterLink href="#home">Home</FooterLink>
            <FooterLink href="#services">Services</FooterLink>
            <FooterLink href="#projects">Projects</FooterLink>
            <FooterLink href="#skills">Skills</FooterLink>
            <FooterLink href="#testimonials">Testimonials</FooterLink>
            <FooterLink href="#contact">Contact</FooterLink>
          </FooterLinks>
          
          <Copyright>
            &copy; {new Date().getFullYear()} DevSolutions. All rights reserved.
          </Copyright>
        </FooterContent>
      </div>
    </FooterContainer>
  );
};

export default Footer;