import styled from "styled-components";

export const Container = styled.div`
  margin-left: ${({ theme }) => theme.sidebarWidth};
  width: 70%;
  padding: 0 10%;
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  justify-content: space-around;
  align-items: center;
`;
