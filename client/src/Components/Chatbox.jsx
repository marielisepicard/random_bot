import "../App.css";
import Message from "./Message";
import { useRef, useEffect } from "react";

function Chatbox({ user, sendMessage, updateNewMessage, newMessage }) {
  const scrollRef = useRef();

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [user]);

  return (
    <div className="chatbox">
      <div className="chatbox-wrapper">
        <div className="chatbox-top"></div>
        <div className="chatbox-middle">
          {user.conversation.map((message) => {
            return (
              <div ref={scrollRef} key={message.timestamp}>
                <Message
                  key={message.timestamp}
                  message={message.message}
                  own={message.author === user.pseudo ? true : false}
                />
              </div>
            );
          })}
        </div>
        <form className="chatbox-bottom" onSubmit={sendMessage}>
          <textarea
            placeholder="Write something..."
            value={newMessage}
            onChange={updateNewMessage}
          ></textarea>
          <button className="chat-submit-message">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Chatbox;
