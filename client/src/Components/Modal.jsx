import "../style.css";

import { useState } from "react";
import axios from "axios";
import { io } from "socket.io-client";

import { errorMessage } from "../utils/utils";

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
    <div className="modal">
      <div className="modalWrapper">
        <div className="modalInstruction">Choose a pseudo:</div>
        <input
          placeholder="pseudo"
          onKeyDown={onKeyDown}
          onChange={(e) => setPseudo(e.target.value)}
        ></input>
        {error && <p className="modalError">{errorMessage()}</p>}
        {/* tester */}
        <button className="modalBtn" onClick={createUser}>
          Go
        </button>
      </div>
    </div>
  );
};

export default Modal;
