import axios from "axios";

import {
  SideBarStyle,
  Title,
  Instructions,
  Parameters,
  Button,
  LengthInfo,
} from "./Styles/SideBar.styled";

const Presentation = ({
  user,
  setError,
  setConversation,
  length,
  handleTheme,
}) => {
  const deleteConversation = () =>
    axios({
      method: "delete",
      url: `http://localhost:3001/messages/${user.id}`,
    })
      .then(() => setConversation([]))
      .catch((err) => setError(true));

  return (
    <SideBarStyle>
      <Title>Random Chatbot.</Title>
      <Instructions>
        Welcome onboard 👋🏻 Send a message to Bot and you’ll get a fast answer.
        Bot is configured to respond in less than two seconds by sending back
        the same message but with a random shuffle of your words.
      </Instructions>
      <Parameters>
        <Button onClick={deleteConversation}>
          Delete conversation historic
        </Button>
        <Button onClick={handleTheme}>Switch Theme</Button>
        <LengthInfo>Conversation length: {length}</LengthInfo>
      </Parameters>
    </SideBarStyle>
  );
};

export default Presentation;
