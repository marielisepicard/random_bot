import "../App.css";

function Message({ message, own }) {
  return (
    <div className={own ? "message-wrapper own" : "message-wrapper"}>
      <p className={own ? "message own" : "message"}>{message}</p>
    </div>
  );
}

export default Message;
