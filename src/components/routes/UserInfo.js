import React, { Component } from 'react'
import "../../CSS/accountpage.css"
import axios from 'axios'

class UserInfo extends Component {
    state = {
        credentials: []
    }

    componentDidMount() {
    axios
      .get("https://web17-artfolio.herokuapp.com/api/account/")
      .then(res => {
        localStorage.setItem("token", res.data.token);
        console.log(res.data)
      })
      .catch(err => console.log(err));
     
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
