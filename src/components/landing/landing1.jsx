import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "./../../assets/landing/logo2.png";
import magnifier from "./../../assets/landing/magnifier.png";
import colab from "./../../assets/landing/colab.png";
import goal from "./../../assets/landing/goal.png";
import logoBulat from "./../../assets/landing/logo-bulat.png";
import "./landing1.css";

class Landing1 extends Component {
  render() {
    return (
      <div className="container-fluid bg-primary">
        <div className="row text-center">
          <div className="col-md-6 m-4">
            <img src={logo} className="img-fluid mb-5" alt="logo" />

            <div>
              <img src={magnifier} className="img2 mb-2" alt="logo" />
              <p className="text-light lead">Temukan Komunitas yg kamu cari</p>
            </div>

            <div className="m-5">
              <img src={colab} className="img2 mb-2" alt="logo" />

              <p className="text-light lead">Saling share antar komunitas</p>
            </div>

            <div>
              <img src={goal} className="img2 mb-2" alt="logo" />
              <p className="text-light lead">
                Tumbuh bersama dengan saling bekerja sama
              </p>
            </div>
          </div>
          <div className="col bg-light text-center">
            <img src={logoBulat} alt="logoBulat" />
            <h1 className="mb-5">Lihat ada komunitas apa disekitarmu</h1>
            <h2 className="text-secondary mt-5">
              Bergabung bersama lingkar tangan
            </h2>
            <div className="row">
              <div className="col-sm-2" />
            </div>
            <form>

            {/* <NavLink to="/register"> */}
              <NavLink to="/">
                <button
                  type="button"
                  className="regis btn btn-outline-primary btn-lg mt-3"
                >
                  Register
                </button>
              </NavLink>
              {/* <NavLink to="/login"> */}
              <NavLink to="/">

                <button
                  type="button"
                  className="regis btn btn-outline-primary btn-lg mt-3"
                >
                  Login
                </button>
              </NavLink>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing1;
