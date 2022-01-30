import styled from "styled-components";

export const StyledHero = styled.div`
  position: relative;
  margin-top: 10rem;
  margin-bottom: 20rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40vh;
  width: 100%;

  svg {
    position: absolute;
    z-index: -10;
    right: -40%;
    height: 50rem;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;

    svg {
      left: 80%;
      top: 60%;
      transform: translate(-50%, -50%);
      height: 30rem;
    }
  }
`;

export const Headline = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
