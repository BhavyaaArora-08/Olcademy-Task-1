import React from "react";

const Alert = (props) => {
  return (
    <div>{props.alerts && props.alerts.map((alert) => <li>{alert}</li>)}</div>
  );
};

export default Alert;
