import React, { Component } from 'react';
import PostGrid from '../gallery/PostsGrid';
import "../../CSS/homepage.css"
import axios from 'axios'

 class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []

    };
  }
  componentDidMount() {
    axios
      .get("https://web17-artfolio.herokuapp.com/api/posts/")
      .then(res => {
        (this.setState({posts:res.data}))
        // console.log(res.data)
      })
      .catch(err => console.log(err));
     
    }

    render() {
      // console.log(this.res.data)
      return (
        <div className="homegrid">
          <PostGrid posts={this.state.posts}/>
     
        </div>
      )
    }
  }

export default Homepage