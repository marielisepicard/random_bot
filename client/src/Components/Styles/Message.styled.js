import styled from "styled-components";

export const MessageData = styled.div`
  font-family: "Inter", sans-serif;
  color: #ffffff;
  max-width: 70%;
  display: flex;
  gap: 20px;
  margin: 0;

  @media (max-width: 1050px) {
    gap: 10px;
  }

  @media (max-width: 550px) {
    justify-content: center;
    gap: 0px;
  }
`;

export const Data = styled.p`
  margin: 5px 0;
  font-size: 0.8em;
  font-weight: 700;
  padding: 0 5px;
`;

export const Content = styled.div`
  max-width: 70%;
  font-size: 1.1em;
  background: ${({ theme }) => theme.botBubble};
  border-radius: 20px 20px 20px 0;
  padding: 10px;
  color: ${({ theme }) => theme.botFont};
  line-height: 1.2em;

  @media (max-width: 1050px) {
    max-width: 70%;
    font-size: 0.8em;
    line-height: 1em;
  }
`;

export const UserContent = styled.div`
  max-width: 70%;
  font-size: 1.1em;
  padding: 10px;
  line-height: 1.2em;
  background: rgba(39, 56, 149, 0.6);
  color: ${({ theme }) => theme.userFont};
  border-radius: 20px 20px 0 20px;
  background: ${({ theme }) => theme.userBubble};
  @media (max-width: 1050px) {
    max-width: 70%;
    font-size: 0.8em;
    line-height: 1em;
  }
`;
