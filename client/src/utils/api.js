import axios from "axios";

export function getUser(id, setUser, setError) {
  axios({
    method: "get",
    url: `http://localhost:3001/user/${id}`,
  })
    .then((res) => setUser(res.data))
    .catch((err) => setError(true));
}

export function postMessage(message, author, user, setUser, setError) {
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
    .then(() => getUser(id, setUser))
    .catch((err) => setError(true));
}
