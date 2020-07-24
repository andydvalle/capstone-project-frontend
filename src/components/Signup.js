import React, { useState } from "react";
import { api } from "../services/api";
import { Link } from "react-router-dom";

const Signup = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [unmatch, setUnmatch] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === "username") {
      setUsername(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    } else if (e.target.name === "confirm") {
      setConfirm(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password && password === confirm) {
      api.auth
        .signup({
          username: username,
          password: password,
        })
        .then((resp) => {
          console.log(resp);
          if (!resp.error) {
            props.onLogin(resp);
            props.history.push("/dashboard");
          } else {
            setError(true);
          }
        });
    } else {
      setUnmatch(true);
    }
  };

  return (
    <div className="login">
      <div className="login-header">
        Ready to get started? Let's sign you up!
      </div>{" "}
      {error ? <h5>Username already taken, please try again.</h5> : null}
      <form onSubmit={handleSubmit}>
        <div className="login-form">
          <div className="form-group">
            <label className="login-label">Username</label>
            <input
              name="username"
              class="form-control"
              placeholder="Enter username"
              value={username}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="login-label">Password</label>
            {unmatch ? <p>Passwords do not match, try again.</p> : null}
            <input
              name="password"
              type="password"
              class="form-control"
              placeholder="Password"
              value={password}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="login-label">Confirm Password</label>
            <input
              name="confirm"
              type="password"
              class="form-control"
              placeholder="Password"
              value={confirm}
              onChange={handleChange}
            />
          </div>
          <div className="form-row">
            <button class="btn btn-primary btn mt-3" type="submit">
              Sign up
            </button>
            <div className="login-signup">
              <Link to={`/`}>Have an account? Login!</Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
