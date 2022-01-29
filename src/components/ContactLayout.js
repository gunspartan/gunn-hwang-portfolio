import React from "react";
import SectionHeader from "./SectionHeader";
import { Container } from "./styles/Container.styled";
import { ContactLink } from "./styles/ContactLayout.styled";
import { MdAlternateEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactLayout() {
  return (
    <Container direction='column' id='contact'>
      <SectionHeader title='Contact Me' icon='contact' />
      <div>
        <ContactLink>
          <a href='mailto:gunhwang99@gmail.com'>
            <MdAlternateEmail />
            gunhwang99@gmail.com
          </a>
        </ContactLink>
        <ContactLink>
          <a href='https://github.com/gunspartan'>
            <FaGithub />
            github.com/gunspartan
          </a>
        </ContactLink>
        <ContactLink>
          <a href='https://linkedin.com/in/gunn-hwang-141b05186'>
            <FaLinkedin />
            linkedin.com/in/gunn-hwang-141b05186
          </a>
        </ContactLink>
      </div>
    </Container>
  );
}
