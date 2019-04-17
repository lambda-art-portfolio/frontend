import React, { Component } from "react";
import notfound from "../../Images/notfound.gif";
import {Link} from 'react-router-dom'
export default class NotFound extends Component {
  render() {
    return (
      <div className="errorpage">
        <div>
          <h1 className="error">"404 NOT FOUND"</h1>
          <p className="error">Looks like the page you requested does not exist </p>
            <Link className="error" to="/"><button className="returnhome">Return to Homepage</button></Link>
        </div>
        <img src={notfound} alt="" />
      </div>
    );
  }
}
