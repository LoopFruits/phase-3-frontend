import React from 'react';


function CreateLog() {

    return (
        <div className="body-1">
        <h1>Register</h1>
        <form>
          <div>
            <input type="text" name="username" placeholder="Username" />
          </div>
          <div>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )


}

export default CreateLog;