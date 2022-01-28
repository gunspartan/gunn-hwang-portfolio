import React from "react";
import SectionHeader from "./SectionHeader";
import ProjectShowcase from "./ProjectShowcase";
import { Container } from "./styles/Container.styled";

export default function ProjectsLayout() {
  return (
    <Container direction='column'>
      <SectionHeader title='Projects' icon='projects' />
      <ProjectShowcase />
    </Container>
  );
}
