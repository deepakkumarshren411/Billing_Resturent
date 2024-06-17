import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import "./signin.css";

const SignIn = () => {
  const [formData, setFormData] = useState({ username: "", password: "", pin: "" });
  const history = useHistory();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    console.log(formData.pin === "12345");

    if (formData.pin === "12345") {
      history.push(`/Menu`);
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-row">
        <div className="signin-col-lg-8">
          <h1 className="signin-title">Sign In</h1>
          <form className="signin-form" onSubmit={handleSubmit}>
            <div className="signin-form-group">
              <label className="signin-label">
                <h6>Username:</h6>
              </label>
              <input
                placeholder="Enter Your Username..."
                className="signin-input"
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div className="signin-form-group">
              <label className="signin-label">
                <h6>Password:</h6>
              </label>
              <input
                placeholder="Enter Your Password..."
                className="signin-input"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="signin-form-group">
              <label className="signin-label">
                <h6>Pin:</h6>
              </label>
              <input
                placeholder="Enter Your Pin..."
                className="signin-input"
                type="password"
                name="pin"
                value={formData.pin}
                onChange={handleChange}
              />
            </div>
            <input className="signin-button" type="submit" value="Login" />
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(SignIn);
