import React, { useState } from 'react';
import { useHistory } from "react-router-dom";


function EditPhysician({user}) {
  const [lastName, setLastName] = useState("")
  const [firstName, setFirstName] = useState("")
  const [license, setLicense] = useState("")
  const [country, setCountry] = useState("")

  const history = useHistory();
  
    function handleFirstNameChange(e){
      setFirstName(e.target.value)
    }

    function handleLastNameChange(e){
      setLastName(e.target.value)
    }

    function handleLicense(e){
      setLicense(e.target.value)
    }

   function handleCountry(e){
      setCountry(e.target.value)
    }

   function componentDidMount() {
    window.scrollTo(0, 0);
   }
   
    function handleSubmit(e) {
        e.preventDefault();
        fetch(`http://localhost:9292/physicians/${user.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            first_name: firstName,
            last_name: lastName,
            country: country,
            license_number: license,
            }),
          })
        .then((r) => r.json())
        .then((data) => console.log(data));
          history.push('/doc-landing');
          componentDidMount();
        }

   
        
    
            return (
              <div className="body-1">
              <h1>Edit Information</h1>
              <form onSubmit={handleSubmit}>
                  <label>
                    <p>First Name</p>
                    <input
                      placeholder={user.first_name}
                      type="text"
                      name="firstName"
                      value={firstName}
                      onChange={handleFirstNameChange}
                    />
                  </label>
                  <label>
                    <p>Last Name</p>
                    <input
                        placeholder={user.last_name} 
                        type="text"
                        name="lastName"
                        value={lastName}
                        onChange={handleLastNameChange}
                        />
                  </label>
                  <label>
                    <p>Country</p>
                    <input
                        placeholder={user.country}  
                        type="text"
                        name="idNumber"
                        value={country}
                        onChange={handleCountry}
                      />
                  </label>
                  <label>
                    <p>License Number</p>
                      <input
                        placeholder={user.license_number}  
                        type="text"
                        name="email"
                        value={license}
                        onChange={handleLicense}
                      />
                    </label>
                  <p>
                <button type="submit" className="sub-btn" >Submit</button>
                </p>
              </form>
            </div>
          )


}

export default EditPhysician;