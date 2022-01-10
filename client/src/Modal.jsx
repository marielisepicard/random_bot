import { forwardRef, useState, useImperativeHandle, useCallback } from "react";
import { createPortal } from "react-dom";

import axios from "axios";

import "./App.css";

function Modal({ defaultOpened = false }, ref) {
  const [isOpen, setIsOpen] = useState(defaultOpened);
  const [pseudo, setPseudo] = useState("");

  const close = useCallback(() => setIsOpen(false), []);

  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close,
  }));

  const handleChange = (e) => {
    e.preventDefault();
    setPseudo(e.target.value);
  };

  const handleClick = () => {
    axios({
      method: "post",
      url: "http://localhost:3001/createUser",
      data: { pseudo },
    })
      .then((res) => {
        const data = { res },
          id = { data };
        console.log("id", id);
        localStorage.setItem("id", id);
        setIsOpen(false);
      })
      .catch((err) => {
        // console.log(err);
        // something went wrong
      });
  };

  return createPortal(
    isOpen ? (
      <div className="modal-open">
        <div>Choose a pseudo:</div>
        <input placeholder="pseudo" onChange={handleChange}></input>
        <button onClick={handleClick}>Go</button>
      </div>
    ) : null,
    document.getElementById("modal")
  );
}

export default forwardRef(Modal);
