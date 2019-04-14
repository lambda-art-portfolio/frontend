import React, { Component } from "react";
import "../../CSS/login.css";
import { Route, Link } from "react-router-dom";
import Signup from "./Signup";

export default class Login extends Component {
constructor() {
  super();
  this.state={
    credentails: {
      username:"",
      password:"",
      
    }
  }
}

  render() {
    return (
      <div className="loginContainer">
        <div className="buttonContainer">
          <button className="selected topButton">Login</button>

          <Link to="/signup" className="topButton">
            <button >Signup</button>
          </Link>
        </div>

        <div className="formContainer">
          <h1 className="loginheader">Log in</h1>
          <form className="loginForm">
            <input 
            className="loginInput"
            type="text"
            name="username"
            placeholder="Username"
            value=''
            onChange=''
            />
            <input 
            className="loginInput"
            type="password"
            name="password"
            placeholder="Password"
            value=''
            onChange=''
            />
            <button className="formButton">Login</button>
          </form>
        </div>
        <Route exact path="/signup" component={Signup} />
      </div>
    );
  }
}
