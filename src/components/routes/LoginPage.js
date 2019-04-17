import React, { Component } from "react";
import "../../CSS/login.css";
import { Route, Link } from "react-router-dom";
import Signup from "./SignupPage";
import axios from "axios";

export default class Login extends Component {
  // constructor(props) {
  //   super(props);
  //   this.
  // }
state = {
      credentials: {
        username: "",
        password: "",
        id:"",
        avatar:"",
      }
    };
    
  loginData = creds => {
    // console.log(creds)
    return axios
      .post("https://web17-artfolio.herokuapp.com/api/account/login", creds)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        // console.log(res.data);
        this.setState({
          ...this.state,
          username: res.data.username,
          password: res.data.password,
          id: res.data.id,
          avatar: res.data.avatar,
        })
      })
      .catch(err => console.log(err)); 
  };


  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
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
    console.log(this.state.credentails)
    // console.log(this.state.credentials)
    console.log(this.state);
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
              value=
              {this.state.credentials.username}
              onChange={this.handleChange}
            />

            <input
              className="loginInput"
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.credentials.password}
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
