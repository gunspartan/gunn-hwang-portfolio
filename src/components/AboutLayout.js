import React from "react";
import SectionHeader from "./SectionHeader";
import ProfileImg from "./ProfileImg";
import { Container } from "./styles/Container.styled";
import { StyledAbout, AboutMain, AboutName, AboutHeadline } from "./styles/AboutLayout.styled";

export default function AboutLayout() {
  return (
    <Container direction='column'>
      <SectionHeader title='About Me' icon='about' />
      <StyledAbout>
        <AboutMain>
          <div>
            <ProfileImg />
            <AboutName>Gunn Hwang</AboutName>
          </div>
          <AboutHeadline>
            <h1>Self-taught developer</h1>
            <h1>Computer Science student at</h1>
            <h1>Kwantlen Polytechnic University</h1>
          </AboutHeadline>
        </AboutMain>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nihil voluptatum aspernatur impedit nemo
          nulla, ipsam ut at iusto explicabo?
        </p>
      </StyledAbout>
    </Container>
  );
}
