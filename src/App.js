import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch();
  }, []);

  async function fetch() {
    try {
      const res = await axios.get(`/api/message`);
      console.log("res ", res);
      setMessage(res.data.message);
    } catch (e) {
      console.log("e ", e);
      setMessage("Pas eu la donnée du serveur");
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{message}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
