import React, { Component } from "react";
import { Link } from "react-router-dom";
import { api } from "../services/api";
import DashboardHeader from "./DashboardHeader";
import Ellipse2 from "../svgs/Ellipse2";
import Ellipse3 from "../svgs/Ellipse3";
import Ellipse4 from "../svgs/Ellipse4";
import Ellipse5 from "../svgs/Ellipse5";

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
      <div>
        <DashboardHeader
          currentUser={this.props.currentUser}
          handleLogout={this.props.handleLogout}
        />
        <div className="login-overlay-wrap">
          <div className="login-ellipses">
            <div className="row">
              <div id="ellipse2">
                <Ellipse2 />
              </div>
              <div id="ellipse3">
                <Ellipse3 />
              </div>
            </div>
            <div className="row">
              <div id="ellipse4">
                <Ellipse4 />
              </div>
              <div id="ellipse5">
                <Ellipse5 />
              </div>
            </div>
          </div>
          <div className="notelist">
            <div className="login">
              <div className="login-header">
                Your health is important. Let's keep you on track.
              </div>
              <div className="login-form">
                {this.state.error ? <p>Please try again</p> : null}
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label className="login-label">Username</label>
                    <input
                      className="form-control"
                      type="text"
                      name="username"
                      placeholder="Your username"
                      value={fields.username}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="login-label">Password</label>
                    <input
                      className="form-control"
                      name="password"
                      type="password"
                      placeholder="Your password"
                      value={fields.password}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-row">
                    <button class="btn btn-primary btn mt-3" type="submit">
                      Login
                    </button>
                    <div className="login-signup">
                      <Link to={`/signup`}>Not a member? Signup!</Link>
                    </div>
                  </div>
                  <div className="mt-5">
                    <p>Want to demo this site? Login with:</p>
                    <em>
                      Username: <strong>user</strong> Password:{" "}
                      <strong>123</strong>
                    </em>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
