import styled from "styled-components";

export const StyledButton = styled.a`
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.black};
  height: 40px;
  width: 120px;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  font-size: 20px;
  text-decoration: none;

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
