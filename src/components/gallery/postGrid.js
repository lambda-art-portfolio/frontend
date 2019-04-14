import React, { Component } from 'react';
import axios from 'axios';

export default class PostGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

    getData = () => { 
      axios
        .get("http://localhost:5000/api/data")
        .then(res => this.setState({ data: res.data }))
        .catch(err => console.log(err));
    }

    // componentDidMount() {
    //   this.getData()
    // }

  render() {
    console.log(this.state.data.username)
    return (
      <div>
        postGrid
      </div>
    )
  }
}
