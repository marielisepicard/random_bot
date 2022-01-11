exports.shuffleUp = (array) => {
  for (let index = array.length - 1; index >= 0; index--) {
    let randomIndex = Math.floor(Math.random() * index);
    [array[index], array[randomIndex]] = [array[randomIndex], array[index]];
  }
  return array;
};

// exports.createArray = (length) => {
//   const arr = [];
//   for (let i = 0; i < length; i++) {
//     arr.push(i);
//   }
//   return arr;
// };

// 10 -> [1, 2 ,3 ,4 ... 9]
exports.createArray = (length) => [...Array(length).keys()];

exports.generateNewMessage = (splitedMessage, newOrder) => {
  let newMessage = "";

  for (let i = 0; i < newOrder.length; i++) {
    newMessage += splitedMessage[newOrder[i]] + " ";
  }
  return newMessage;
};

exports.isUser = (user) => Boolean(user.id && user.pseudo && user.conversation);

exports.getLastMessage = (user) =>
  user.conversation[user.conversation.length - 1];
