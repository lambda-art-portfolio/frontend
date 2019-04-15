import React, { Component } from 'react'
import "../../CSS/accountpage.css"

class UserInfo extends Component {
    state = {
        credentails: {
            email: "",
            username: "",
            password: ""
          }
    }
  render() {
    return (
      <div>
        user account
      </div>
    )
  }
}

export default UserInfo
