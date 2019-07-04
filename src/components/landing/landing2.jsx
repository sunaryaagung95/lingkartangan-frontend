import React, { Component } from "react";
import hal2 from "./../../assets/landing/hal2.png";
import hal3 from "./../../assets/landing/hal3.png";
import hal3A from "./../../assets/landing/hal3A.png";
import hal3B from "./../../assets/landing/hal3B.png";
import hal3C from "./../../assets/landing/hal3C.png";

class Landing2 extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="row bg-light">
          <div className="col-sm">
            <h1 className="display-5 mt-5 mb-0">Apa Itu Lingkar Tangan</h1>
            <p className="lead mt-4">
              Sebuah platform online dimana semua komunitas bisa saling
              terhubung, dan saling bekerja sama untuk kemajuan bersama
            </p>
          </div>
          <div className="col-sm">
            <img src={hal2} alt="hal2" className="img-fluid mt-1" />
          </div>
        </div>

        <div className="row align-items-center bg-light">
          <div className="col-sm">
            <h1 className="display-4">Satu Tempat Bisa Semuanya</h1>
          </div>

          <div className="col-sm">
            <div className="row text-center">
              <div className="col-sm p-0">
                <img src={hal3} alt="hal3" className="img-fluid mt-5" />
                <p className="mb-0">
                  <b>Community Page</b>
                </p>
                <p className="text-center"> Gk perlu lagi bikin web sendiri</p>
                <img src={hal3A} alt="hal3A" className="img-fluid mt-3" />

                <p className="mt-3">
                  <b>Community Feeds</b>
                </p>
                <p className="mb-0"> Ceritain kegiatan komunitas</p>
                <p>tanpa blog masing-masing</p>
              </div>

              <div className="col-sm p-0">
                <img src={hal3B} alt="hal3B" className="img-fluid mt-5" />
                <p className="mt-3 mb-0">
                  <b>Fundraising</b>
                </p>
                <p className="mb-0">Bisa patungan buat menutup kekurangan</p>
                <img src={hal3C} alt="hal3C" className="img-fluid" />
                <p>
                  <b>Eventbase</b>
                </p>
                <p> Bisa bekerjasama bikin event bareng-bareng</p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Landing2;
