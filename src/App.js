import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Dashboard from "./containers/Dashboard";
import Login from "./components/Login";

class App extends Component {
  state = {
    auth: {
      user: {},
    },
  };

  // on submit from Login.js
  onLogin = (token) => {
    console.log(`loggin in ... ${token.username}`);
    const updatedState = {
      ...this.state.auth,
      user: { id: token.id, name: token.name },
    };
    localStorage.setItem("token", token.jwt);
    this.setState({ auth: updatedState });
  };

  // // on submit from pending Logout button
  // onLogout = () => {
  //   localStorage.removeItem("token");
  //   this.setState({
  //     auth: {
  //       user: {},
  //     },
  //   });
  // };

  render() {
    return (
      <div className="App">
        <Route
          exact
          path="/login"
          render={(props) => <Login {...props} onLogin={this.onLogin} />}
        />

        <Route
          exact
          path="/dashboard"
          render={(props) => <Dashboard {...props} />}
        />
      </div>
    );
  }
}

export default App;
