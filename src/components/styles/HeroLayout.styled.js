import styled from "styled-components";

export const StyledHero = styled.div`
  margin-top: 10rem;
  height: 40vh;
  margin-left: ${({ theme }) => theme.sidebarWidth};
  width: 70%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  button {
    align-self: flex-end;
  }

  svg {
    position: fixed;
    z-index: -1;
    top: 10px;
    left: 700px;
    height: 50rem;
  }

  h1,
  h3 {
    font-weight: 300;
  }
`;

export const Headline = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
