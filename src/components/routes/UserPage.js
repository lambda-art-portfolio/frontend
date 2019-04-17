import React, { Component } from "react";
import "../../CSS/protectedroute.css";
import PostForm from "../gallery/PostForm";
// import PostGrid from "../gallery/PostGrid";
import Homepage from '../routes/Home'
// import {Route, Link} from "react-router-dom";

class UserPage extends Component {
  render() {
    return (
      <div className="userpage">
        <div className="gridAndForm">
        <div className="gridcontainer">
          <Homepage />
          </div>
          <div className="postcontainer">
          <PostForm />
          </div>
        </div>
      </div>
    );
  }
}

export default UserPage;
