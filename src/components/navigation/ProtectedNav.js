import React, { Component } from "react";
import "../../CSS/nav.css";
import { Link } from "react-router-dom";
import account from "../../Images/account.png";
import logout from "../../Images/logout.png";
import home from "../../Images/home.png";


export default class ProtectedNav extends Component {
  logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
  };

  // (localStorage.getItem("token") ? "link hide" : "link")

  render() {
    return (
      <div>
        <div className="navDiv">
          <nav>
            <div>
              <Link className="link home" to="/">
                Artfolio
              </Link>
            </div>
            <div>{/* <input /> */}</div>
            <div>
              {/* <Link className="link user" to="/protected">
                User Page
              </Link> */}
              <Link className="link login" to="/">
                <img src={home} alt="" className="home-logo" />
              </Link>
              <Link className="link login" to="/protected">
                <img src={account} alt="" className="account-logo" />
              </Link>
              {/* <Link className="link account" to="/account">
                Account
              </Link> */}
              {/* <Link to="/" className="link logout" onClick={this.logout}>
                Logout
              </Link> */}
              <Link className="link login" to="/" onClick={this.logout}>
                <img src={logout} alt="" className="account-logo" />
              </Link>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
