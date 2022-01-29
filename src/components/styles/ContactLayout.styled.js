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
`;
