import React, { Component } from "react";
import "../../CSS/signup.css";
import { Route, Link } from "react-router-dom";
import Login from "./Login";

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state={
      credentails: {
        email:"",
        username:"",
        password:"",
        
      }
    }
  }

  register() {
  
    // console.log('this.state', this.state)
  }

  render() {
    return (
      <div className="signupContainer">
        <div className="buttonContainer">
          <Link to="/login" className="topButton">
            <button>Login</button>
          </Link>
          <button className="selected topButton">Signup</button>
        </div>

        <div className="formContainer">
          <h1>Sign up</h1>
          <form className="signupForm"
          >
            <input
              className="signupInput"
              type="text"
              name="email"
              placeholder="Email"
              // value=''
              // onChange=''
            />
            <input
              className="signupInput"
              type="text"
              name="username"
              placeholder="Username"
              // value=''
              // onChange=''
            />
            <input
              className="signupInput"
              type="password"
              name="passwprd"
              placeholder="Password"
              // value=''
              // onChange=''
            />
            {/* <Link to="/login"> */}
              <button className="formButton"
              //  onClick=''
              >Signup</button>
            {/* </Link> */}
          </form>
        </div>
        <Route path="/login" component={Login} />
      </div>
    );
  }
}
