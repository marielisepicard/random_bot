import "../style.css";

import { convertTimestamp } from "../utils/utils";

const ManageLineBreak = ({ message }) => {
  const arr = message.split("\n");
  return (
    <div>
      {arr.map((str) => (
        <div key={str}>
          {str}
          <br />
        </div>
      ))}
    </div>
  );
};

const Message = ({ message, own }) => (
  <>
    <div className="messageInfos">
      {own ? (
        <>
          <p className="messageSend">{convertTimestamp(message.timestamp)}</p>
          <p className="messageAuthor ">You</p>
        </>
      ) : (
        <>
          <p className="messageAuthor ">Bot</p>{" "}
          <p className="messageSend">{convertTimestamp(message.timestamp)}</p>
        </>
      )}
    </div>
    <div className={own ? "messageContent own" : "messageContent"}>
      <ManageLineBreak message={message.message} />
    </div>
  </>
);

export default Message;
