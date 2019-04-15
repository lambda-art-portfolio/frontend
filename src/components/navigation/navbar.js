import React, { Component } from "react";
import "../../CSS/nav.css";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  logout = () => {
    localStorage.removeItem("token");
  };

  render() {
    //     let btnLogin = document.getElementById("btnLogin");
    //     let btnLogout = document.getElementById("btnLogout");

    //   if (localStorage.getItem("token")) {
    // btnLogin.classList.add("hide");
    // btnLogout.classList.remove("hide");

    // } else {
    // btnLogin.classList.remove("hide");
    // btnLogout.classList.add("hide");}

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
              <Link className="link" to="/login" id="btnLogin">
                Login
              </Link>
              <Link
                className="link"
                to="/"
                id="btnlogout"
                // className="hide"
                // onClick={this.logout()}
              >
                Logout
              </Link>
              <Link className="link" to="/protected">
                User Page
              </Link>
              <Link className="link" to="/account">
                Account
              </Link>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
