import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import NavBar from "./navBar";
import hal4 from "./../assets/landing/hal4.png";

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div
          className="container bg-light text-center
        "
        >
          <h1 className="mt-3 p-5 lead-1">
            Preparing a New Surprise Please Come Again Later
          </h1>
          <img src={hal4} alt="" className="img-fluid" />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
