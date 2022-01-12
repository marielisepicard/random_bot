import "../style.css";
import Message from "./Message";
import { useRef, useEffect } from "react";

import Send from "../assets/sendIcon.png";

const Chatbox = ({
  user,
  sendMessage,
  updateNewMessage,
  newMessage,
  error,
  conversation,
}) => {
  const scrollRef = useRef();

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [conversation]);

  const onKeyDown = (e) => {
    if (e.keyCode === 13 && !e.shiftKey) {
      sendMessage(e);
    }
  };

  return (
    <div className="chatBox">
      <div className="chatBoxTitle">
        Hello {user.pseudo}, I’m Bot. Let’s have a talk...!
      </div>
      {error && (
        <p className="errorMessage">
          Oops. Something weng wrong... Bot is really sorry about it.
          <br />
          You should come back later.
        </p>
      )}
      <div className="chatBoxMessage">
        {conversation.map((message) => (
          <div
            ref={scrollRef}
            key={message.timestamp}
            className={
              message.author === user.pseudo
                ? "messageWrapper own"
                : "messageWrapper"
            }
          >
            <Message
              message={message}
              own={message.author === user.pseudo ? true : false}
              key={message.timestamp}
            />
          </div>
        ))}
      </div>
      <form className="chatBoxSending" onSubmit={sendMessage}>
        <textarea
          className="writeMessage"
          placeholder="Write something..."
          value={newMessage}
          onChange={updateNewMessage}
          onKeyDown={onKeyDown}
        />
        <button className="sendMessage">
          <img className="send-icon" src={Send} alt="icon" />
        </button>
      </form>
    </div>
  );
};

export default Chatbox;
