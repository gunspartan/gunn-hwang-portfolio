import styled from "styled-components";

export const Watermark = styled.div`
  position: fixed;
  z-index: 2;
  opacity: 30%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  h1 {
    width: 100%;
    font-size: 52px;
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
  }
`;
