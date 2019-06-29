import React, { Component } from "react";
import logo from "./../assets/landing/logo.png";
import hal2 from "./../assets/landing/hal2.png";
import hal3 from "./../assets/landing/hal3.png";
import hal3A from "./../assets/landing/hal3A.png";
import hal3B from "./../assets/landing/hal3B.png";
import hal3C from "./../assets/landing/hal3C.png";
import hal4 from "./../assets/landing/hal4.png";
import logo2 from "./../assets/landing/logo2.png";

class Landing extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          {/* page */}
          <div className="row">
            <div className="col-sm">
              <img src={logo} alt="landing" className="img-fluid mt-4" />
            </div>
          </div>

          {/* page 2 */}
          <div className="row">
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

          <div className="row align-items-center">
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
                  <p className="text-center">
                    {" "}
                    Gk perlu lagi bikin web sendiri
                  </p>
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

          {/* page 3 */}
          <div className="row">
            <div className="col-sm-5 text-center">
              <h2 className="display-4 mt-5">Launching Soon</h2>
              <h4 className="mt-5">Berikan Tanggapanmu</h4>

              <div className="col-8 mx-auto p-3">
                {/* <form onSubmit={this.handleSubmit}> */}
                {/* <form
                  action="https://mailthis.to/sunaryaagung95@gmail.com"
                  method="POST"
                >
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="uname"
                      placeholder="Name"
                    />
                  </div>

                  <div className="form-group text-center">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                    />
                    <input
                      type="submit"
                      value="Send"
                      className="btn btn-primary mt-2 btn-block "
                    />
                  </div>
                  
                </form> */}
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
        <div id="footer" className="container-fluid bg-primary mt-5">
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
      </React.Fragment>
    );
  }
}

export default Landing;
