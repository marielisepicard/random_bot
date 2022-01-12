import axios from "axios";

export function getUser(id, setUser, setError, setConversation) {
  axios({
    method: "get",
    url: `http://localhost:3001/user/${id}`,
  })
    .then((res) => {
      setUser(res.data);
      setConversation(res.data.conversation);
    })
    .catch((err) => setError(true));
}

export function postMessage(message, author, user, setError, setConversation) {
  const id = user && user.id ? user.id : localStorage.getItem("id");
  axios({
    method: "post",
    url: `http://localhost:3001/messages/`,
    data: {
      message: message,
      author: author,
      id: id,
    },
  })
    .then((result) => setConversation(result.data))
    .catch((err) => setError(true));
}
