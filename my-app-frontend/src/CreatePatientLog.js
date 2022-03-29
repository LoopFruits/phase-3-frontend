import React, { useState } from 'react';


function CreatePatientLog() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  function handleUsernameChange(e){
    setUsername(e.target.value)
  }

  function handlePasswordChange(e){
    setPassword(e.target.value)
  }
    
    function handleFormSubmit(e) {
      e.preventDefault();
      
      
      fetch('http://localhost:9292/users', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body:JSON.stringify({
          username: username,
          password: password
        }),
       
        })
        .then((response) => response.json())
        .then((data) => console.log(data));}
        
    
        return (
        <div className="body-1">
        <h1>Register Patient</h1>
        <form>
          <div>
            <input type="text" name="username" placeholder="Username" onChange={handleUsernameChange} />
          </div>
          <div>
            <input name="password" placeholder="Password" onChange={handlePasswordChange}/>
          </div>
          <input type="submit" value="Create Account" onSubmit={handleFormSubmit}/>
        </form>
      </div>
    )


}

export default CreatePatientLog;