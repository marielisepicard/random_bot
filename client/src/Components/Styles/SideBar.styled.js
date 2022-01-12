import styled from "styled-components";

export const SideBarStyle = styled.div`
  font-family: "Inter", sans-serif;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  font-family: "Inter", sans-serif;
  width: 33%;
  padding: 20px;

  @media (max-width: 1050px) {
    width: 100%;
    padding: 10px;
    flex-direction: row;
    justify-content: space-evenly;
  }

  @media (max-width: 550px) {
    flex-direction: column;
    width: 90%;
  }
`;

export const Title = styled.div`
  align-items: center;
  border-bottom: 5px solid #ffffff;
  display: flex;
  filter: drop-shadow(1px 4px 120px #ffffff);
  height: 32%;
  font-size: 5em;
  font-style: normal;
  font-weight: 900;
  padding-left: 10px;

  @media (max-width: 1050px) {
    height: auto;
    font-size: 1.5em;
    padding: 10px;
    border-bottom: none;
  }

  @media (max-width: 550px) {
    margin: auto auto 10px auto;
    border-bottom: 2px solid #ffffff;r
  }
`;

export const Instructions = styled.div`
  font-size: 1.2em;
  padding: 20px 20px 40px 20px;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid #ffffff;

  @media (max-width: 1050px) {
    font-size: 0.9em;
    padding: 5px 5px 10px 5px;
    max-width: 300px;
    border-bottom: none;
  }

  @media (max-width: 550px) {
    display: none;
  }
`;

export const Parameters = styled.div`
  height: 44%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1050px) {
    height: auto;
  }

  @media (max-width: 550px) {
    margin: auto;
  }
`;

export const Button = styled.button`
  background: none;
  outline: none;
  padding: 10px;
  font-style: normal;
  font-weight: 800;
  font-size: 1em;
  margin: 10px 0;
  margin-top: 20px;
  cursor: pointer;
  border: white solid 1.5px;
  border-radius: 20px;
  font-family: "Inter", sans-serif;
  color: #ffffff;

  &:hover {
    background-color: rgba(255, 255, 255, 0.418);
    border: rgba(255, 255, 255, 0.418) solid 1.5px;
    transition: 600ms;
  }

  &:active {
    background-color: white;
    transform: scale(1.25);
    transition: 1000ms;
  }

  @media (max-width: 1050px) {
    font-size: 0.9em;
    line-height: 1em;
    margin: 10px 0;
    width: 200px;
    margin-top: 20px;
    cursor: pointer;
    border: white solid 1.5px;
    border-radius: 20px;
  }

  @media (max-width: 550px) {
    margin: auto;
  }
`;

export const LengthInfo = styled.div`
  background: none;
  outline: none;
  padding: 10px;
  font-style: normal;
  font-weight: 800;
  font-size: 1em;
  margin: 10px 0;

  @media (max-width: 1050px) {
    font-size: 0.9em;
    line-height: 1em;
    margin: 10px 0;
    width: 200px;
  }
`;
