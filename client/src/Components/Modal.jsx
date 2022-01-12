import { useState } from "react";
import axios from "axios";
import { io } from "socket.io-client";

import { errorMessage } from "../utils/utils";

import {
  ModalWrapper,
  ModalBox,
  Instructions,
  Error,
  ModalButton,
} from "./Styles/Modal.styled";

const Modal = ({ setModal, setUser, setSocket }) => {
  const [pseudo, setPseudo] = useState("");
  const [error, setError] = useState(false);

  const onKeyDown = (e) => {
    if (e.keyCode === 13 && !e.shiftKey) {
      createUser();
    }
  };

  const createUser = () => {
    axios({
      method: "post",
      url: "http://localhost:3001/user",
      data: { pseudo },
    })
      .then((res) => {
        const { data } = res;
        localStorage.setItem("id", data.id);
        setUser({
          id: data.id,
          pseudo: data.pseudo,
          conversation: data.conversation,
        });
        setSocket(io("ws://localhost:3001"));
        setModal(false);
      })
      .catch((err) => setError(true));
  };

  return (
    <ModalWrapper>
      <ModalBox>
        <Instructions>Choose a pseudo:</Instructions>
        <input
          placeholder="pseudo"
          onKeyDown={onKeyDown}
          onChange={(e) => setPseudo(e.target.value)}
        ></input>
        {error && <Error>{errorMessage()}</Error>}
        <ModalButton onClick={createUser}>Go</ModalButton>
      </ModalBox>
    </ModalWrapper>
  );
};

export default Modal;
