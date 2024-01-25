"use client";

import { WhatsApp } from '@mui/icons-material';
import Link from 'next/link';
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

interface WhatsAppButtonProps {
  phoneNumber: string;
  buttonText: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber, buttonText }) => {
  const handleWhatsAppClick = () => {
    // Add your WhatsApp URL or logic here
    window.location.href = `https://wa.me/${phoneNumber}`;
  };

  return (
    <Link href={`https://wa.me/${phoneNumber}`} target="blank"
      className="text-blue-800"
    >
      <WhatsApp />
      <span>{buttonText}</span>
    </Link>
  );
};

export default WhatsAppButton;
