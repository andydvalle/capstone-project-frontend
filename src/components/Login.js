import React, { Component } from "react";
import { api } from "../services/api";

class Login extends Component {
  state = {
    error: false,
    fields: {
      username: "",
      password: "",
    },
  };

  handleChange = (e) => {
    const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
    this.setState({
      fields: newFields,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // fetch request to login from api.js
    api.auth.login(this.state.fields).then((resp) => {
      if (!resp.error) {
        this.props.onLogin(resp);
        this.props.history.push("/dashboard");
      } else {
        this.setState({ error: true });
      }
    });
  };

  render() {
    const { fields } = this.state;
    return (
      <div className="temp-border">
      Hi from Login
        <div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>Username</label>
              <input
                name="username"
                placeholder="Enter username"
                value={fields.username}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label>Password</label>
              <input
                name="password"
                type="password"
                placeholder="Enter password"
                value={fields.password}
                onChange={this.handleChange}
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
