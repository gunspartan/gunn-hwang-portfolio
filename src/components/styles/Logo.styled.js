import styled from "styled-components";

export const StyledLogo = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 200px;
  height: 200px;
  clip-path: circle(50% at 50% 50%);
  position: relative;
  & > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    clip-path: circle(50% at 50% 50%);
    background-color: ${({ theme }) => theme.colors.black};
    height: 180px;
    width: 180px;
    padding: 10px;
  }
`;
