import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { FaHome, FaInfoCircle, FaCode, FaEnvelope, FaFilePdf, FaBriefcase } from 'react-icons/fa';
import Logo from './Logo';
import { Flex } from './styles/Flex.styled';
import { StyledNav } from './styles/Navbar.styled';

export default function Navbar() {
  // Query Resume PDF
  const { allFile } = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "pdf" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `);

  return (
    <StyledNav>
      <Flex direction='column'>
        <Link to='#home'>
          <Logo />
        </Link>
      </Flex>
      <ul>
        <li>
          <Link to='#home'>
            <FaHome />
            Home
          </Link>
        </li>
        <li>
          <Link to='#about-me'>
            <FaInfoCircle />
            About Me
          </Link>
        </li>
        <li>
          <Link to='#experience'>
            <FaBriefcase />
            Experience
          </Link>
        </li>
        <li>
          <Link to='#projects'>
            <FaCode />
            Projects
          </Link>
        </li>
        <li>
          <a href={allFile.edges[0].node.publicURL}>
            <FaFilePdf />
            Resume
          </a>
        </li>
        <li>
          <Link to='#contact'>
            <FaEnvelope />
            Contact Me
          </Link>
        </li>
      </ul>
    </StyledNav>
  );
}
