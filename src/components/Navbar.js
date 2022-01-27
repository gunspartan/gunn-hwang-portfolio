import React from "react";
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
          <a href='#Home'>
            <FaHome />
            Home
          </a>
        </li>
        <li>
          <a href='#'>
            <FaInfoCircle />
            About Me
          </a>
        </li>
        <li>
          <a href='#'>
            <FaCode />
            Projects
          </a>
        </li>
        <li>
          <a href='#'>
            <FaEnvelope />
            Contact Me
          </a>
        </li>
      </ul>
    </StyledNav>
  );
}
