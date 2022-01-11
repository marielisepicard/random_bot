import "../App.css";
import axios from "axios";

const Parameters = ({ user, setUser, setError }) => {
  const deleteConversation = () =>
    axios({
      method: "delete",
      url: `http://localhost:3001/messages/${user.id}`,
    })
      .then(() => setUser({ ...user, conversation: [] }))
      .catch((err) => setError(true));

  return (
    <div>
      <div className="params-wrapper">
        <button
          onClick={deleteConversation}
          className="delete-conversation-button"
        >
          Supprimer l'historique de la conversation
        </button>
        <button
          onClick={deleteConversation}
          className="delete-conversation-button"
        >
          Supprimer l'historique de la conversation
        </button>
        <button
          onClick={deleteConversation}
          className="delete-conversation-button"
        >
          Longueur de la conversation: {user.conversation.length}
        </button>
      </div>
    </div>
  );
};

export default Parameters;
