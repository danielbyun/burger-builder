import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  /*
  git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/danielbyun/burger-builder.git
git push -u origin master
  */
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
