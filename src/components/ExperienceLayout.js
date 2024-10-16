import React from 'react';
import SectionHeader from './SectionHeader';
import ExperienceShowcase from './ExperienceShowcase';
import { Container } from './styles/Container.styled';

export default function ExperienceLayout() {
  return (
    <Container direction='column' id='experience'>
      <SectionHeader title='Experience' icon='experience' />
      <ExperienceShowcase />
    </Container>
  );
}
