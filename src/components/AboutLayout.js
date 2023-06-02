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
            <h1>Computer Science student at</h1>
            <h1>Kwantlen Polytechnic University</h1>
          </AboutHeadline>
        </AboutMain>
        <AboutDescription>
          <div>
            <p>👋</p>
            <p>Hey there, I'm Gunn.</p>
          </div>
          <div>
            <p>🎓</p>
            <p>
              I'm on the verge of earning my Bachelor's degree in Information Technology, brimming
              with passion and excitement.
            </p>
          </div>
          <div>
            <p>💻</p>
            <p>
              Currently, I'm honing my skills as a front-end developer intern{' '}
              <span>
                <Link to='https://www.blaisetransit.com'> @ Blaise Transit</Link>
              </span>
              , where I get to immerse myself in the dynamic world of web development.
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
