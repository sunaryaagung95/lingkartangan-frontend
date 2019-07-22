import React, { Component } from "react";
import logo2 from "./../../assets/landing/logo2.png";

class Footer extends Component {
  render() {
    return (
      <div>
        <div id="footer" className="container-fluid bg-primary">
          <div className="row">
            <div className="col-sm" />

            <div className="col-sm">
              <img src={logo2} alt="logo2" className="img-fluid my-3" />
            </div>
            <div className="col-sm-4" />
          </div>

          <div className="row">
            <div className="col-sm-4" />
            <div className="col-sm-4">
              <p className="text-center" style={{ color: "white" }}>
                Komplek Nusantara Golden Blok B No. 10, Tlk Tering, Kec. Batam
                Kota, Kota Batam Indonesia
              </p>
              <p className="text-center mb-0" style={{ color: "white" }}>
                lingkartangan@gmail.com
              </p>
              <div className="btn-group-lg text-center">
                <a
                  href="https://www.instagram.com/lingkartanganid/?hl=id"
                  className="btn"
                >
                  <i
                    className="fa fa-instagram fa-10x mx-auto"
                    style={{ color: "white" }}
                  />
                </a>
                <a
                  href="https://www.instagram.com/lingkartanganid/?hl=id"
                  className="btn"
                >
                  <i
                    className="fa fa-facebook fa-10x"
                    style={{ color: "white" }}
                  />
                </a>
                <a
                  href="https://www.instagram.com/lingkartanganid/?hl=id"
                  className="btn"
                >
                  <i
                    className="fa fa-youtube fa-10x"
                    style={{ color: "white" }}
                  />
                </a>
              </div>
            </div>
            <div className="col-sm-4" />
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
