import styled from "styled-components";

export const StyledHero = styled.div`
  margin-top: 10rem;
  margin-bottom: 20rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40vh;
  width: 100%;
  button {
    align-self: flex-end;
  }

  svg {
    position: absolute;
    z-index: -1;
    top: 10px;
    right: -10%;
    height: 50rem;
  }
`;

export const Headline = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
