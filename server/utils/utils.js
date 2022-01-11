exports.isUser = (user) => Boolean(user.id && user.pseudo && user.conversation);

exports.generateNewStr = (splitedMessage, newOrder) => {
  let newMessage = "";
  for (let i = 0; i < newOrder.length; i++) {
    newMessage += splitedMessage[newOrder[i]] + " ";
  }
  return newMessage;
};

exports.shuffleUp = (array) => {
  for (let index = array.length - 1; index >= 0; index--) {
    let randomIndex = Math.floor(Math.random() * index);
    [array[index], array[randomIndex]] = [array[randomIndex], array[index]];
  }
  return array;
};

exports.createArray = (length) => [...Array(length).keys()];

exports.getLastMessage = (user) =>
  user.conversation[user.conversation.length - 1];

exports.shuffleString = (str) => {
  const splittedStr = str.split(/[\n\r\s]+/);
  const arr = this.createArray(splittedStr.length);
  const newOrder = this.shuffleUp(arr);
  const newStr = this.generateNewStr(splittedStr, newOrder);
  return newStr;
};
