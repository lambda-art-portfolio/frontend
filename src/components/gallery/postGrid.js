import React, { Component } from 'react';
import axios from 'axios';
import Post from './Post'
import "../../CSS/postgrid.css"

export default class PostGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: {
      id:'',
      user_id: "",
      picture:'',
      description: '',
      upvotes:''

      },

    };
  }

    getData = () => { 
      axios
        .get("https://web17-artfolio.herokuapp.com/api/posts")
        .then(res => this.setState({ posts: res.posts}))
        .catch(err => console.log(err));
    }

    // componentDidMount() {
    //   this.getData()
    // }

  render() {
    // console.log(this.state.posts)
    return (
      <div className="postGrid">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    )
  }
}
