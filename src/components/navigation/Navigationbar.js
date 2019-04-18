import React, { Component } from "react";
import "../../CSS/nav.css";
import { Link } from "react-router-dom";
// import logo from '../../logo.png'
export default class Navbar extends Component {

  render() {
    return (
      
        <div className="navDiv">

          <nav>
            <div>
              <Link className="link home " to="/">
              home
               {/* <img src={logo} alt="" className="logo"/> */}
              </Link>
            </div>
            <div>
              <Link 
              className="link login"
              to="/login">
                Login
              </Link>

            </div>
          </nav>
        </div>
      
    );
  }
}
