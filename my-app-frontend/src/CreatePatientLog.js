import React, { useState } from 'react';


function CreatePatientLog() {

  // const [user, setUser] = useState("")
    
    function handleFormSubmit(e) {
      e.preventDefault();
      const itemData = {
        username: e.target.value, 
        password: e.target.value
      };
      fetch('http://localhost:9292/users', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body:JSON.stringify(itemData),
      })
        // .then((response) => response.json())
        // .then((newItem) => {
        //   setUser([...user, newItem])
          
        }
    
        return (
        <div className="body-1">
        <h1>Register Patient</h1>
        <form>
          <div>
            <input type="text" name="username" placeholder="Username" />
          </div>
          <div>
            <input name="password" placeholder="Password" />
          </div>
          <input type="submit" value="Create Account" onSubmit={handleFormSubmit}/>
        </form>
      </div>
    )


}

export default CreatePatientLog;