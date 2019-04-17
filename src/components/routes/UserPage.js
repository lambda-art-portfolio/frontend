import React, { Component } from "react";
import "../../CSS/protectedroute.css";
import PostForm from "../gallery/NewPostForm";
import axios from 'axios'
import UserPostsGrid from '../gallery/UserPostsgrid'
class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []

    };
  }
  componentDidMount() {
    axios
      .get("https://web17-artfolio.herokuapp.com/api/posts/")
      .then(res => {
        (this.setState({posts:res.data}))
        // console.log(res.data)
      })
      .catch(err => console.log(err));
    }

  render() {
    return (
      <div className="userpage">
        <div className="gridAndForm">
        <div className="gridcontainer">
          <UserPostsGrid posts={this.state.posts}  />
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
