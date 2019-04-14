import React, { Component } from "react";
import "../../CSS/nav.css"
import { Route, Link } from "react-router-dom";
import Homepage from "../routes/Homepage";
import Login from "../routes/Login";
import SignUp from "../routes/Signup"




export default class Navbar extends Component {
  render() {
    return (
      <div>

        <nav>
          <Link to="/">Home</Link>
          <input/>
          <Link to="/login">Login</Link>
        </nav>

        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route exact path="/" component={Homepage} />
      </div>
    );
  }
}
