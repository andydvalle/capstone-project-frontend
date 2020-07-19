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
      <div className="login">
        <div className="login-header">
          Your health is important. Let's keep you on track.
        </div>
        <div className="login-form">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label className="login-label">Username</label>
              <input
                className="form-control shadow p-3 mb-5 bg-white rounded"
                type="text"
                name="username"
                placeholder="Your username"
                value={fields.username}
                onChange={this.handleChange}
              />
              {/* <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small> */}
            </div>
            <div className="form-group">
              <label className="login-label">Password</label>
              <input
                className="form-control shadow p-3 mb-5 bg-white rounded"
                name="password"
                type="password"
                placeholder="Your password"
                value={fields.password}
                onChange={this.handleChange}
              />
            </div>
            {/* <div className="form-check">
            <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
            Check me out
            </label>
          </div> */}
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
