import React from "react";
import { Link } from "gatsby";
import { FaHome, FaInfoCircle, FaCode, FaEnvelope } from "react-icons/fa";
import Logo from "./Logo";
import { Flex } from "./styles/Flex.styled";
import { StyledNav } from "./styles/Navbar.styled";

export default function Navbar() {
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
