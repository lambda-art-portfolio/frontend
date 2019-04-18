import React, { Component } from "react";
import axios from "axios";
import "../../CSS/postform.css"

export default class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: localStorage.getItem("token"),
      picture: "",
      description: ""
    };
  }

  addPost = e => {
    // e.preventDefault();
    axios
      .post("https://web17-artfolio.herokuapp.com/api/posts/add", this.state)
      .then(res => {
        this.setState({ posts: res.data });
        // console.log(res);
        // this.history.push('/');
      })
      .catch(err => {
        console.log(err);
      });
    this.setState({
      picture: "",
      description: ""
    });
  };

  handleChange = e => {
    // e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="postformdiv">
      <div className="container">
        <h1>New Post</h1>
        <form onSubmit={this.addPost}>
          <input
            onChange={this.handleChange}
            placeholder="image url"
            value={this.state.picture}
            name="picture"
          />
          <textarea rows="5" 
            placeholder="description"
            onChange={this.handleChange}
            value={this.state.description}
            name="description"
            className="description"
          />
          <button type="submit">Post</button>
        </form>
        </div>
      </div>
    );
  }
}
