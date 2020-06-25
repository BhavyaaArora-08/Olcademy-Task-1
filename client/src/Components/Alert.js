import React from "react";
import Alert from "@material-ui/lab/Alert";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    width: "400px",
    margin: "5px auto",
  },
};

const Alerte = (props) => {
  return (
    <div className="alerts">
      {props.alerts &&
        props.alerts.map((alert) => (
          <Alert
            className={props.classes.root}
            severity={alert.type ? alert.type : "error"}
          >
            {alert.text}
          </Alert>
        ))}
    </div>
  );
};

export default withStyles(styles)(Alerte);
