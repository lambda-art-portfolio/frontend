import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./CSS/App.css";
import Navbar from "./components/navigation/Navbar";
import Homepage from "./components/routes/Homepage";
import Login from "./components/routes/Login";
import SignUp from "./components/routes/Signup";
import PrivateRoute from "./components/routes/PrivateRoute";
import UserPage from "./components/routes/UserPage";
import UserInfo from "./components/routes/UserInfo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <header className="App-header">
            <Navbar />
          </header>
          
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route exact path="/" component={Homepage} />
            <PrivateRoute path="/account" component={UserInfo} />
            <PrivateRoute path="/protected" component={UserPage} />
            <Route path="*" component={() => "404 NOT FOUND"} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
