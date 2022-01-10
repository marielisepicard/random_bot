import { useState, useRef, useEffect } from "react";

import axios from "axios";
import Modal from "./Modal";
import { io } from "socket.io-client";

import "./App.css";

// useRef pour io ?
function App() {
  const modal = useRef(null);
  const [user, setUser] = useState({});
  const [newMessage, setNewMessage] = useState("");
  const [id, setId] = useState("");
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    localStorage.setItem("id", "12b238493eb5832a9939f0f74d2082a4");
    const id = localStorage.getItem("id");
    setId(id);
    if (id) {
      setSocket(io("ws://localhost:3001"));
      const getUser = async () => {
        axios({
          method: "get",
          url: `http://localhost:3001/user/${id}`,
        })
          .then((res) => setUser(res.data))
          .catch((err) => console.log(err));
      };
      getUser();
    } else modal.current.open();
  }, []);

  useEffect(() => {
    socket?.on("Bot", (message) => {
      postMessage(message, "Bot");
    });
  }, [socket]);

  const refreshUser = () => {
    axios({
      method: "get",
      url: `http://localhost:3001/user/${id}`,
    })
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  };

  const postMessage = (message, author) => {
    axios({
      method: "post",
      url: `http://localhost:3001/messages/`,
      data: { message: message, author: author, id: id },
    })
      .then((res) => refreshUser())
      .catch((err) => console.log("il y a une erreur pour envoyer un message"));
  };

  const sendMessage = async (e) => {
    socket.emit("Message", newMessage);
    e.preventDefault();
    postMessage(newMessage, user.pseudo);
    setNewMessage("");
  };

  const updateNewMessage = (e) => {
    setNewMessage(e.target.value);
  };

  const deleteConversation = async () => {
    await axios({
      method: "delete",
      url: `http://localhost:3001/messages/${user.id}`,
    })
      .then(() => setUser({ ...user, conversation: [] }))
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <header className="App-header">
        {user && user.conversation ? (
          <div className="chatbox">
            <div className="top"></div>
            <div className="messages">
              <button onClick={deleteConversation}>
                Supprimer l'historique de la conversation
              </button>
              {user.conversation.map((message) => {
                return (
                  <p key={message.timestamp}>
                    {message.author} {message.message}
                  </p>
                );
              })}
            </div>
            <form className="bottom" onSubmit={sendMessage}>
              <textarea
                placeholder="type something..."
                value={newMessage}
                onChange={updateNewMessage}
              />
              <button className="message-btn">{">"}</button>
            </form>
          </div>
        ) : (
          <h1>Loading</h1>
        )}
      </header>
      <Modal ref={modal} />
    </div>
  );
}

export default App;
