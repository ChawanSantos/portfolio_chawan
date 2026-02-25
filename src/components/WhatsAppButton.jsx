// WhatsAppButton.jsx
import React from 'react';
import styled from 'styled-components';
import { FaWhatsapp } from 'react-icons/fa';

const Button = styled.a`
  position: fixed;
  bottom: 16px;
  right: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #25D366;
  color: white;
  padding: 8px 12px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 13px;
  text-decoration: none;
  z-index: 9999;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);

  svg {
    margin-right: 8px;
  }
`;

const WhatsAppButton = () => {
  const phoneNumber = '27997142099'; // Substitua com seu número
  const message = 'Olá Chawan, vi seu portfólio e gostaria de conversar!';
  const link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Button href={link} target="_blank" rel="noopener noreferrer">
      <FaWhatsapp size={20} />
      WhatsApp
    </Button>
  );
};

export default WhatsAppButton;
