import React from "react";
import { StyledEmphasis } from "./styles/Emphasis.styled";
import { StyledButton } from "./styles/Button.styled";
import { StyledHero, Headline } from "./styles/HeroLayout.styled";
import { Container } from "../components/styles/Container.styled";
import Blob1 from "../images/Blob1.svg";

export default function HeroLayout() {
  return (
    <Container id='home'>
      <StyledHero>
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
        <StyledButton href='#contact'>Let's Talk!</StyledButton>
        <Blob1 />
      </StyledHero>
    </Container>
  );
}
