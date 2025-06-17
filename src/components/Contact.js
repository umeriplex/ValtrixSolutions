// src/components/Contact.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const ContactContainer = styled.section`
  background: ${({ theme }) => theme.background};
  position: relative;
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
`;

const InfoIcon = styled.div`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.primary};
  margin-top: 0.3rem;
`;

const InfoContent = styled.div`
  flex: 1;
`;

const InfoTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.primary};
`;

const InfoText = styled.p`
  color: ${({ theme }) => theme.text};
  opacity: 0.8;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FormLabel = styled.label`
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const FormInput = styled.input`
  padding: 0.8rem 1rem;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.text};
  font-family: inherit;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 2px rgba(58, 134, 255, 0.2);
  }
`;

const FormTextarea = styled.textarea`
  padding: 0.8rem 1rem;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.text};
  font-family: inherit;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 2px rgba(58, 134, 255, 0.2);
  }
`;

const SubmitButton = styled.button`
  background: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 5px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  margin-top: 1rem;

  &:hover {
    background: ${({ theme }) => theme.secondary};
    transform: translateY(-3px);
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    }, 1500);
  };

  return (
    <ContactContainer id="contact" ref={ref}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ContactContent>
            <ContactInfo>
              <InfoItem>
                <InfoIcon>
                  <FaMapMarkerAlt />
                </InfoIcon>
                <InfoContent>
                  <InfoTitle>Location</InfoTitle>
                  <InfoText>San Francisco, CA</InfoText>
                </InfoContent>
              </InfoItem>
              
              <InfoItem>
                <InfoIcon>
                  <FaPhone />
                </InfoIcon>
                <InfoContent>
                  <InfoTitle>Phone</InfoTitle>
                  <InfoText>+1 (555) 123-4567</InfoText>
                </InfoContent>
              </InfoItem>
              
              <InfoItem>
                <InfoIcon>
                  <FaEnvelope />
                </InfoIcon>
                <InfoContent>
                  <InfoTitle>Email</InfoTitle>
                  <InfoText>contact@devsolutions.com</InfoText>
                </InfoContent>
              </InfoItem>
            </ContactInfo>
            
            <ContactForm onSubmit={handleSubmit}>
              <FormGroup>
                <FormLabel htmlFor="name">Your Name</FormLabel>
                <FormInput
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="email">Your Email</FormLabel>
                <FormInput
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="subject">Subject</FormLabel>
                <FormInput
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="message">Your Message</FormLabel>
                <FormTextarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              
              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </SubmitButton>
              
              {submitStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ color: '#4BB543', textAlign: 'center', marginTop: '1rem' }}
                >
                  Thank you! Your message has been sent successfully.
                </motion.p>
              )}
            </ContactForm>
          </ContactContent>
        </motion.div>
      </div>
    </ContactContainer>
  );
};

export default Contact;