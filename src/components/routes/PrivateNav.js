import React from "react";
import { Route } from "react-router-dom";
import Navbar from "../navigation/Navigationbar";

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
