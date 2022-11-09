import React, { useState, Component } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Signup from "./components/Signup";
import Login from "./components/Login";


function App() {
  const [count, setCount] = useState(0);

  return (
    //<Signup />
    <Login />
  );
}

export default App;
