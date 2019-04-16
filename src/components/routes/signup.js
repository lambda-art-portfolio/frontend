import React, { Component } from "react";
import "../../CSS/signup.css";
import { Route, Link } from "react-router-dom";
import Login from "./login";
import axios from 'axios'

export default class Signup extends Component {
  // constructor(props) {
  //   super(props);
   state = {
      credentials: {
        avatar:'',
        email: "",
        username: "",
        password: "",
        errors: []
      }
    };
  // }
  registerData = creds => {
    console.log(creds)
    return axios
      .post("https://web17-artfolio.herokuapp.com/api/account/register", creds)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        console.log(res.data)
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
    this.registerData(this.state.credentials)
    .then(() => {
      this.props.history.push("/protected");
    });
  };
  

  register() {

  }



  render() {
    // let usernameErr= null,
    // passwordErr= null,
    // emailErr= null;

    // for(let err of this.state.credentials.errors) {
    //   if(err.e ==="username") {
    //     usernameErr = err.msg;
    //   } if (err.e ==="email") {
    //     emailErr = err.msg;
    //   } if (err.e ==="password") {
    //     passwordErr = err.msg;
    //   }

    // }

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
          <form 
          className="signupForm"
          onSubmit={this.login} 
          >
            <input
              className="signupInput"
              type="text"
              name="email"
              placeholder="Email"
              // value=''
              onChange={this.handleChange}
            />
             <input
              className="signupInput"
              type="text"
              name="avatar"
              placeholder="Avatar"
              // value=''
              onChange={this.handleChange}
            />
            <input
              className="signupInput"
              type="text"
              name="username"
              placeholder="Username"
              // value=''
              onChange={this.handleChange}
            />
            <input
              className="signupInput"
              type="password"
              name="password"
              placeholder="Password"
              // value=''
              onChange={this.handleChange}
            />
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
