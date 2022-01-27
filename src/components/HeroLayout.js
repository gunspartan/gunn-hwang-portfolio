import React from "react";
import { StyledEmphasis } from "./styles/Emphasis.styled";
import { StyledButton } from "./styles/Button.styled";
import { StyledHero, Headline } from "./styles/HeroLayout.styled";
import Blob1 from "../images/Blob1.svg";

export default function HeroLayout() {
  return (
    <StyledHero id='Home'>
      <Headline>
        <div>
          <h3>Hi,</h3>
          <h1>
            I'm <StyledEmphasis color={({ theme }) => theme.colors.primary}>Gunn</StyledEmphasis>
          </h1>
        </div>
        <div>
          <h1>I deliver</h1>
          <h1>
            <StyledEmphasis color={({ theme }) => theme.colors.primary}>simple</StyledEmphasis> web experiences.
          </h1>
        </div>
      </Headline>
      <StyledButton>
        <p>Let's Talk!</p>
      </StyledButton>
      <Blob1 />
    </StyledHero>
  );
}
