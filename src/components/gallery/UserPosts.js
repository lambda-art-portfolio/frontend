import React from "react";
import "../../CSS/post.css";


const UserPosts = props => {

  let showOption = localStorage.username === props.username ? "" :"hide";

  return (
    <div className={showOption}>
    <div className="post" >
 
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

    </div>
  );
};

UserPosts.defaultProps = {
  username: "",
  id: "",
  description: "",
  picture: "",
  upvotes: ""
};

export default UserPosts;
