import React from "react";
import { Route } from "react-router-dom";
import Navbar from "../navigation/Navbar";
// import NavBar from '../navigation/Navbar'

const PrivateNav = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem("token")) {
          return <Component {...props} />;
        } else {
          return <Navbar />;
        }
      }}
    />
  );
};

export default PrivateNav;
