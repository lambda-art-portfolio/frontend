import React, { Component } from "react";
// import { Links, Route } from "react-router-dom";
import "./CSS/App.css";
import Navbar from "./components/navigation/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        
      </div>
    );
  }
}

export default App;
