import React from 'react';

function CreatePhysicianLog() {

    return (
        <div className="body-1">
        <h1>Register Physician</h1>
        <form>
          <div>
            <input type="text" name="username" placeholder="Username" />
          </div>
          <div>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <input type="submit" value="Create Account" />
        </form>
      </div>
    )
}


export default CreatePhysicianLog;