import React, { Component } from "react";
import "../../CSS/nav.css";
import { Link } from "react-router-dom";

export default class ProtectedNav extends Component {

  logout = () => {
    localStorage.removeItem("token");
  };

  // (localStorage.getItem("token") ? "link hide" : "link")

  render() {
    return (
      <div>
        <div className="navDiv">
          <nav>
            <div>
              <Link className="link" to="/">
                Home
              </Link>
            </div>
            <div>{/* <input /> */}</div>
            <div>
              <Link className="link" to="/protected">
                User Page
              </Link>
              <Link className="link" to="/account">
                Account
              </Link>
              <Link to="/" className="link" onClick={this.logout}>
                Logout
              </Link>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
