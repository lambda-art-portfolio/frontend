import React, { Component } from "react";
import axios from "axios";
import "../../CSS/postpage.css";
import UpdateForm from "../gallery/UpdateForm";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";

class PostPage extends Component {
  state = {
    token: localStorage.getItem("token"),
    avatar: "",
    description: "",
    id: "",
    picture: "",
    upvotes: "",
    username: "",
    deleteopen: false,
    updateopen: false
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
    const config = {
      method: "delete",
      url: `https://web17-artfolio.herokuapp.com/api/posts/${
        this.props.match.params.id
      }`,
      headers: {
        Authorization: this.state.token
      }
    };

    axios(config)
      .then(() => {
        this.props.history.push("/protected");
      })
      .catch(err => {
        console.log(err);
      });
  };

  clickLike = () => {
    axios
      .put(`https://web17-artfolio.herokuapp.com/api/posts/upvote/`, {
        id: this.props.match.params.id,
        token: this.state.token
      })
      .then(
        this.setState({
          upvotes: this.state.upvotes + 1
        })
      );
  };

  showOption = () => {
    if (localStorage.username === this.state.username) {
      return " ";
    } else {
      return "hide";
    }
  };
  // delete handles
  handleClickOpenDelete = () => {
    this.setState({ deleteopen: true });
  };

  handleCloseDelete = () => {
    this.setState({ deleteopen: false });
  };
  // update handles
  handleClickOpenUpdate = () => {
    this.setState({ updateopen: true });
  };

  handleCloseUpdate = () => {
    this.setState({ updateopen: false });
  };
  // change handles
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
          <div className="top-info">
            <div className="user-info-div">
              <div className="avatar">
                <img src={this.state.avatar} alt="" />
              </div>
              <h1>User: {this.state.username}</h1>
            </div>
            <Button
              className="likes"
              variant="outlined"
              color="primary"
              onClick={this.clickLike}
            >
              Likes: {this.state.upvotes}
            </Button>
          </div>
          <div className="description-div">
            <p>{this.state.description}</p>
          </div>
        </div>

        <div className={this.showOption()}>
          <div className="button-container">
            <div>
              <Button
                variant="contained"
                color="secondary"
                onClick={this.handleClickOpenDelete}
              >
                delete
              </Button>
              <Dialog
                open={this.state.deleteopen}
                onClose={this.handleCloseDelete}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Are you sure you want to delete?"}
                </DialogTitle>

                <DialogActions>
                  <Button onClick={this.handleCloseDelete} color="primary">
                    Cancel
                  </Button>
                  <Button
                    onClick={this.deletePost}
                    variant="contained"
                    color="secondary"
                    autoFocus
                  >
                    Delete
                  </Button>
                </DialogActions>
              </Dialog>
            </div>

            <div className="update-button">
              <Button
                variant="contained"
                color="primary"
                onClick={this.handleClickOpenUpdate}
              >
                Update
              </Button>
              <Dialog
                onClose={this.handleCloseUpdate}
                aria-labelledby="customized-dialog-title"
                open={this.state.updateopen}
              >
                <Button onClick={this.handleCloseUpdate} color="secondary">
                  Cancel
                </Button>
                <UpdateForm id={this.props.match.params.id} />
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostPage;
