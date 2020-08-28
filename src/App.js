import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { connect } from "react-redux";

import Home from "./components/home";
import SignIn from "./components/signin";
import Menu from "./components/menu";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <div className=" navbar navbar-expand-md navbar-dark bg-dark">
          <a className="navbar-brand" href="">
            <h3>Name Of Company</h3>
          </a>

          <div>
            <a className="navbar-brand" href="">
              {" "}
            </a>
          </div>

          <div className="navbar-nav ml-auto">
            <div className="navbar-nav ml-auto">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    <i class="fa fa-home" aria-hidden="true"></i>
                    &nbsp; Home
                  </Link>
                </li>

                <li className="nav-item active">
                  <Link className="nav-link" to="/login">
                    <i class="fa fa-sign-in icon" aria-hidden="true" />
                    &nbsp; Sign In
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Route path="/" component={Home} exact={true}></Route>
        <Route path="/login" component={SignIn} exact={true}></Route>
        <Route path="/Menu" component={Menu} exact={true}></Route>
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
