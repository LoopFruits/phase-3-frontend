import React, { useState } from 'react';


function Patient() {
  const [lastName, setLastName] = useState("")
  const [firstName, setFirstName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [username, setUsername] = useState("")
  const [idNumber, setIdNumber] = useState("")

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

  function handleIdNumberChange(e){
    setIdNumber(e.target.value)
  }
  // function handleChange(e){
  //   const name = e.target.name
  //   let value = e.target.value
  //   setFormData({formData, [name]:value})
  // }

  function handleSubmit(e){
    e.preventDefault();
    fetch("http://localhost:9293/patients", {
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
        id_number: idNumber
      }),
    })
      .then((r) => r.json())
      .then((newPatient) => console.log(newPatient));

  }
    
  
  

return (
    <div className="body-1">
    <h1>Patient Sign-up</h1>
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label>
          <p>First Name</p>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </label>
        <label>
          <p>Last Name</p>
          <input 
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleLastNameChange}
              />
        </label>
        <label>
          <p>State ID</p>
          <input  
              type="text"
              name="idNumber"
              value={idNumber}
              onChange={handleIdNumberChange}
            />
        </label>
        <label>
          <p>E-mail</p>
            <input  
              type="text"
              name="email"
              value={email}
              onChange={handleEmailChange}
            />
          </label>
          <label>
            <p>Phone Number</p>
              <input  
                type="text"
                name="phone"
                value={phone}
                onChange={handlePhoneChange}
            />
          </label>
          <label>
            <p>Username</p>
              <input  
                type="text"
                name="username"
                value={username}
                onChange={handleUsernameChange}
              />
          </label>
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  </div>
)


}

export default Patient;