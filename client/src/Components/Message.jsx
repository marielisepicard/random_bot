import { convertTimestamp } from "../utils/utils";

import {
  MessageData,
  Data,
  Content,
  UserContent,
} from "./Styles/Message.styled";

const Message = ({ message, own }) => (
  <>
    {own ? (
      <>
        <MessageData>
          <Data>{convertTimestamp(message.timestamp)}</Data>
          <Data>You</Data>
        </MessageData>
        <UserContent>{message.message}</UserContent>
      </>
    ) : (
      <>
        <MessageData>
          <Data>Bot</Data>
          <Data>{convertTimestamp(message.timestamp)}</Data>
        </MessageData>
        <Content>{message.message}</Content>
      </>
    )}
  </>
);

export default Message;
