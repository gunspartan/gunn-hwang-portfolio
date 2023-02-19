import React from 'react';
import { Link } from 'gatsby';
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
            <h1>Front End Developer Intern</h1>
            <h1>
              <Link to='https://www.blaisetransit.com'> @Blaise Transit</Link>
            </h1>
            <h1>Computer Science student at</h1>
            <h1>Kwantlen Polytechnic University</h1>
          </AboutHeadline>
        </AboutMain>
        <AboutDescription>
          <div>
            <p>👋</p>
            <p>Hi, my name is Gunn.</p>
          </div>
          <div>
            <p>🎓</p>
            <p>Soon to be grad with a Bachelor's of Technology in Information Technology.</p>
          </div>
          <div>
            <p>💻</p>
            <p>I hope to one day work as Software Developer role and work with a diverse team.</p>
          </div>
        </AboutDescription>
      </StyledAbout>
    </Container>
  );
}
