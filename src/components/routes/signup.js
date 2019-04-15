import React, { Component } from "react";
import "../../CSS/signup.css";
import { Route, Link } from "react-router-dom";
import Login from "./Login";

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credentails: {
        email: "",
        username: "",
        password: "",
        errors: []
      }
    };
  }

  showValidationErr(e, msg) {
    this.setState(prevState => ({
      errors: [...prevState.credentails.errors, { e, msg }]
    }));
  }
  clearValidationErr(e) {
    this.setState(prevState => {
      let newArr = [];
      for (let err of prevState.credentails.errors) {
        if (e !== err.e) {
          newArr.push(err);
        }
      }
      return newArr;
    });
  }

  onUsernameChange(e) {
    this.setState.credentails({ username: e.target.value });
    this.clearValidationErr("username");
  }
  onEmailChange(e) {
    this.setState.credentails({ email: e.target.value });
    this.clearValidationErr("email");
  }
  onPasswordChange(e) {
    this.setState.credentails({ password: e.target.value });
    this.clearValidationErr("password");
  }

  register() {
    // console.log('this.state', this.state)
    if (this.state.credentails.email === "") {
      return this.showValidationErr("username", "Username cannot be empty")
    } else  if (this.state.credentails.username === "") {
      return this.showValidationErr("username", "Username cannot be empty")
    }else  if (this.state.credentails.password === "") {
      return this.showValidationErr("username", "Username cannot be empty")
    }
  }



  render() {
    let usernameErr= null,
    passwordErr= null,
    emailErr= null;

    for(let err of this.state.credentails.errors) {
      if(err.e ==="username") {
        usernameErr = err.msg;
      } if (err.e ==="email") {
        emailErr = err.msg;
      } if (err.e ==="password") {
        passwordErr = err.msg;
      }

    }

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
          <form className="signupForm">
            <input
              className="signupInput"
              type="text"
              name="email"
              placeholder="Email"
              // value=''
              onChange={this.onEmailChange}
            />
            <p>{emailErr ? emailErr : "" }</p>
            <input
              className="signupInput"
              type="text"
              name="username"
              placeholder="Username"
              // value=''
              onChange={this.onUsernameChange}
            />
            <p>{usernameErr ? usernameErr : "" }</p>
            <input
              className="signupInput"
              type="password"
              name="password"
              placeholder="Password"
              // value=''
              onChange={this.onPasswordChange}
            />
            <p>{passwordErr ? passwordErr : "" }</p>
            {/* <Link to="/login"> */}
            <button
              className="formButton"
               onClick={this.register}
            >
              Signup
            </button>
            {/* </Link> */}
          </form>
        </div>
        <Route path="/login" component={Login} />
      </div>
    );
  }
}
