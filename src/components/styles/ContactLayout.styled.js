import styled from "styled-components";

export const ContactLink = styled.div`
  margin: 5rem;
  text-align: center;
  a {
    cursor: pointer;
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 24px;
    font-weight: 200;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};

    svg {
      margin-right: 2rem;
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    a {
      display: flex;
      flex-direction: column;
      align-items: center;

      svg {
        margin: 2rem 0;
        font-size: 34px;
      }
    }
  }
`;
