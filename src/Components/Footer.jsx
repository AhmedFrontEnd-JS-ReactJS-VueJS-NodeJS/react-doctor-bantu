import React from 'react'

const Footer = () => {
  return (
    <div className="container-fluid custom-bg-purple">
    <div className="container text-light p-3 pt-4 pb-2">
      <div className="row my-auto mx-auto pt-5">
        <div className="col-md-6">
          <ul className="text-decoration-none list-unstyled">
            <li><img src="_assets/images/Logo 2.svg" alt="" /></li>
            <li>
              <p className="w-50">
                Kami adalah aplikasi pelayanan masyarakat dalam kasus
                kesehatan terutama covid 19
              </p>
            </li>
            <li></li>
          </ul>
        </div>

        <div className="col-md-2">
          <ul className="text-decoration-none list-unstyled">
            <li className="fw-bold">Tentang Kami</li>
            <li>Tentang Kami</li>
            <li>Fitur</li>
          </ul>
        </div>
        <div className="col-md-2">
          <ul className="text-decoration-none list-unstyled">
            <li className="fw-bold">Perusahaan</li>
            <li>Tim Kami</li>
            <li>Mitra Kami</li>
          </ul>
        </div>
        <div className="col-md-2">
          <ul className="text-decoration-none list-unstyled">
            <li className="fw-bold">Dukungan</li>
            <li>Tim Kami</li>
            <li>Mitra Kami</li>
          </ul>
        </div>
      </div>
      <div className="row justify-content-end">
        <div className="col-md-6 pt-4 text-start ps-4">
          <i className="fa-brands fa-youtube"></i><i className="fa-brands fa-instagram ps-3"></i>
          <i className="fa-brands fa-facebook ps-3"></i>
        </div>
        <div className="col-md-6 pt-4 d-flex justify-content-end">
          <ul className="text-decoration-none list-unstyled">
            <li>copyright BantuWarga. All right reserved</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Footer