import './App.css';
import { Switch, Route, Link } from "react-router-dom";
import React from "react";
import Patient from "./Patient";
import Physician from "./Physician";
import Login from "./Login";
import Donate from "./Donate";
// import CreatePatientLog from './CreatePatientLog';
// import CreatePhysicianLog from "./CreatePhysicianLog";
import EditPatient from "./EditPatient"
import PatientLanding from "./PatientLanding";

function App() {
  // const [isClick1, setIsClick1] = useState(false);
  // const [isClick2, setIsClick2] = useState(false);
  // const [isClick3, setIsClick3] = useState(false);
  
  
  // function patientForm() {
  //   setIsClick1(!isClick1)
  // }

  // function physicianForm() {
  //   setIsClick2(!isClick2)
  // }

  // function loginForm() {
  //   setIsClick3(!isClick3)
  // }

  return (
    <div className="App">
      <Switch>
      <header className="App-header">
      
        <h1>Mental Health <br/> Without Borders</h1>
        <Link to="/donate"><button type="button" className="don-btn" >DONATE</button></Link>
        <Link to="/Patient"><button type="button" className="btn-1">Patient <br/>Registration</button></Link>
        <Link to="/Physician"><button type="button" className="btn-2">Physician <br/>Registration</button></Link>
        <Link to="/login"><button type="button" className="log-btn" >Login</button></Link>
        <p>
        <Route exact path="/donate">
            <Donate/>
        </Route>
        <Route exact path="/edit-patient">
          <EditPatient/>
        </Route>
        <Route exact path="/patient">
            <Patient/>
        </Route>
        <Route exact path="/physician">
            <Physician/>
        </Route>
        </p>
        <Route path="/login">
            <Login/>
        </Route>
        <Route path="/patient-landing">
          <PatientLanding/>
        </Route>
      </header>
      </Switch>
        <div className="body-1">
        </div>
      </div>
  );
}

export default App;
