import React, { Component } from 'react'
import "../../CSS/accountpage.css"
import axios from 'axios'

class UserInfo extends Component {
    state = {
        credentials: []
    }



    updateUser = e => {
      // e.preventDefault();
      axios
        .put(
          `https://web17-artfolio.herokuapp.com/api/posts/edit/${
            this.props.id
          }`,
          this.state
        )
        .then(res => {
          this.setState({ posts: res.data });
          console.log(res);
          // this.history.push('/');
        })
        .catch(err => {
          console.log(err);
        });
      this.setState({
        picture: "",
        description: ""
      });
    };



  render() {
    return (
      <div>
        user account
      </div>
    )
  }
}

export default UserInfo
