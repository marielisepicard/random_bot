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

  useEffect(() => {
    //  localStorage.removeItem("id");
    const id = localStorage.getItem("id");
    if (id) {
      setSocket(io("ws://localhost:3001"));
      getUser(id, setUser, setError);
    } else setModal(true);
  }, []);

  useEffect(
    () =>
      socket?.on("Bot", (message) =>
        postMessage(message, "Bot", user, setUser, setError)
      ),
    [socket]
  );

  const refreshUser = async () => getUser(user.id, setUser, setError);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (newMessage.length > 0) {
      postMessage(newMessage, user.pseudo, user, setUser, setError);
      socket.emit("Message", newMessage);
      setNewMessage("");
    }
  };

  return (
    <>
      {user && user.conversation && (
        <div className="app">
          <SideBar user={user} setUser={setUser} setError={setError} />
          <Chatbox
            user={user}
            sendMessage={sendMessage}
            updateNewMessage={(e) => setNewMessage(e.target.value)}
            newMessage={newMessage}
          />
        </div>
      )}
      {modal && (
        <Modal
          setModal={setModal}
          setUser={setUser}
          refreshUser={refreshUser}
          setSocket={setSocket}
        />
      )}
    </>
  );
}

export default App;
