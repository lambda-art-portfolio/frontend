import React from "react";
import "../../CSS/post.css";

const Post = props => {

  
  return (
    <div className="post">
      <div className="postie">
        <h3>{props.username}</h3>
        <button>Likes {props.upvotes}</button>
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
