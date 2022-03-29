import './App.css';
// import { Switch, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Patient from "./Patient";
import Physician from "./Physician";
import Login from "./Login";
function App() {
  const [isClick1, setIsClick1] = useState(false);
  const [isClick2, setIsClick2] = useState(false);
  const [isClick3, setIsClick3] = useState(false);
  
  const [appointments, setAppointments] = useState({})

  // useEffect(() => {
  //   fetch("http://localhost:9293/")
  //     .then((r) => r.json())
  //     .then((appointments) => console.log(appointments));
  // }, []);
  
  function patientForm() {
    setIsClick1(!isClick1)
  }

  function physicianForm() {
    setIsClick2(!isClick2)
  }

  function loginForm() {
    setIsClick3(!isClick3)
  }

  return (
    <div className="App">
      {/* <Switch> */}
      <header className="App-header">
        <h1>Mental Health <br/> Without Borders</h1>
        
        <p>
          <button type="button" className="btn-1" onClick={patientForm}>In need of help<br/>Register</button>
          <button type="button" className="btn-2" onClick={physicianForm}>Would like to help<br/>Register</button>
        </p>
        <button type="button" className="log-btn" onClick={loginForm}>
          Login
        </button>
      
      {/* </Switch> */}
      </header>
      <div className="body-1">
       {isClick1 ? <Patient/> : null}
       {isClick2 ? <Physician/> : null}
       {isClick3 ? <Login/> : null}
      </div>
      <section>

      </section>
    </div>
  );
}

export default App;
