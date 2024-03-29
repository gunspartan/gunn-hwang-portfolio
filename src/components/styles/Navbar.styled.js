import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${({ theme }) => theme.sidebarWidth};
  background-color: ${({ theme }) => theme.colors.black};
  height: 100vh;
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  border-right: 5px ${({ theme }) => theme.colors.primary} solid;

  h2 {
    margin-top: 2rem;
  }

  ul {
    margin: 10rem 0;
    max-height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 50%;
  }

  li {
    list-style: none;
  }

  a {
    font-size: 1.24rem;
    width: 100%;
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    display: flex;
    align-items: center;
  }

  svg {
    color: ${({ theme }) => theme.colors.primary};
    margin-right: 10px;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
`;
