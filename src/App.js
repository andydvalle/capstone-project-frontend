import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import { api } from "./services/api";
import Dashboard from "./containers/Dashboard";
import Login from "./components/Login";
import Signup from "./components/Signup";

class App extends Component {
  state = {
    auth: {
      user: {},
    },
  };

  // on submit from Login.js
  onLogin = (token) => {
    const updatedState = {
      ...this.state.auth,
      user: { id: token.id, username: token.username },
    };
    localStorage.setItem("token", token.jwt);
    this.setState({ auth: updatedState });
  };

  // on submit from pending Logout button
  onSignout = () => {
    localStorage.removeItem("token");
    this.setState({
      auth: {
        user: {},
      },
    });
  };

  componentDidMount() {
    // gets token
    const token = localStorage.getItem("token");

    // if token exists calls getCurrentUser and sets auth state)
    if (token) {
      api.auth.getCurrentUser().then((user) => {
        const updatedState = { ...this.state.auth, user: user };
        this.setState({ auth: updatedState });
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Route
          exact
          path="/"
          render={(props) => (
            <Login
              {...props}
              currentUser={this.state.auth.user}
              handleLogout={this.onSignout}
              onLogin={this.onLogin}
            />
          )}
        />
        <Route
          exact
          path="/signup"
          render={(props) => (
            <Signup
              {...props}
              currentUser={this.state.auth.user}
              handleLogout={this.onSignout}
              onLogin={this.onLogin}
            />
          )}
        />
        {this.state.auth.user.id ? (
          <Route
            path="/dashboard"
            render={(props) => (
              <Dashboard
                {...props}
                currentUser={this.state.auth.user}
                handleLogout={this.onSignout}
              />
            )}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
