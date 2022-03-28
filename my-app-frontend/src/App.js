import './App.css';
// import { Switch, Route, Link } from "react-router-dom";
// import React from "react";


function App() {
  return (
    <div className="App">
      {/* <Switch> */}
      <header className="App-header">
        <h1>Mental Health <br/> Without Borders</h1>
        
        <p>
          <button type="button" className="btn-1">In need of help<br/>Register</button>
          <button type="button" className="btn-2">Would like to help<br/>Register</button>
        </p>
        <button type="button" className="log-btn">
          Login
        </button>
      
      {/* </Switch> */}
      </header>
      <div className="body-1">Data Goes Here</div>
    </div>
  );
}

export default App;
