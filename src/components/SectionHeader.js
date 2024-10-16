import React from 'react';
import { StyledHeader, SectionTitle } from './styles/SectionHeader.styled';
import { FaInfoCircle, FaCode, FaEnvelope, FaBriefcase } from 'react-icons/fa';

export default function SectionHeader({ title, icon }) {
  const renderIcon = (icon) => {
    switch (icon) {
      case 'about':
        return <FaInfoCircle />;
      case 'experience':
        return <FaBriefcase />;
      case 'projects':
        return <FaCode />;
      case 'contact':
        return <FaEnvelope />;
      default:
        break;
    }
  };

  return (
    <StyledHeader>
      <SectionTitle>
        <span>{renderIcon(icon) || ''}</span>
        <h1>{title || ''}</h1>
      </SectionTitle>
      <hr />
    </StyledHeader>
  );
}
