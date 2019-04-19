import React, { Component } from "react";
import "../../CSS/protectedroute.css";
import PostForm from "../gallery/NewPostForm";
import axios from "axios";
import UserPostsGrid from "../gallery/UserPostsgrid";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      postOpen: false
    };
  }
  componentDidMount() {
    axios
      .get("https://web17-artfolio.herokuapp.com/api/posts/")
      .then(res => {
        this.setState({ posts: res.data });
        // console.log(res.data)
      })
      .catch(err => console.log(err));
  }

  // new post handles
  handleClickOpenPost = () => {
    this.setState({ postOpen: true });
  };

  handleClosePost = () => {
    this.setState({ postOpen: false });
  };

  render() {
    return (
      <div className="userpage">
        <div className="gridAndForm">
          <div className="gridcontainer">
            <UserPostsGrid posts={this.state.posts} />
          </div>
          <div className="postcontainer">


          <div className="post-button">
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleClickOpenPost}
            >
              New Post
            </Button>
            <Dialog
              onClose={this.handleClosePost}
              aria-labelledby="customized-dialog-title"
              open={this.state.postOpen}
            >
              <Button onClick={this.handleClosePost} color="secondary">
                Cancel
              </Button>

              <PostForm />
            </Dialog>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserPage;
