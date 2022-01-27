import styled from "styled-components";

export const StyledProfile = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 170px;
  height: 170px;
  clip-path: circle(50% at 50% 50%);
  position: relative;
  & > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    clip-path: circle(50% at 50% 50%);
    background-color: #2c3549;
    height: 152px;
    width: 152px;
  }
`;
