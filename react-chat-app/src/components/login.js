import React, { useState } from "react";
import { Link } from "react-router-dom";


const login = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [name, setName] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [room, setRoom] = useState("");

  return (
    <div>
      <h1>Log In</h1>
      <div>
        <input
          placeholder="Username"
          type="text"
          onChange={(event) => setName(event.target.value)}
          required
        />
      </div>
      <div>
        <input
          placeholder="Password"
          type="text"
          onChange={(event) => setRoom(event.target.value)}
          required
        />
      </div>
      <Link
        onClick={(e) => (!name || !room ? e.preventDefault() : null)}
        to={`/front`}
      >
        <button type="submit">Log In</button>
      </Link>
      
    </div>
  );
};

export default login;
