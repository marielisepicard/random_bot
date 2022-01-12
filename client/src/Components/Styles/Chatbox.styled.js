import styled from "styled-components";

export const ChatBoxWrapper = styled.div`
  font-family: "Inter", sans-serif;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  max-width: 800px;
  padding: 20px;
  width: 77%;

  @media (max-width: 1050px) {
    width: 100%;
    padding: 5px;
    height: 70%;
    margin: 0 auto auto auto;
    border: white solid 0.2px;
    border-radius: 10px;
  }

  @media (max-width: 550px) {
    width: 90%;
    padding: 10px;
    height: 70%;
    margin: auto;
  }
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: 900;
  font-size: 1.8em;
  display: flex;
  align-items: center;
  margin: auto;
  margin-bottom: 10px;
  padding: 10px 20px 20px 20px;
  border-bottom: 5px solid #ffffff;

  @media (max-width: 1050px) {
    font-size: 1.1em;
    padding: 5px 10px 10px 10px;
    border-bottom: 2px solid #ffffff;
  }

  @media (max-width: 550px) {
    font-size: 1.1em;
    padding: 5px 10px 10px 10px;
    border-bottom: 2px solid #ffffff;
    height: 40px;
    margin: 0 auto;
  }
`;

export const Error = styled.p`
  color: #962323;
  font-weight: 800;
  border: 2px solid #962323;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  margin: auto;

  @media (max-width: 1050px) {
    margin-top: 10px;
    border: 1px solid #962323;
    font-size: 0.8em;
    max-width: 70%;
  }
`;

export const MessageWrapper = styled.div`
  height: 60%;
  overflow-y: scroll;
  padding-bottom: 20px;
  border-bottom: 2px solid #ffffff;

  @media (max-width: 1050px) {
    padding-bottom: 10px;
  }
`;

export const WritingMessageWrapper = styled.form`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1050px) {
    padding: 10px;
    justify-content: space-around;
  }
`;

export const StyledTextarea = styled.textarea`
  width: 80%;
  height: 120px;
  padding: 10px;
  resize: none;
  border: none;
  border-radius: 10px;
  color: ${({ theme }) => theme.textareaFont};
  font-family: "Inter", sans-serif;
  font-weight: 600;
  &::placeholder {
    color: #234d9688;
  }
  &:focus {
    outline: none;
  }
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1050px) {
    height: 80px;
  }
`;

export const SendMessage = styled.button`
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 5px;
  font-weight: 400;
  border-radius: 50%;
  padding: 3px;

  &:active {
    background-color: white;
    transform: scale(1.25);
    transition: 1000ms;
  }
  &:hover {
    transition: 1000ms;
    background-color: rgba(255, 255, 255, 0.3);
    cursor: pointer;
  }

  @media (max-width: 1050px) {
    width: 40px;
    height: 40px;
  }
`;

export const Icon = styled.img`
  height: 26px;
  width: 26px;
  position: relative;
  top: 4px;
  left: -2px;

  @media (max-width: 1050px) {
    height: 20px;
    width: 20px;
  }
`;

export const ScrollRef = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-items: ${({ own }) => (own ? "flex-end" : "flex-start")};
  padding-right: ${({ own }) => (own ? "13px" : "0")};
`;
