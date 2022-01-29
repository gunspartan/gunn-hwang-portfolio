import React from "react";
import { Link } from "gatsby";
import { FaHome, FaInfoCircle, FaCode, FaEnvelope } from "react-icons/fa";
import ProfileImg from "./ProfileImg";
import { Flex } from "./styles/Flex.styled";
import { StyledNav } from "./styles/Navbar.styled";

export default function Navbar() {
  return (
    <StyledNav>
      <Flex direction='column'>
        <ProfileImg />
        <h2>Gunn Hwang</h2>
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
          <Link to='#projects'>
            <FaCode />
            Projects
          </Link>
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
