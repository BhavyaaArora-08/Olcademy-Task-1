import React, { useState } from "react";
import { NavLink, Redirect } from "react-router-dom";
import axios from "axios";

const Signup = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    dob: Date.now(),
    gender: "Female",
  });

  if (props.isAuthenticated) {
    return <Redirect to="/" />;
  }
  const { name, email, password, dob, gender } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ name, email, password, dob, gender });
    try {
      const res = await axios.post("/api/users", body, config);
      props.handleChange({
        isAuthenticated: true,
        alerts: [],
        name,
        token: res.data.token,
      });
      return <Redirect to="/" />;
    } catch (err) {
      const errors = err.response.data.errors;
      let errs = [];
      if (errors) {
        errors.forEach((error) => {
          errs.unshift(error.msg);
        });
      }
      props.handleChange({ alerts: errs });
    }

    return false;
  };

  return (
    <div className="containere">
      <form onSubmit={onSubmit} className="form">
        <h1>Sign up</h1>
        <label htmlFor="name">Name</label>
        <input
          onChange={onChange}
          placeholder="Enter your name"
          type="text"
          name="name"
          value={name}
        />
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          value={email}
          onChange={onChange}
          placeholder="your@email.com"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          onChange={onChange}
          placeholder="*************"
          name="password"
        />
        <label htmlFor="dob">Date of Birth</label>
        <input value={dob} onChange={onChange} type="date" name="dob" />
        <label htmlFor="gender">Gender</label>
        <div className="gender">
          <span className="g">
            <label>M</label>
            <input
              defaultChecked={true}
              onChange={onChange}
              value="Male"
              type="radio"
              name="gender"
            />
          </span>
          <span className="g">
            <label>F</label>
            <input
              onChange={onChange}
              value="Female"
              type="radio"
              name="gender"
            />
          </span>
          <span className="g">
            <label>Other</label>
            <input
              onChange={onChange}
              value="Other"
              type="radio"
              name="gender"
            />
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
            <NavLink to="/login">Log in</NavLink>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Signup;

// onClick={onSubmit}
