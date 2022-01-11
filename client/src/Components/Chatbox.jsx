import "../style.css";
import Message from "./Message";
import { useRef, useEffect } from "react";

import Send from "../assets/send3.png";

const Chatbox = ({ user, sendMessage, updateNewMessage, newMessage }) => {
  const scrollRef = useRef();

  useEffect(() => {
    console.log(user.conversation);
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [user]);

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
      <div className="chatBoxMessage">
        {user.conversation.map((message) => (
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
          <img className="send-icon" src={Send} />
        </button>
      </form>
    </div>
  );
};

export default Chatbox;
