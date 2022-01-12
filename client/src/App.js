import { useState, useEffect } from "react";
import { io } from "socket.io-client";

import SideBar from "./Components/SideBar";
import Chatbox from "./Components/Chatbox";
import Modal from "./Components/Modal";

import { getUser, postMessage } from "./utils/api";

import "./style.css";

function App() {
  const [user, setUser] = useState({});
  const [socket, setSocket] = useState(null);
  const [modal, setModal] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [error, setError] = useState(false);
  const [conversation, setConversation] = useState([]);

  useEffect(() => {
    const id = localStorage.getItem("id");
    if (id) {
      setSocket(io("ws://localhost:3001"));
      getUser(id, setUser, setError, setConversation);
    } else setModal(true);
  }, []);

  useEffect(
    () =>
      socket?.on("Bot", (message) =>
        postMessage(message, "Bot", user, setError, setConversation)
      ),
    [socket]
  );

  const sendMessage = async (e) => {
    e.preventDefault();
    if (newMessage.length > 0) {
      postMessage(newMessage, user.pseudo, user, setError, setConversation);
      setNewMessage("");
      socket.emit("Message", newMessage);
    }
  };

  return (
    <>
      {user && user.conversation && (
        <div className="app">
          <SideBar
            user={user}
            setConversation={setConversation}
            length={conversation.length}
            setError={setError}
          />
          <Chatbox
            user={user}
            sendMessage={sendMessage}
            updateNewMessage={(e) => setNewMessage(e.target.value)}
            newMessage={newMessage}
            error={error}
            conversation={conversation}
          />
        </div>
      )}
      {modal && (
        <Modal setModal={setModal} setUser={setUser} setSocket={setSocket} />
      )}
    </>
  );
}

export default App;
