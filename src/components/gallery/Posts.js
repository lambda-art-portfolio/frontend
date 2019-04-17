import React from "react";
import "../../CSS/post.css";
// import {Route, Link} from "react-router-dom"
// import PostPage from './PostPage'

const Post = props => {
  return (
    <div className="post">
 
      <div className="postie">
        {/* <img  src={props.avatar} alt="" /> */}
        <h3>{props.username}</h3>
        {/* <button>Likes {props.upvotes}</button> */}
      </div>
      <div className="imagediv">
        <img className="picture" src={props.picture} alt="" />
      </div>
      {/* <p className="description">{props.description}</p> */}


    </div>
  );
};

Post.defaultProps = {
  username: "",
  id: "",
  description: "",
  picture: "",
  upvotes: ""
};

export default Post;
