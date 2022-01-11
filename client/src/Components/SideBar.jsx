import "../style.css";

import axios from "axios";

import styled from "styled-components";

const Sidebar = styled.div`
  width: 33%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  font-family: "Inter", sans-serif;
`;

const Presentation = ({ user, setUser, setError }) => {
  const deleteConversation = () =>
    axios({
      method: "delete",
      url: `http://localhost:3001/messages/${user.id}`,
    })
      .then(() => setUser({ ...user, conversation: [] }))
      .catch((err) => setError(true));

  return (
    // <div className="sideBar">
    <Sidebar>
      <div className="title">Random Chatbot.</div>
      <div className="instructions">
        Welcome onboard 👋🏻 Send a message to Bot and you’ll get a fast answer.
        Bot is configured to respond in less than two seconds by sending back
        the same message but with a random shuffle of your words.
      </div>
      <div className="parameters">
        <button className="sidebarBtn" onClick={deleteConversation}>
          Delete conversation historic
        </button>
        <div className="sidebarDiv">
          Conversation length: {user.conversation.length}
        </div>
      </div>
      {/* </div> */}
    </Sidebar>
  );
};

export default Presentation;
