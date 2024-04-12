import React from 'react';
import whatsapp_logo from './assets/image/whatsapp_logo.png'
import './assets/css/academy.css'

const WhatsAppButton = () => {
  const whatsappLink = "https://wa.me/+919363754315/"; 

  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
      <img src={whatsapp_logo} alt="WhatsApp Logo" className="whatsapp-logo" />
    </a>
  );
};

export default WhatsAppButton;
