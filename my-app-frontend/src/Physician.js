import React, { useState } from 'react';

function Physician() {

  const [lastName, setLastName] = useState("")
  const [firstName, setFirstName] = useState("")
  const [country, setCountry] = useState("")
  const [licenseNumber, setLicenseNumber] = useState("")

  function handleFirstNameChange(e){
    setFirstName(e.target.value)
  }

  function handleLastNameChange(e){
    setLastName(e.target.value)
  }

  function handleCountryChange(e){
    setCountry(e.target.value)
  }

  function handleLicenseChange(e){
    setLicenseNumber(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault();
    fetch("http://localhost:9293/physicians", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        country: country,
        license_number: licenseNumber,
      }),
    })
      .then((r) => r.json())
      .then((newPhysician) => console.log(newPhysician));

  }





    return (
        <div className="body-1">
    <h1>Physician Sign-up</h1>
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label>
          <p>First Name</p>
          <input
            type="text" 
            name="firstName"
            value={firstName}
            onChange={handleFirstNameChange} />
        </label>
        <label>
          <p>Last Name</p>
          <input
            type="text" 
            name="lastName"
            value={lastName}
            onChange={handleLastNameChange} />
        </label>
        <label>
          <p>Country</p>
          <input
            type="text" 
            name="country"
            value={country}
            onChange={handleCountryChange} />
        </label>
        <label>
          <p>Medical License</p>
          <input 
            type="text"
            name="licenseNumber"
            value={licenseNumber}
            onChange={handleLicenseChange} />
        </label>
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  </div>
    )
    
}


export default Physician;