import React, { Component } from 'react'
import UserInfo from "../routes/UserInfo"
import {Route} from 'react-router-dom'
export default class LoggedInUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
          username: props.username,
          password: props.password,
          id: props.id,
          avatar: props.avatar
        }
      }

  render() {
    return (
      <div>
        <Route
          path="/update-item"
          render={() => (
            <UserInfo
            username={this.state.username}
            password={this.state.password}
            id={this.state.id}
            avatar={this.state.avatar}
            />
          )}
        />

      </div>
    )
  }
}
