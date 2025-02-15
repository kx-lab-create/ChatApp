import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../assets/login.css';


const login = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [name, setName] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [room, setRoom] = useState("");

  return (
    <div>
      <h1 className="welcome">Welcome Back</h1>
      <h2 className="login">Log in</h2>
      <div className="inputbox">
      <div className="username">
        
        <input
          placeholder="Username"
          type="text"
          onChange={(event) => setName(event.target.value)}
          required
        />
      </div>
      <div className="password">
        <input
          placeholder="Password"
          type="text"
          onChange={(event) => setRoom(event.target.value)}
          required
        />
      </div>
      
      <div >
      <Link
        onClick={(e) => (!name || !room ? e.preventDefault() : null)}
        to={`/front`}
      >
        <button type="submit" className="login-btn">Log In</button>
      </Link>
      </div>
 
      </div>
      <img src="../login_img.png" alt="login" width="400" height="400" className="logo"></img>
      
      
    </div>
  );
};

export default login;
