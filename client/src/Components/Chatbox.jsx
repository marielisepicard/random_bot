import Message from "./Message";
import { useRef, useEffect } from "react";

import Send from "../assets/sendIcon.png";

import {
  ChatBoxWrapper,
  Title,
  Error,
  MessageWrapper,
  WritingMessageWrapper,
  StyledTextarea,
  SendMessage,
  Icon,
  ScrollRef,
} from "./Styles/Chatbox.styled";

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
    <ChatBoxWrapper>
      <Title>Hello {user.pseudo}, I’m Bot. Let’s have a talk...!</Title>
      {error && (
        <Error>
          Oops. Something weng wrong... Bot is really sorry about it.
          <br />
          You should come back later.
        </Error>
      )}
      <MessageWrapper>
        {conversation.map((message) => (
          <ScrollRef
            ref={scrollRef}
            key={message.timestamp}
            own={message.author === user.pseudo ? true : false}
          >
            <Message
              message={message}
              own={message.author === user.pseudo ? true : false}
              key={message.timestamp}
            />
          </ScrollRef>
        ))}
      </MessageWrapper>
      <WritingMessageWrapper onSubmit={sendMessage}>
        <StyledTextarea
          placeholder="Write something..."
          value={newMessage}
          onChange={updateNewMessage}
          onKeyDown={onKeyDown}
        />
        <SendMessage>
          <Icon src={Send} alt="icon" />
        </SendMessage>
      </WritingMessageWrapper>
    </ChatBoxWrapper>
  );
};

export default Chatbox;
