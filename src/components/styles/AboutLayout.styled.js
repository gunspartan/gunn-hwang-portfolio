import styled from 'styled-components';

export const StyledAbout = styled.div`
  margin-top: 3rem;
  margin-bottom: 10rem;
  display: flex;
  flex-direction: column;

  p {
    font-size: 24px;
    padding-bottom: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-top: 1rem;
    align-items: center;
  }
`;

export const AboutMain = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 5rem;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const AboutName = styled.h1`
  padding-top: 2rem;
  font-size: 32px;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const AboutHeadline = styled.div`
  padding-top: 2rem;
  text-align: end;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
  }

  h1:nth-child(3) {
    margin-top: 2rem;
  }
  h1:nth-child(4) {
    font-size: 24px;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
  }
`;

export const AboutDescription = styled.div`
  div {
    display: flex;
    gap: 1rem;
  }
`;
