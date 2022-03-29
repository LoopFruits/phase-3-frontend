import React from 'react';

function Patient() {
// const [form, setForm] = useState([]);

//   function handleSubmit() {
  
// }
return (
    <div className="body-1">
    <h1>Patient Sign-up</h1>
    <form>
        <label>
          <p>First Name</p>
          <input firstName="firstName" />
        </label>
        <label>
          <p>Last Name</p>
          <input lastName="lastName" />
        </label>
        <label>
          <p>State ID</p>
          <input stateId="stateId" />
        </label>
      <button type="submit" >Submit</button>
    </form>
  </div>
)


}

export default Patient;