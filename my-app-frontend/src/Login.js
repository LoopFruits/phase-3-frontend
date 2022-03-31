import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Patient from "./Patient";

function Login({handleLoginChange, handleLoginSubmit}) {






    return(
        <div className="body-1">
        <h1>Login</h1>
        <form onSubmit={handleLoginSubmit}>
          <div>
            <input type="text" name="username"  onChange={handleLoginChange} placeholder="Username" />
          </div>
          <div>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <button type="submit"  className="sub-btn">Enter</button>
        </form>
      </div>
    )



}

export default Login;