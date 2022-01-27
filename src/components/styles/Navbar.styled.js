import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: ${({ theme }) => theme.sidebarWidth};
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  border-right: 5px ${({ theme }) => theme.colors.primary} solid;
  font-weight: 200;

  h2 {
    margin-top: 2rem;
    font-weight: 200;
  }

  ul {
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
`;
