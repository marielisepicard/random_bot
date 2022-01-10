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

exports.createArray = (length) => {
  return [...Array(length).keys()];
};
// [1, 2, 3 , 4 ,5 ]

exports.generateNewMessage = (splitedMessage, newOrder) => {
  let newMessage = "";

  for (let i = 0; i < newOrder.length; i++) {
    newMessage += splitedMessage[newOrder[i]] + " ";
  }
  return newMessage;
};

exports.isUser = (user) => {
  return user.id && user.pseudo && user.conversation ? true : false;
};

exports.getLastMessage = (user) => {
  return user.conversation[user.conversation.length - 1];
};
