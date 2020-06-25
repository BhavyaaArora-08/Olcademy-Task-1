import React from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

const Welcome = (props) => {
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("hey", props.token, "   j");

    const config = {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": props.token,
      },
    };

    try {
      await axios.post("/api/users/logout", null, config);
      props.handleChange({ isAuthenticated: false, alerts: [], token: "" });
      return <Redirect to="/signup" />;
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
    <div>
      <form onSubmit={onSubmit}>
        <button className="btn btn-primary" type="submit">
          Log Out
        </button>
      </form>
      <h1>Welcome {props.name}!</h1>
    </div>
  );
};

export default Welcome;
