import "../style.css";

import axios from "axios";

const Presentation = ({ user, setError, setConversation, length }) => {
  const deleteConversation = () =>
    axios({
      method: "delete",
      url: `http://localhost:3001/messages/${user.id}`,
    })
      .then(() => setConversation([]))
      .catch((err) => setError(true));

  return (
    <div className="sideBar">
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
        <div className="sidebarDiv">Conversation length: {length}</div>
      </div>
    </div>
  );
};

export default Presentation;
