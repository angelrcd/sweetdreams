import React, { useState, Component } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Signup from "./components/Signup";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Signup />
  );
}

export default App;
