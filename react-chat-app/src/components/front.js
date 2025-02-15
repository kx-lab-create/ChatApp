import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../assets/front.css';


const front = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [name, setName] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [room, setRoom] = useState("");

  return (
    <div>
      <h1>Welcome</h1>
      <h2>
        Your Fish Tank
      </h2>
      <button id= 'account' type="submit">Account</button>
      
      <main>
      <img src="../fish_tank.png" alt="fishtank" width="500" height="500" className="center"></img>
      <div>
      
      
      <Link
        onClick={(e) => (!name || !room ? e.preventDefault() : null)}
        to={`/chat?name=${name}&room=${room}`}
      >
        <button type="submit" className="btn1">Pomodoro</button>
      </Link>
      
      
      
      <Link
        onClick={(e) => (!name || !room ? e.preventDefault() : null)}
        to={`/Chat`}
      >
        <button type="submit" className="btn2">Group Study Session</button>
      </Link>

      <Link
        onClick={(e) => (!name || !room ? e.preventDefault() : null)}
        to={`/Chat`}
      >
        <button type="submit" className="btn3">Infinite</button>
      </Link>
      </div>
      </main>
    </div>
  );
};

export default front;
