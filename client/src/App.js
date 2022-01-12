import { useState, useEffect } from "react";
import { io } from "socket.io-client";

import SideBar from "./Components/SideBar";
import Chatbox from "./Components/Chatbox";
import Modal from "./Components/Modal";

import { getUser, postMessage } from "./utils/api";
import { ThemeProvider } from "styled-components";
import { AppWrapper } from "./App.styled";
import {
  blueTheme,
  darkTheme,
  coloredTheme,
} from "./Components/Styles/Themes.styled";

function App() {
  const [user, setUser] = useState({});
  const [socket, setSocket] = useState(null);
  const [modal, setModal] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [error, setError] = useState(false);
  const [conversation, setConversation] = useState([]);
  const [theme, setTheme] = useState(blueTheme);

  useEffect(() => {
    /* Uncoment the line below to remove the last user*/
    // localStorage.removeItem("id");
    const id = localStorage.getItem("id");
    if (id) {
      setSocket(io("ws://localhost:3001"));
      getUser(id, setUser, setError, setConversation);
    } else setModal(true);
  }, []);

  useEffect(
    () =>
      socket?.on("Bot", (message) =>
        postMessage(message, "Bot", setError, setConversation)
      ),
    [socket]
  );

  const sendMessage = async (e) => {
    e.preventDefault();
    if (newMessage.length > 0) {
      postMessage(newMessage, user.pseudo, setError, setConversation);
      setNewMessage("");
      socket.emit("Message", newMessage);
    }
  };
  const handleTheme = () => {
    setTheme(
      theme === blueTheme
        ? darkTheme
        : theme === darkTheme
        ? coloredTheme
        : blueTheme
    );
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        {user && user.conversation ? (
          <AppWrapper>
            <SideBar
              user={user}
              setConversation={setConversation}
              length={conversation.length}
              setError={setError}
              handleTheme={handleTheme}
            />
            <Chatbox
              user={user}
              sendMessage={sendMessage}
              updateNewMessage={(e) => setNewMessage(e.target.value)}
              newMessage={newMessage}
              error={error}
              conversation={conversation}
            />
          </AppWrapper>
        ) : (
          !modal && (
            <AppWrapper>
              <div>
                <h1>Loading...</h1>
                <div>A problem may have occured... Come back later</div>
              </div>
            </AppWrapper>
          )
        )}
        {modal && (
          <Modal setModal={setModal} setUser={setUser} setSocket={setSocket} />
        )}
      </ThemeProvider>
    </>
  );
}

export default App;
