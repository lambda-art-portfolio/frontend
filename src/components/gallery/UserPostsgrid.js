import React, { Component } from "react";
import { Link } from "react-router-dom";
// import PostPage from "./PostPage";

import UserPosts from "./UserPosts";
import "../../CSS/postgrid.css";

export default class userPostsGrid extends Component {

  showOption = () => {
    if (localStorage.username === this.props.posts.username ) {
      return " ";
    } else {
      return "";
    }
  }

  render(props) {
    // console.log(this.props.posts.username)
    return (
      <div className="postGrid">
        {this.props.posts
          .slice(0)
          .reverse()
          .map(post => {
            return (
              <div key={post.id}
              className={this.showOption()}>
              <Link
              to={`/post/${post.id}`}
              >
              <UserPosts
                // avatar={post.avatar}
                updateItem={post.updateItem}
                username={post.username}
                id={post.id}
                description={post.description}
                picture={post.picture}
                upvotes={post.upvotes}
                key={post.id}
              /> </Link>
              </div>
            );
          })}
      </div>
    );
  }
}
