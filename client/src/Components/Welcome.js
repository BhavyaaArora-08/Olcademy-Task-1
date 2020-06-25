import React from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

const Welcome = (props) => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": props.token,
      },
    };

    try {
      await axios.post("/api/users/logout", null, config);
      props.handleChange({ isAuthenticated: false, alerts: [], token: "" });
      props.handleChange({
        alerts: [{ type: "success", text: "You have logged out!" }],
      });
      setTimeout(() => {
        props.handleChange({ alerts: [] });
      }, 3000);
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
      setTimeout(() => {
        props.handleChange({ alerts: [] });
      }, 3000);
    }

    return false;
  };

  return (
    <div style={{ textAlign: "center" }} className="containere">
      <form
        style={{ height: "300px" }}
        className="form login"
        onSubmit={onSubmit}
      >
        <h1>Welcome {props.name}!</h1>
        <p>We are really happy to have you here</p>
        <button className="btn btn-success" type="submit">
          Log Out
        </button>
      </form>
    </div>
  );
};

export default Welcome;
