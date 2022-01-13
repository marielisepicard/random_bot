#  🦾 Random Chatbot

### 🦿 The goal of this project is to implement a basic chatbot with React, NodeJS, ExpressJS and Socket.IO 

<p align="center">
     <img src="https://github.com/marielisepicard/random_bot/blob/main/client/src/assets/Demo.gif?raw=true" width=70% height=70%>
</p>



## 👨🏻‍💻 TO TEST

- `npm i` on both `client` and `server` folder.
- Add `.env` file on `server`folder.
- `npm start` from `client` folder.
- `npm start` from `server` folder.




## ⚙️ BACKEND

I mane only **one model called "User"**. It is made of:


<p align="center">
     <img src="https://raw.githubusercontent.com/marielisepicard/random_bot/main/client/src/assets/Model.gif?raw=true" width=50% height=50%>
</p>

 
— 🔑 an `id` 

— 💬  a `pseudo`

— 🗣 a `conversation` array, it's a list of message. A message object is composed of the `author` of the message (user pseudo or “Bot”), a `timestamp` (when the message is sent to the database) and the content of the `message`).

I used **MongoDB** to store data.



### **I implemented 5 endpoints.**

— **Create a user** :  to create a user, the controller only needs a pseudo. Since there is no communication between users, we can have the same pseudos for multiple users. What differentiates them is their id. 

— **Get a user** : with the id of a user, we can retrieve all its data. 

— **Post a message** : we need the message content, the id of the user (even if it’s a Bot message) and the author (to differentiate the user and the Bot). 

— **Get conversation** : to retrieve all messages between the Bot and a user. 

— **Delete a conversation**.



### 🤹  **Shuffle word** 

To randomly shuffle words, I implemented the **Fisher–Yates shuffle algorithm.** I was inspired by this [Wikipedia page](https://en.wikipedia.org/wiki/Fisher–Yates_shuffle) and this [Youtube video](https://www.youtube.com/watch?v=4zx5bM2OcvA). 

**1. I split the message to a string array**

`Power comes in response to a need, not a desire` becomes 

**[”Power”, “comes”, “in”, “response”, “to”, “a”, “need,”, “not”, “a”, “desire”]**

**2. Then I create a int array with the same size of our previous array**

**[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]**

**3. Then I go through the whole array (starting from the end) and I shuffle each element with another one from the array that has a lower index.**

**[5, 6, 8, 9, 2, 4, 7, 3, 1, 0]**

**4. Then I create a new string with this new order.**

`a need, a desire in to not response comes Power`



### 🚵 **Tests** 

I made unit tests with **Jest** to test my shuffle algorithm.

I made integration tests with **SuperTest** to test the api calls. 




## 🖍 Front End 

— I decided to use **functional components** with React because I particularly enjoy using Hooks. 

— I choose the following **components implementations**:

<p align="center">
     <img src="https://raw.githubusercontent.com/marielisepicard/random_bot/main/client/src/assets/RandomChatbot.gif" width=50% height=50%>
</p>


**1. 📲 App**


**2. ↖️ SideBar**

To display the name of the Bot, some instructions, CTAs to delete the conversation and switch color theme. I also add the lenth of the conversation (so that we can check that a conversation never exceed 50 messages)


**3. 💬 The Chatbox**

The Chatbox displays the pseudo of the user. It also display the whole conversation. The user can write new messages on a textarea. He can click on the "Send" button or just press "Enter".  


**4. ⌨ A Message component**

The Message component displays multiple data: the content of the message, the author and the date where its object has been created on the backend to be stored on the database. 


**5. 🙋🏽‍♂️ A modal**

The modal is visible at the first visit of a potential user. When a user creates its pseudo, it stores its id in the local storage of the browser.



### 🧑🏼‍🎨 Figma

I used [Figma](https://www.figma.com/file/5HVx3zStjVf8Hyh4BDgL9R/Random-chatbot?node-id=0%3A1) to imagine and create the design of the app.

I started with a design that imitated **the shape of an iPhone** but I was not satisfied with the final render. 

<p align="center">
    <img src="https://raw.githubusercontent.com/marielisepicard/random_bot/main/client/src/assets/firstThemeIdea.png" width=50% height=50%>
</p>


So I totally **switch the component arrangement** and I was finally happy with this:

<p align="center">
    <img src="https://raw.githubusercontent.com/marielisepicard/random_bot/main/client/src/assets/FinalIdea.png" width=50% height=50%>
</p>

I also imagine **more themes** to add a toggle CTA

<p align="center">
    <img src="https://raw.githubusercontent.com/marielisepicard/random_bot/main/client/src/assets/SoftTheme.png" width=50% height=50%>
</p>

<p align="center">
    <img src="https://raw.githubusercontent.com/marielisepicard/random_bot/main/client/src/assets/DarkTheme.png" width=50% height=50%>
</p>

To create more themes, I discovered `styled-components` library. 



### 👇🏿 **Features** 

— 👱🏻‍♂️ A potential user can define **its pseudo** and start to use the app

— 🎤 A user can **post** messages on a chat

— 💬 A user can **retrieve** its whole **conversation** (50 messages maximum)

— ✨ A user can retrieve its data if he come back **during** **another** **session**

—  🤖 The Bot respond in **less than 2 seconds** the same message but with a random shuffle of the words of the user message 

— 👀 Bot **pseudo** is displayed on the Chat 

— 😇 The application is **basic**.

