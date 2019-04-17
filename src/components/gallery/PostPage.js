import React, { Component } from "react";
import axios from "axios";
import "../../CSS/postpage.css";

class PostPage extends Component {
  state = {
    avatar: "",
    description: "",
    id: "",
    picture: "",
    upvotes: "",
    username: ""
  };

  componentDidMount() {
    axios
      .get(
        `https://web17-artfolio.herokuapp.com/api/posts/post/${
          this.props.match.params.id
        }`
      )
      .then(res => {
        this.setState({
          ...this.state,
          username: res.data.username,
          id: res.data.id,
          avatar: res.data.avatar,
          picture: res.data.picture,
          upvotes: res.data.upvotes,
          description: res.data.description
        });
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="postpage-container">
        <div className="picture-div">
          <img src={this.state.picture} alt="" />
        </div>
        <div className="info-div">
          <div className="user-info-div">
            <div>
              <img src={this.state.avatar} alt="" />
            </div>
            <h1>User: {this.state.username}</h1>
          </div>
          <button>Links: {this.state.upvotes}</button>
          <div className="description-div">
            <h1>Description: </h1>
            <p>{this.state.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default PostPage;
