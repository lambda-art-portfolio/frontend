import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./CSS/App.css";
import Homepage from "./components/routes/Home";
import Login from "./components/routes/LoginPage";
import SignUp from "./components/routes/SignupPage";
import PrivateRoute from "./components/routes/PrivateRoute";
import UserPage from "./components/routes/UserPage";
import UserInfo from "./components/routes/UserInfo";
import ProtectedNav from "./components/navigation/ProtectedNav"
import PrivateNav from "./components/routes/PrivateNav";
import PostPage from './components/gallery/PostPage'
import NotFound from './components/routes/NotFound'

class App extends Component {


  render() {
    return (
      <div className="index">
      <div className="App">
        <div>
          <header className="App-header">
          <PrivateNav  path="/" component={ProtectedNav} />
          </header>
          
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route exact path="/" component={Homepage} />
            <PrivateRoute path="/account" component={UserInfo} />
            <PrivateRoute path="/protected" component={UserPage} />
            <Route exact path="/post/:id" component={PostPage} />

            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
