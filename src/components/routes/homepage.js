import React, { Component } from 'react';
import PostGrid from '../gallery/PostGrid';
import "../../CSS/homepage.css"
export default class Homepage extends Component {
  render() {
    return (
      <div className="homegrid">
        <PostGrid />
      </div>
    )
  }
}
