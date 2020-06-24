import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="containere">
        <form className="form login">
          <h1>Log In</h1>
          <label for="email">Email Address</label>
          <input placeholder="your@email.com" name="email" />
          <label for="password">Password</label>
          <input placeholder=" ************* " name="password" />
          <button className="btn btn-success" type="submit">
            LOG IN
          </button>
          <hr></hr>
          <p id="or">OR</p>
          <div className="extra">
            <span>
              <span className="text">Don't have an account?</span>
              <NavLink to="/signup">Sign Up</NavLink>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
