import React, { Component } from "react";
import axios from "axios";
import "../../CSS/postpage.css";
import UpdateForm from "../gallery/UpdateForm";

class PostPage extends Component {
  state = {
    token: localStorage.getItem("token"),
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

  deletePost = () => {
    axios
      .delete(
        `https://web17-artfolio.herokuapp.com/api/posts/${
          this.props.match.params.id
        }`
      )
      .then(() => {
        this.props.history.push("/protected");
      });
  };

  clickLike = () => {
    axios
    .put(`https://web17-artfolio.herokuapp.com/api/posts/upvote/`, {
      id: this.props.match.params.id,
      token: this.state.token
    })
    .then(
      
    )
  };

  showOption = () => {
    if (localStorage.username === this.state.username) {
      return " ";
    } else {
      return "hide";
    }
  };

  handleChange = e => {
    // e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

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
          <button onChange={this.handleChange} onClick={this.clickLike()}>
            Likes: {this.state.upvotes}
          </button>

          <div className="description-div">
            <h1>Description: </h1>
            <p>{this.state.description}</p>
          </div>

          <div className={this.showOption()}>
            <UpdateForm id={this.props.match.params.id} />
            <button onClick={this.deletePost}>delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default PostPage;
