import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Chat from "./components/Chat";
import login from "./components/login";
import front from "./components/front";

const App = () => (
  <Router>
    <Route path="/" exact component={login} />
    <Route path="/chat" component={Chat} />
    <Route path="/front" component={front} />
  </Router>
);

export default App;
