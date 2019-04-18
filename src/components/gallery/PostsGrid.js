import React, { Component } from "react";
import { Link } from "react-router-dom";


import Post from "./Posts";
import "../../CSS/postgrid.css";

export default class PostGrid extends Component {

  render() {
    // console.log(this.props.posts.username)
    return (
      <div className="postGrid">
        {this.props.posts
          .slice(0)
          .reverse()
          .map(post => {
            return (
              <div key={post.id}
              >
              <Link
              to={`/post/${post.id}`}
              >
              <Post
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
