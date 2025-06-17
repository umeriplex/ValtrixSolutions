// src/components/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', sans-serif;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.3s ease;
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.primary};
    transition: all 0.3s ease;
  }

  a:hover {
    color: ${({ theme }) => theme.accent};
  }

  section {
    padding: 6rem 0;
    position: relative;
  }

  .container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
  }

  .section-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 3rem;
    text-align: center;
    position: relative;
    color: ${({ theme }) => theme.primary};
  }

  .section-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: ${({ theme }) => theme.gradient};
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    section {
      padding: 4rem 0;
    }

    .section-title {
      font-size: 2rem;
    }
  }
`;

export default GlobalStyles;