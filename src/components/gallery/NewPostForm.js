import React, { Component } from "react";
import axios from "axios";
import "../../CSS/postform.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


export default class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: localStorage.getItem("token"),
      picture: "",
      description: "",
      selectedfile: null
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
      description: "",
      selectedfile: null
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

            <TextField
              id="standard-dense"
              label="image url"
              margin="image url"
              value={this.state.picture}
              onChange={this.handleChange}
              name="picture"
            />
            <TextField
              onChange={this.handleChange}
              value={this.state.description}
              id="standard-multiline-static"
              label="description"
              multiline
              rows="5"
              margin="normal"
              name="description"
            />
            <Button
              onClick={this.handleCloseUpdate}
              variant="contained"
              color="primary"
              type="submit"
            >
              Post
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
