import React, { Component } from "react";
import "../../CSS/signup.css";
import { Route, Link } from "react-router-dom";
import Login from "./LoginPage";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default class Signup extends Component {
  state = {
    credentials: {
      avatar: "",
      email: "",
      username: "",
      password: "",
      errors: []
    }
  };

  registerData = creds => {
    console.log(creds);
    return axios
      .post("https://web17-artfolio.herokuapp.com/api/account/register", creds)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("username", res.data.username);
        localStorage.setItem("id", res.data.id);
        localStorage.setItem("avatar", res.data.avatar);
        console.log(res.data);
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
    this.registerData(this.state.credentials).then(() => {
      this.props.history.push("/protected");
    });
  };

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
          <h1 className="signupheader">Sign up</h1>
          <form className="signupForm" onSubmit={this.login}>
            <TextField
              id="standard-dense"
              label="Email"
              className="signupInput"
              margin="dense"
              onChange={this.handleChange}
              name="email"
            />

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
                Signup
              </Button>
            </button>
          </form>
        </div>
        <Route path="/login" component={Login} />
      </div>
    );
  }
}
