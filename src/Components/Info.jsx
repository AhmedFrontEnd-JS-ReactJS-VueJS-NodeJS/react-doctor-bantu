import React from 'react';
import Vector from './images/Vector.png';
import group1 from './images/group 1.png';
import Vector2 from './images/Vector2.png';
import Datapage from './images/Data page-1 1.png';
import Beritapage from './images/Berita page 1.png';

const Info = () => {
  return (
   <>
    <div className="container">
    <div className="row mb-5 overflow-hidden mt-5">
      <div className="col-md-7 mb-5">
        <p className="customer-color-purple fw-bold fs-5">| Information</p>
        <h2 className="fs-1 fw-bold mb-5">
          Covid <span className="customer-color-purple fs-1"> information </span>
        </h2>

        <div className="col-md-10">
          <img src={Vector} alt="" className="pb-3" />
          <span className="fs-4 fw-bold ms-1 pt-2">Informasi tepat waktu</span>
          <br />
          <p className="ps-5">
            Informasi yang anda dapatkan selalu update oleh kami , karena kami
            mengutamakan informasi yang akurat dan cepat
          </p>
        </div>
        <div className="col-md-10 pt-3">
          <img src={group1} alt="" className="pb-3" />
          <span className="fs-4 fw-bold ps-1 pt-2">Informasi tepat waktu</span>
          <br />
          <p className="ps-5">
            Informasi yang anda dapatkan selalu update oleh kami , karena kami
            mengutamakan informasi yang akurat dan cepat
          </p>
        </div>
        <div className="col-md-10 pt-3">
          <img src={Vector2} alt="" className="pb-3" />
          <span className="fs-4 fw-bold ps-1 pt-2">Informasi tepat waktu</span>
          <br />
          <p className="ps-5">
            Informasi yang anda dapatkan selalu update oleh kami , karena kami
            mengutamakan informasi yang akurat dan cepat
          </p>
        </div>

        <div className="mt-5 ms-5">
          <a href="" className="ps-3 pt-2 pb-2 pe-3 rounded-3 text-decoration-none text-light custom-bg-purple">See demo</a>
        </div>
      </div>
      <div className="col-md-5 position-relative">
        <img src={Datapage} alt="" className="position-absolute pt-5 position-absolute end-0" />
        <img src={Beritapage} alt="" className="position-absolute" />
      </div>
    </div>
  </div>
   </>
  )
}

export default Info