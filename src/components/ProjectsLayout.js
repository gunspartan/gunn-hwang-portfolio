import React from "react";
import SectionHeader from "./SectionHeader";
import ProjectShowcase from "./ProjectShowcase";
import { Container } from "./styles/Container.styled";
import { StyledLink } from "./styles/ProjectShowcase.styled";
import { FaGithub } from "react-icons/fa";

export default function ProjectsLayout() {
  return (
    <Container direction='column'>
      <SectionHeader title='Projects' icon='projects' />
      <ProjectShowcase />
      <div>
        <StyledLink to='https://github.com/gunspartan'>
          <FaGithub />
          <h3>Click here for more projects</h3>
        </StyledLink>
      </div>
    </Container>
  );
}
