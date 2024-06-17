// App.js
import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { connect } from "react-redux";
import Home from "./components/home/home.js";
import SignIn from "./components/Signin/signin.js";
import Menu from "./components/Menu/menu.js";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <div className="navbar navbar-expand-md navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            <h3>Name Of Company</h3>
          </a>
          <div>
            <a className="navbar-brand" href="/menu">
              Menu
            </a>
          </div>
          <div className="navbar-nav ml-auto">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  <i className="fa fa-home" aria-hidden="true"></i>
                  &nbsp; Home
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/login">
                  <i className="fa fa-sign-in icon" aria-hidden="true" />
                  &nbsp; Sign In
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={SignIn} exact />
        <Route path="/menu" component={Menu} exact />
      </BrowserRouter>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

export default connect(mapStateToProps)(App);
