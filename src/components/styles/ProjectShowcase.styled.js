import styled from "styled-components";
import { Link } from "gatsby";

export const ProjectItem = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  min-height: 500px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ProjectInfo = styled.div`
  height: 100%;
  margin-top: 3rem;
  width: 60%;
  margin-left: 0;
  z-index: 2;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: flex;
    width: 90%;
    flex-direction: column;
    align-items: center;
  }
`;

export const TechStack = styled.div`
  display: flex;
  margin-top: 1rem;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledStackLink = styled.div`
  display: flex;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
    padding-right: 1rem;
    img {
      margin-right: 0.5rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-top: 0.5rem;
  }
`;

export const ProjectImage = styled.img`
  position: absolute;
  z-index: 1;
  transform: rotate(5deg);
  max-height: 500px;
  max-width: 500px;
  right: -10%;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-top: 1rem;
    position: static;
    max-height: 300px;
  }
`;

export const StyledDescription = styled.h2`
  margin: 3rem 0;
`;

export const StyledLinkIcons = styled.div`
  align-self: flex-end;
  justify-self: flex-end;
  a {
    margin-right: 1rem;
    font-size: 24px;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  margin: 3rem;
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;

  svg {
    color: ${({ theme }) => theme.colors.primary};
  }

  h3 {
    margin-left: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 3rem auto;
  }
`;
