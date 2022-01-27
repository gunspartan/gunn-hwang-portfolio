import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  colors: ${({ theme }) => theme.colors.black};
  height: 40px;
  width: 120px;
  border-radius: 50px;
  border: none;
  cursor: pointer;

  &:hover {
    animation: zoom-in-out 0.8s ease-in-out;
  }

  @keyframes zoom-in-out {
    0% {
      transform: scale(100%);
    }
    50% {
      transform: scale(110%);
    }
    100% {
      transform: scale(100%);
    }
  }

  p {
    font-size: 1.15rem;
    padding: 10px 15px;
  }
`;
