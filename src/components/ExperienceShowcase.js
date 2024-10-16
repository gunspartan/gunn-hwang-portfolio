import React from 'react';
import { Link } from 'gatsby';
import {
  ExperienceItem,
  ExperienceInfo,
  StyledDescription,
} from './styles/ExperienceShowcase.styled';

const ExperienceShowcase = () => {
  return (
    <ExperienceItem>
      <ExperienceInfo>
        <h1>
          Front-End Developer Intern @{' '}
          <Link to='https://www.blaisetransit.com'>Blaise Transit</Link>
        </h1>
        <p>Jan 2023 - Dec 2023</p>
        <StyledDescription>
          Developed a key color customization feature, led the conversion of a codebase to
          TypeScript, and resolved over 200 bugs to boost system performance.
        </StyledDescription>
      </ExperienceInfo>
      <ExperienceInfo>
        <h1>
          Full Stack Developer @{' '}
          <Link to='https://www.facebook.com/ArtisanResidential/'>
            Artisan Residential Services
          </Link>
        </h1>
        <p>Feb 2021 - May 2021</p>
        <StyledDescription>
          Improved website accessibility by 20% through modern UI/UX design, and enhanced content
          management efficiency by 70% by implementing REST APIs.
        </StyledDescription>
      </ExperienceInfo>
    </ExperienceItem>
  );
};

export default ExperienceShowcase;
