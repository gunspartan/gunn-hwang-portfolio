import styled from 'styled-components';
import { Link } from 'gatsby';

export const ExperienceItem = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  min-height: 500px;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    align-items: center;
  }
`;

export const ExperienceInfo = styled.div`
  height: 100%;
  margin-top: 3rem;
  width: 100%;
  margin-left: 0;
  z-index: 2;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: flex;
    width: 90%;
    flex-direction: column;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const StyledDescription = styled.h2`
  margin: 3rem 0;
`;
