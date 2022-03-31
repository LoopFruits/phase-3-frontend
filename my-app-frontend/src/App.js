import './App.css';
import { Switch, Route, Link, useHistory} from "react-router-dom";
import React, { useState} from "react";
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
    const [user, setUser] = useState([])
    const [lastName, setLastName] = useState("")
    const [firstName, setFirstName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [idNumber, setIdNumber] = useState("")

    const history = useHistory();

    //const [formData, setFormData] = useState({})

    function handleFirstNameChange(e){
     setFirstName(e.target.value)
    }

    function handleLastNameChange(e){
     setLastName(e.target.value)
    }

    function handleEmailChange(e){
     setEmail(e.target.value)
    }

    function handleUsernameChange(e){
     setUsername(e.target.value)
    }
    function handlePhoneChange(e){
     setPhone(e.target.value)
    }

    function handlePasswordChange(e){
      setPassword(e.target.value)
     }

    function handleIdNumberChange(e){
     setIdNumber(e.target.value)
    }
    
    function componentDidMount() {
      window.scrollTo(0, 0);
  }


    function handleSubmit(e){
      e.preventDefault();
      fetch("http://localhost:9292/patients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email: email,
          phone: phone,
          username: username,
          password: password,
          id_number: idNumber
          }),
        })
      .then((r) => r.json())
      .then((newPatient) => setUser(newPatient));
        history.push('/patient-landing')
        componentDidMount()
      
         }
         

  
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
          <EditPatient user={user}/>
        </Route>
        <Route exact path="/patient">
            <Patient lastName={lastName}firstName={firstName}email={email}phone={phone}username={username}password={password}idNumber={idNumber}
            handleFirstNameChange={handleFirstNameChange}handleLastNameChange={handleLastNameChange}handleEmailChange={handleEmailChange}
            handlePhoneChange={handlePhoneChange}handleUsernameChange={handleUsernameChange}handlePasswordChange={handlePasswordChange}handleIdNumberChange={handleIdNumberChange}
            handleSubmit={handleSubmit}/>
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
