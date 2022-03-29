import React from "react";

function Login() {


    return(
        <div className="body-1">
        <h1>Login</h1>
        <form>
          <div>
            <input type="text" name="username" placeholder="Username" />
          </div>
          <div>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <input type="submit" value="Enter" />
        </form>
      </div>
    )



}

export default Login;