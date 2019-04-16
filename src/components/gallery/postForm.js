import React, { Component } from 'react'

export default class PostForm extends Component {
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
