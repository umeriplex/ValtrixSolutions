// src/components/Header.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: ${({ theme }) => theme.navBg};
  backdrop-filter: blur(10px);
  box-shadow: ${({ theme }) => theme.navShadow};
  transition: all 0.3s ease;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
`;

const Logo = styled.a`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 80%;
    height: 100vh;
    background: ${({ theme }) => theme.background};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
    z-index: 1001;
  }
`;

const NavLink = styled.a`
  margin: 0 1rem;
  font-weight: 500;
  position: relative;
  color: ${({ theme }) => theme.text};

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.primary};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    margin: 1rem 0;
    font-size: 1.2rem;
  }
`;

const ThemeToggle = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.2rem;
  cursor: pointer;
  margin-left: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MobileMenuButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  cursor: pointer;
  display: none;
  z-index: 1002;

  @media (max-width: 768px) {
    display: block;
  }
`;

const CloseButton = styled(FaTimes)`
  position: absolute;
  top: 2rem;
  right: 2rem;
  font-size: 1.5rem;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = ({ toggleTheme, theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <HeaderContainer style={{ height: scrolled ? '70px' : '90px' }}>
      <div className="container">
        <Nav>
          <Logo href="#">
            <motion.span 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              DevSolutions
            </motion.span>
          </Logo>

          <MobileMenuButton onClick={toggleMenu}>
            <FaBars />
          </MobileMenuButton>

          <NavLinks isOpen={isOpen}>
            <CloseButton onClick={closeMenu} />
            <NavLink href="#home" onClick={closeMenu}>Home</NavLink>
            <NavLink href="#services" onClick={closeMenu}>Services</NavLink>
            <NavLink href="#projects" onClick={closeMenu}>Projects</NavLink>
            <NavLink href="#skills" onClick={closeMenu}>Skills</NavLink>
            <NavLink href="#testimonials" onClick={closeMenu}>Testimonials</NavLink>
            <NavLink href="#contact" onClick={closeMenu}>Contact</NavLink>
            <ThemeToggle onClick={toggleTheme}>
              {theme === 'light' ? <FaMoon /> : <FaSun />}
            </ThemeToggle>
          </NavLinks>
        </Nav>
      </div>
    </HeaderContainer>
  );
};

export default Header;