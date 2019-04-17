import React, { Component } from "react";
import { Link } from "react-router-dom";
// import PostPage from "./PostPage";

import Post from "./Posts";
import "../../CSS/postgrid.css";

export default class PostGrid extends Component {
  render(props) {
    return (
      <div className="postGrid">
        {this.props.posts
          .slice(0)
          .reverse()
          .map(post => {
            return (
              <Link
              to={`/post/${post.id}`}
              key={post.id}
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
            );
          })}

        {/* <Route
          path="/:id"
          render={props => (
            <PostPage
              updateItem={props.updateItem}
              username={props.username}
              id={props.id}
              description={props.description}
              picture={props.picture}
              upvotes={props.upvotes}
              key={props.id}
              {...props}
            />
          )}
        /> */}
      </div>
    );
  }
}
