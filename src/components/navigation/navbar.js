import React, { Component } from "react";
import "../../CSS/nav.css";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
constructor() {
  super();
  this.state= {
    hideNav:false
  }
}

handleChange(e) {
  this.setState({hideNav: true})
}

  logout = () => {
    localStorage.removeItem("token");
  };



  loggedIn = () => {
    if (localStorage.getItem("token")) {
      return "link hide";
    } else {
      return "link ";
    }
  };

   

  loggedOut = () => {
    if (localStorage.getItem("token")) {
      return "link ";
    } else {
      return "link hide";
    }
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
              <Link 
              className={this.loggedIn()} 
              to="/login">
                Login
              </Link>

              <Link 
              className={this.loggedOut()} 
              to="/protected">
                User Page
              </Link>

              <Link 
              className={this.loggedOut()} 
              to="/account">
                Account
              </Link>
              <Link
                to="/"
                className={this.loggedOut()}
                onClick={this.logout}
              >
                Logout
              </Link>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
