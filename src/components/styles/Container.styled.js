import styled from "styled-components";

export const Container = styled.div`
  ${"" /* margin-left: ${({ theme }) => theme.sidebarWidth}; */}

  width: 70%;
  max-width: 1700px;
  padding: 0 10%;
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  justify-content: space-around;
  align-items: center;
  transform: translate(300px, 0);

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 90%;
    transform: translate(0, 0);
    margin: 0 auto;
  }
`;
