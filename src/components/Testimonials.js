// src/components/Testimonials.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const TestimonialsContainer = styled.section`
  background: ${({ theme }) => theme.body};
  position: relative;
  overflow: hidden;
`;

const TestimonialSlider = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const TestimonialSlide = styled(motion.div)`
  background: ${({ theme }) => theme.cardBg};
  border-radius: 15px;
  padding: 2.5rem;
  box-shadow: ${({ theme }) => theme.cardShadow};
  text-align: center;
  margin: 0 auto;
  max-width: 700px;
  position: relative;
`;

const QuoteIcon = styled.div`
  font-size: 3rem;
  color: ${({ theme }) => theme.primary};
  opacity: 0.2;
  position: absolute;
  top: 20px;
  left: 20px;
`;

const TestimonialText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.text};
  position: relative;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AuthorImage = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 1rem;
  border: 3px solid ${({ theme }) => theme.primary};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AuthorName = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 0.3rem;
  color: ${({ theme }) => theme.primary};
`;

const AuthorRole = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text};
  opacity: 0.7;
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.accent};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const PrevButton = styled(NavButton)`
  left: 0;
`;

const NextButton = styled(NavButton)`
  right: 0;
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  gap: 0.5rem;
`;

const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({ active, theme }) => active ? theme.primary : theme.text};
  opacity: ${({ active }) => active ? 1 : 0.3};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const testimonials = [
  {
    id: 1,
    text: "Working with John was an absolute pleasure. His attention to detail and problem-solving skills helped us deliver our project ahead of schedule. The code quality was exceptional and well-documented.",
    author: "Sarah Johnson",
    role: "CEO at TechSolutions Inc.",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 2,
    text: "John transformed our outdated website into a modern, responsive platform that has significantly increased our conversion rates. His technical expertise and communication throughout the project were outstanding.",
    author: "Michael Chen",
    role: "Marketing Director at Global Corp",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    text: "The mobile application John developed for our startup exceeded all our expectations. He not only delivered a beautiful UI but also optimized the performance to handle our growing user base seamlessly.",
    author: "Emma Rodriguez",
    role: "Founder of StartupX",
    image: "https://randomuser.me/api/portraits/women/63.jpg"
  }
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const slideVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 }
  };

  return (
    <TestimonialsContainer id="testimonials" ref={ref}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Client Testimonials
        </motion.h2>
        
        <TestimonialSlider>
          <PrevButton onClick={prevSlide} disabled={currentSlide === 0}>
            <FaChevronLeft />
          </PrevButton>
          
          <motion.div
            key={currentSlide}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={slideVariants}
            transition={{ duration: 0.5 }}
          >
            <TestimonialSlide>
              <QuoteIcon>
                <FaQuoteLeft />
              </QuoteIcon>
              <TestimonialText>{testimonials[currentSlide].text}</TestimonialText>
              <TestimonialAuthor>
                <AuthorImage>
                  <img src={testimonials[currentSlide].image} alt={testimonials[currentSlide].author} />
                </AuthorImage>
                <AuthorName>{testimonials[currentSlide].author}</AuthorName>
                <AuthorRole>{testimonials[currentSlide].role}</AuthorRole>
              </TestimonialAuthor>
            </TestimonialSlide>
          </motion.div>
          
          <NextButton onClick={nextSlide} disabled={currentSlide === testimonials.length - 1}>
            <FaChevronRight />
          </NextButton>
          
          <Dots>
            {testimonials.map((_, index) => (
              <Dot
                key={index}
                active={index === currentSlide}
                onClick={() => goToSlide(index)}
              />
            ))}
          </Dots>
        </TestimonialSlider>
      </div>
    </TestimonialsContainer>
  );
};

export default Testimonials;