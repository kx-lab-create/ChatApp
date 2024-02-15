import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import 'react-chat-elements/dist/main.css';
import { MessageBox } from 'react-chat-elements';
import { SystemMessage } from 'react-chat-elements';
import '../assets/group_session.css'
let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const ENDPOINT = "http://localhost:5000";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    socket = io(ENDPOINT);
    setRoom(room);
    setName(name);

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
  }, [location.search]);
  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });
    // socket.on("roomData", ({ users }) => {
    //   console.log(users);
    //   setUsers(users);
    // });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit("sendMessage", {message});
      setMessage("");
    } else alert("Your message cannot be empty:(");
  };

  return (
    <div class="screen">
      <div class="leftPanel">
        <h3>Room No: {room}</h3>
        <h3>Time studied: xxxxx</h3>
        <button class="leaveBtn">LEAVE</button>
      </div>
      <div class="rightPanel">
      <div class="ChatScreen">
        {messages.map((val, i) => {
          // condition of  the reply box 
          var pos = "left"
          if (name === val.user){
            pos = "right"
          }
          if (val.user === "Admin"){
            return(
              <div key={i}>
                <SystemMessage
                text={val.text}/>
              </div>
            )
          } else{
            return (
              <div key={i}>
              <MessageBox
                title={val.user}
                position = {pos}
                type={'text'}
                text={val.text}
                avatar={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJIjO6detp8YQ7N-xTecmvgmYVDmH1wAvt_w&usqp=CAU"}
              />
              </div>
            );
          }
        })}
      </div>
      <div class = "replyBox">
        <form action="" onSubmit={handleSubmit}>
          <input
            class="textBox"
            type="text"
            placeholder="Type here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <br></br>
          <input type="submit" class="submitBtn" value="SUBMIT"/>
        </form>
      </div>
      </div>
    </div>
  );
};

export default Chat;
