import React, { Component } from 'react'
import {Route, Link} from 'react-router-dom'
import homepage from '../routes/homepage';
import login from '../routes/login';

export default class navbar extends Component {
  render() {
    return (
      <div>
        <ul>
            <li>

            </li>
            <li>

            </li>
        </ul>
        <Route path="/login" component={login} />
        <Route path="/" component={homepage} />
      </div>
    )
  }
}
