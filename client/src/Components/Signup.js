import React from "react";
import { NavLink } from "react-router-dom";

const Signup = () => {
  return (
    <div className="containere">
      <form className="form">
        <h1>Sign up</h1>
        <label for="name">Name</label>
        <input placeholder="Enter your name" type="text" name="name" />
        <label for="email">Email Address</label>
        <input placeholder="your@email.com" name="email" />
        <label for="password">Password</label>
        <input placeholder=" ************* " name="password" />
        <label for="dob">Date of Birth</label>
        <input type="date" name="dob" />
        <label for="gender">Gender</label>
        <div className="gender">
          <span className="g">
            <label>M</label>
            <input type="radio" name="gender" />
          </span>
          <span className="g">
            <label>F</label>
            <input type="radio" name="gender" />
          </span>
          <span className="g">
            <label>Other</label>
            <input type="radio" name="gender" />
          </span>
        </div>

        <button className="btn btn-success" type="submit">
          SIGN UP
        </button>
        <hr></hr>
        <p id="or">OR</p>
        <div className="extra">
          <span>
            <span className="text">Already have an account?</span>
            <NavLink to="/">Log in</NavLink>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Signup;
