import styled from "styled-components";

export const StyledHeader = styled.div`
  margin-top: 5rem;
  margin-bottom: 2rem;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-around;

  hr {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const SectionTitle = styled.div`
  display: flex;
  align-items: center;

  h1 {
    font-size: 32px;
    align-items: center;
    font-weight: 200;
    padding-bottom: 4px;
  }
  span {
    font-size: 32px;
    color: ${({ theme }) => theme.colors.primary};
    margin-right: 1rem;
  }
`;
