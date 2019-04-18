import React, { Component } from "react";
import "../../CSS/nav.css";
import { Link } from "react-router-dom";
import account from "../../Images/account.png";
import home from "../../Images/home.png";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navDiv">
        <nav>
          <div>
            <Link className="link home " to="/">
              Artfolio
              {/* <img src={logo} alt="" className="logo"/> */}
            </Link>
          </div>
          <div>
            {/* <Link 
              className="link login"
              to="/login">
                Login
              </Link> */}
            <Link className="link login" to="/">
              <img src={home} alt="" className="home-logo" />
            </Link>
            <Link className="link login" to="/login">
              <img src={account} alt="" className="account-logo" />
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}
