import React from "react";
import { Route, Redirect } from "react-router-dom";
import Welcome from "./Welcome";

const PrivateRoute = (props) => {
  return (
    <div>
      <Route
        render={(p) =>
          !props.isAuthenticated ? (
            <Redirect to="/signup" />
          ) : (
            <Welcome
              handleChange={props.handleChange}
              name={props.name}
              token={props.token}
            />
          )
        }
      />
    </div>
  );
};

export default PrivateRoute;
