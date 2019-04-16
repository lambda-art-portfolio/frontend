import React, { Component } from "react";
import "../../CSS/nav.css";
import { Link } from "react-router-dom";

export default class Navbar extends Component {

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
            <div>
              <Link 
              className="link"
              to="/login">
                Login
              </Link>

            </div>
          </nav>
        </div>
      </div>
    );
  }
}
