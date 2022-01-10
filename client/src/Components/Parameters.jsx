import "../App.css";

function Parameters({ handleClick }) {
  return (
    <div>
      <div className="params-wrapper">
        <button onClick={handleClick} className="delete-conversation-button">
          Supprimer l'historique de la conversation
        </button>
        <button onClick={handleClick} className="delete-conversation-button">
          Supprimer l'historique de la conversation
        </button>
        <button onClick={handleClick} className="delete-conversation-button">
          Supprimer l'historique de la conversation
        </button>
      </div>
    </div>
  );
}

export default Parameters;
