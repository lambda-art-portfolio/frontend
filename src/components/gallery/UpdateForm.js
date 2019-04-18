import React, { Component } from "react";
import axios from "axios";
// import "../../CSS/postform.css"
import Button from "@material-ui/core/Button";
import "../../CSS/updateform.css";
import DialogContent from "@material-ui/core/DialogContent";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

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
        `https://web17-artfolio.herokuapp.com/api/posts/edit/${this.props.id}`,
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
      <div>
        <DialogContent>
          <form onSubmit={this.updatePost}>
            {/* <input
              onChange={this.handleChange}
              placeholder="image url"
              value={this.state.picture}
              name="picture"
            /> */}
            <TextField
              id="standard-dense"
              label="Dense"
              margin="image url"
              value={this.state.picture}
              onChange={this.handleChange}
              name="picture"
            />
            {/* <textarea
              rows="5"
              placeholder="description"
              onChange={this.handleChange}
              value={this.state.description}
              name="description"
              // className="description"
            /> */}
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
            <div>
              <Button
                onClick={this.handleCloseUpdate}
                color="primary"
                type="submit"
              >
                Save changes
              </Button>
            </div>
          </form>
        </DialogContent>
      </div>
    );
  }
}
