import React from "react";
// import "mdbreact/dist/css/mdb.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import "./Styles/styles.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/signup" component={Signup} />
        <Route exact path="/" component={Login} />
      </Router>
    </div>
  );
}

export default App;
