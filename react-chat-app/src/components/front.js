import React, { useState } from "react";
import { Link } from "react-router-dom";
import './front.css'


const front = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [name, setName] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [room, setRoom] = useState("");

  return (
    <div>
      <h1>Welcome</h1>
      <div>
        Your Fish Tank
      </div>
      <button id= 'account' type="submit">Account</button>
      
      <main id = "main">
      <div id = 'options'>
      <Link
        onClick={(e) => (!name || !room ? e.preventDefault() : null)}
        to={`/chat?name=${name}&room=${room}`}
      >
        <button type="submit">Pomodoro</button>
      </Link>
      
      <Link
        onClick={(e) => (!name || !room ? e.preventDefault() : null)}
        to={`/Chat`}
      >
        <button type="submit">Group Study Session</button>
      </Link>

      <Link
        onClick={(e) => (!name || !room ? e.preventDefault() : null)}
        to={`/Chat`}
      >
        <button type="submit">Infinite</button>
      </Link>
      </div>
      </main>
    </div>
  );
};

export default front;
