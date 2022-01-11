import "../App.css";
import { useState } from "react";
import axios from "axios";
import { io } from "socket.io-client";

const Modal = ({ setModal, setUser, setSocket }) => {
  const [pseudo, setPseudo] = useState("");
  const updatePseudo = (e) => {
    console.log("updatePseudo");
    setPseudo(e.target.value);
  };

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
        const { data } = res,
          { id } = data;
        localStorage.setItem("id", id);
        setUser({
          id: data.id,
          pseudo: data.pseudo,
          conversation: data.conversation,
        });
        setSocket(io("ws://localhost:3001"));
        setModal(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="modal">
      <div className="modal-open">
        <div className="modal-div">Choose a pseudo:</div>
        <input
          placeholder="pseudo"
          onKeyDown={onKeyDown}
          onChange={updatePseudo}
        ></input>
        <button className="modal-btn" onClick={createUser}>
          Go
        </button>
      </div>
    </div>
  );
};

export default Modal;
