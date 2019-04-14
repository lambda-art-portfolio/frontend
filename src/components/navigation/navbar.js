import React, { Component } from "react";
import "../../CSS/nav.css";
import { Route, Link } from "react-router-dom";
import Homepage from "../routes/Homepage";
import Login from "../routes/Login";
import SignUp from "../routes/Signup";
import PrivateRoute from "../routes/PrivateRoute";
import UserPage from "../routes/UserPage";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="navDiv">
        <nav>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            {/* <input /> */}
          </div>
          <div>
            <Link to="/login">Login</Link>
            <Link to="/protected">User Page</Link>
          </div>
        </nav>
        </div>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route exact path="/" component={Homepage} />
        <PrivateRoute exact path="/protected" component={UserPage} />
      </div>
    );
  }
}
