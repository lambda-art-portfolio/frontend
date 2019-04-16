import React, { Component } from 'react'
import axios from "axios"


export default class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: "",
      picture:"",
      description:""
    }
  }

addPost = e => {
axios
.post("https://web17-artfolio.herokuapp.com/api/posts/add")
}


  render() {
    return (
      <div>
        new post
<form>
  <input 
  placeholder="image url"/>
  <input 
  placeholder="description"
  />
  <button>Post</button>
</form>
      
      </div>
    )
  }
}
