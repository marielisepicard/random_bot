import styled from "styled-components";

export const ModalWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: ${({ theme }) => theme.background};
  height: 100vh;
`;

export const ModalBox = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 300px;
  background-color: rgba(255, 255, 255, 0.432);
  padding: 15px;
`;

export const Instructions = styled.div`
  color: #234d96;
  font-weight: 500;
`;

export const Error = styled.p`
  color: #962323;
  font-weight: 400;
  font-size: 12px;
`;

export const ModalButton = styled.button`
  font-family: "Inter", sans-serif;
  color: #ffffff;
  width: 50px;
  height: 20px;
  border-radius: 5px;
  border: none;
  background-color: #234d96;
  color: white;

  &:hover {
    background-color: #234d967e;
    transition: 500ms;
  }

  &:active {
    transform: scale(1.35);
    transition: 1000ms;
  }
`;
