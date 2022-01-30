import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { StyledLogo } from "./styles/Logo.styled";

export default function Logo() {
  return (
    <StyledLogo>
      <div>
        <StaticImage src='../images/logos/logo-full-primary-white.png' alt='Logo' />
      </div>
    </StyledLogo>
  );
}
