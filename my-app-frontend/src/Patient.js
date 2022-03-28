import React from 'react';

function Patient() {

return (
    <div className="body-1">
    <h1>Patient Sign-up</h1>
    <form>
      <fieldset>
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
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  </div>
)


}

export default Patient;