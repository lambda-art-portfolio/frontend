import React, { Component } from "react";
import "../../CSS/login.css";
import { Route, Link } from "react-router-dom";
import Signup from "./Signup";
import axios from "axios";

export default class Login extends Component {
  // constructor(props) {
  //   super(props);
  //   this.
  // }
state = {
      credentails: {
        username: "",
        password: ""
      }
    };
  loginData = creds => {
    return axios
      .post("http://localhost:5000/api/login", creds)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
      })
      .catch(err => console.log(err));
  };


  handleChange = e => {
    this.setState({
      credentails: {
        ...this.state.credentails,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    this.loginData(this.state.credentials)
    .then(() => {
      this.props.history.push("/protected");
    });
  };

  render() {
    // console.log(this.state.credentails.username)

    return (
      <div className="loginContainer">
        <div className="buttonContainer">
          <button className="selected topButton">Login</button>

          <Link to="/signup" className="topButton">
            <button>Signup</button>
          </Link>
        </div>

        <div className="formContainer">
          <h1 className="loginheader">Log in</h1>
          <form onSubmit={this.login} className="loginForm">
            <input
              className="loginInput"
              type="text"
              name="username"
              placeholder="Username"
              value={this.state.credentails.username}
              onChange={this.handleChange}
            />

            <input
              className="loginInput"
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.credentails.password}
              onChange={this.handleChange}
            />

            <button className="formButton">Login</button>
          </form>
        </div>
        <Route exact path="/signup" component={Signup} />
      </div>
    );
  }
}
