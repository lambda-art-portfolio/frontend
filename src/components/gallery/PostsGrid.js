import React, { Component } from "react";

import Post from "./Posts";
import "../../CSS/postgrid.css";

export default class PostGrid extends Component {
  render() {
    return (
      <div className="postGrid">
        {this.props.posts.slice(0).reverse().map(post => {
          return (
            <Post
              username={post.username}
              id={post.id}
              description={post.description}
              picture={post.picture}
              upvotes={post.upvotes}
              key={post.id}
            />
          );
        })}

        {/* <Post posts={this.state.posts}/> */}
      </div>
    );
  }
}
