// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

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
            <SocialLink href="https://github.com/umeriplex" target='_blank' aria-label="GitHub"><FaGithub /></SocialLink>
            <SocialLink href="https://www.linkedin.com/in/umer-iftikhar-a3842122a/" target='_blank' aria-label="LinkedIn"><FaLinkedin /></SocialLink>
            <SocialLink href="https://www.instagram.com/_ummmer/" target='_blank' aria-label="Instagram"><FaInstagram /></SocialLink>
            <SocialLink href="https://web.facebook.com/umeriftikhar2526/" target='_blank' aria-label="Facebook"><FaFacebook /></SocialLink>            
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
            &copy; {new Date().getFullYear()} ValtrixSolutions. All rights reserved.
          </Copyright>
        </FooterContent>
      </div>
    </FooterContainer>
  );
};

export default Footer;