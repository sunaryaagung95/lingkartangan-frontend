import React, { Component } from "react";
import hal4 from "./../../assets/landing/hal4.png";

class Landing3 extends Component {
  render() {
    return (
      <div className="bg-light">
        <div className="row">
          <div className="col-sm-5 text-center">
            <h2 className="display-4 mt-5">Launching Soon</h2>
            <h4 className="mt-5">Berikan Tanggapanmu</h4>

            <div className="col-8 mx-auto p-3">
              <a
                className="btn btn-primary btn-block"
                href="https://forms.gle/ycBUJdhfNcJWNo1j6"
                target="_blank"
              >
                Tulis
              </a>
            </div>
          </div>
          <div className="col-sm text-center">
            <img src={hal4} alt="hal4" className="img-fluid" />
          </div>
        </div>
      </div>
    );
  }
}

export default Landing3;
