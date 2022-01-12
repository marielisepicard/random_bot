import styled from "styled-components";

export const AppWrapper = styled.div`
  font-family: "Inter", sans-serif;
  color: ${({ theme }) => theme.globalFont};
  background: ${({ theme }) => theme.background};
  display: flex;
  height: 100vh;
  justify-content: space-evenly;

  @media (max-width: 1050px) {
    flex-direction: column;
  }
`;
