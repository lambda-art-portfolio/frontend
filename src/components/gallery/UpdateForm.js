import React, { Component } from "react";
import axios from "axios";
// import "../../CSS/postform.css"

export default class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: localStorage.getItem("token"),
      picture: "",
      description: ""
    };
  }
  updatePost = e => {
    // e.preventDefault();
    axios
      .put(
        `https://web17-artfolio.herokuapp.com/api/posts/edit/${
          this.props.id
        }`,
        this.state
      )
      .then(res => {
        this.setState({ posts: res.data });
        console.log(res);
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
      <div >
      <div >
        <form onSubmit={this.updatePost}>
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
            // className="description"
          />
          <div>
              <button type="submit">Update Post</button> 
          </div>
         
        </form>
        </div>
      </div>
    );
  }
}
