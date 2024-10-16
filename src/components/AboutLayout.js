import React from 'react';
import SectionHeader from './SectionHeader';
import ProfileImg from './ProfileImg';
import { Container } from './styles/Container.styled';
import {
  StyledAbout,
  AboutMain,
  AboutName,
  AboutHeadline,
  AboutDescription,
} from './styles/AboutLayout.styled';

export default function AboutLayout() {
  return (
    <Container direction='column' id='about-me'>
      <SectionHeader title='About Me' icon='about' />
      <StyledAbout>
        <AboutMain>
          <div>
            <ProfileImg />
            <AboutName>
              <span>Gunn </span>
              Hwang
            </AboutName>
          </div>
          <AboutHeadline>
            <h1>Computer Science graduate at</h1>
            <h1>Kwantlen Polytechnic University</h1>
          </AboutHeadline>
        </AboutMain>
        <AboutDescription>
          <div>
            <p>👋</p>
            <p>Hi! I’m Gunn Hwang</p>
          </div>
          <div>
            <p>💻</p>
            <p>
              I'm a dedicated software engineer with over a year of experience in front-end and
              full-stack development. I specialize in building intuitive, responsive, and scalable
              web applications using JavaScript, React, and TypeScript. My passion for clean code,
              attention to detail, and problem-solving have driven me to continually grow and
              deliver impactful solutions.
            </p>
          </div>
          <div>
            <p>🌟</p>
            <p>
              My mission is to bring ideas to life by merging creativity and technical expertise,
              aiming to make a positive difference through exceptional web experiences.
            </p>
          </div>
          <div>
            <p>
              Let's build something amazing together! Feel free to reach out—I'd love to connect and
              discuss exciting opportunities.
            </p>
          </div>
        </AboutDescription>
      </StyledAbout>
    </Container>
  );
}
