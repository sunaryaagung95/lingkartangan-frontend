import React, { Component } from "react";
import Landing1 from "./landing/landing1";
import Landing2 from "./landing/landing2";
import Footer from "./landing/footer";

class Landing extends Component {
  render() {
    return (
      <React.Fragment>
        <Landing1 />
        <div className="container">
          <Landing2 />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Landing;
