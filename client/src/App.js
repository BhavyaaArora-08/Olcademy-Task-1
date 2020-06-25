import React from "react";
// import "mdbreact/dist/css/mdb.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Alert from "./Components/Alert";
import "./Styles/styles.css";
import PrivateRoute from "./Components/PrivateRoute";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      isAuthenticated: false,
      alerts: [],
      token: "",
    };
  }

  componentDidUpdate() {
    if (this.state.isAuthenticated) {
      return <Redirect to="/" />;
    }
  }

  handleChange = (newStateUpdate) => {
    console.log(this.state);
    this.setState({ ...newStateUpdate });
    console.log(this.state);
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Alert alerts={this.state.alerts} />
          <Switch>
            <PrivateRoute
              exact
              path="/"
              token={this.state.token}
              name={this.state.name}
              handleChange={this.handleChange}
              isAuthenticated={this.state.isAuthenticated}
            />
            <Route
              exact
              path="/signup"
              render={(props) => (
                <Signup
                  {...props}
                  handleChange={this.handleChange}
                  isAuthenticated={this.state.isAuthenticated}
                />
              )}
            />
            <Route
              path="/login"
              render={(props) => (
                <Login
                  {...props}
                  handleChange={this.handleChange}
                  isAuthenticated={this.state.isAuthenticated}
                />
              )}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
