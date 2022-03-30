import React, { useState } from 'react';
// import { useHistory } from "react-router-dom";


function EditPatient() {
  const [lastName, setLastName] = useState("")
  const [firstName, setFirstName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [idNumber, setIdNumber] = useState("")


  function handleFirstNameChange(e){
    setFirstName(e.target.value)
   }

   function handleLastNameChange(e){
    setLastName(e.target.value)
   }

   function handleEmailChange(e){
    setEmail(e.target.value)
   }

  
   function handlePhoneChange(e){
    setPhone(e.target.value)
   }

   

   function handleIdNumberChange(e){
    setIdNumber(e.target.value)
   }
   
   function handleSubmit() {


   }
        
    
        return (
          <div className="body-1">
          <h1>Edit Information</h1>
          <form onSubmit={handleSubmit}>
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
               <p>
            <button type="submit" className="sub-btn" >Submit</button>
            </p>
          </form>
        </div>
    )


}

export default EditPatient;