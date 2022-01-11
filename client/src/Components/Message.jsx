import "../App.css";

const Message = ({ message, own }) => (
  <div className={own ? "message-wrapper own" : "message-wrapper"}>
    <p className={own ? "message own" : "message"}>{message}</p>
  </div>
);

export default Message;
