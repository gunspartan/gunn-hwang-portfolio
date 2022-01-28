import styled from "styled-components";

export const ProjectItem = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  min-height: 500px;
`;

export const ProjectInfo = styled.div`
  height: 100%;
  margin-top: 3rem;
  width: 60%;
  margin-left: 0;
  z-index: 2;
`;

export const TechStack = styled.div`
  display: flex;
  margin-top: 1rem;
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
`;

export const ProjectImage = styled.img`
  position: absolute;
  z-index: 1;
  transform: rotate(5deg);
  max-height: 500px;
  max-width: 500px;
  right: -10%;
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
