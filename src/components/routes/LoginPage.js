import React, { Component } from "react";
import "../../CSS/login.css";
import { Route, Link } from "react-router-dom";
import Signup from "./SignupPage";
import axios from "axios";
import LoggedInUser from "../UserInfo/LoggedInUser";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default class Login extends Component {
  state = {
    credentials: {
      username: "",
      password: "",
      id: "",
      avatar: ""
    }
  };

  loginData = creds => {
    // console.log(creds)
    return axios
      .post("https://web17-artfolio.herokuapp.com/api/account/login", creds)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("username", res.data.username);
        localStorage.setItem("id", res.data.id);
        localStorage.setItem("avatar", res.data.avatar);
        // console.log(res.data);
        this.setState({
          ...this.state,
          username: res.data.username,
          password: res.data.password,
          id: res.data.id,
          avatar: res.data.avatar
        });
      })
      .catch(err => console.log(err));
  };

  handleChange = e => {
    // e.preventDefault();
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    this.loginData(this.state.credentials).then(() => {
      this.props.history.push("/protected");
    });
  };

  render() {
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
            <TextField
              id="standard-dense"
              label="Username"
              className="signupInput"
              margin="dense"
              name="username"
              onChange={this.handleChange}
            />

            <TextField
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              margin="normal"
              onChange={this.handleChange}
              name="password"
            />

            <button className="btnholder">
              <Button
                variant="contained"
                color="primary"
                className="formButton"
              >
                Login
              </Button>
            </button>
          </form>
        </div>
        <Route
          render={() => (
            <LoggedInUser
              username={this.state.username}
              password={this.state.password}
              id={this.state.id}
              avatar={this.state.avatar}
            />
          )}
        />

        <Route exact path="/signup" component={Signup} />
      </div>
    );
  }
}
