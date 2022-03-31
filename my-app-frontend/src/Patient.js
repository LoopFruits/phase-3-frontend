import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

function Patient({lastName,firstName,email,phone,username,password,idNumber,
handleFirstNameChange,handleLastNameChange,handleEmailChange,handleIdNumberChange,
handlePhoneChange,handleUsernameChange,handlePasswordChange,handleSubmit}) {
    
    
         


return (
    <div className="body-1">
    <h1>Patient Sign-up</h1>
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
          <label>
            <p>Username</p>
              <input  
                type="text"
                name="username"
                value={username}
                onChange={handleUsernameChange}
              />
          </label>
          <label>
            <p>Password</p>
              <input  
                type="text"
                name="password"
                value={password}
                onChange={handlePasswordChange}
              />
          </label>
          <p>
      <button type="submit" className="sub-btn" >Submit</button>
      </p>
    </form>
  </div>
)


}

export default Patient;