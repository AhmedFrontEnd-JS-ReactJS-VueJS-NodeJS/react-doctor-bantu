import React from 'react';
import logo from './images/Logo 1.jpg';
import {  Link } from "react-router-dom";
import Logo from './images/Logo 1.jpg';

const Menu = () => {
  return (
    <div className="container-fluid">
    <div className="row justify-content-around shadow-sm">
      <div className="col-md-10">
        <nav className="navbar navbar-expand-lg text-center">
          <a className="navbar-brand" ><img src={logo} alt="" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ps-4">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item ps-4">
              <Link className="nav-link" aria-current="page" to="/about">About</Link>
              </li>
              <li className="nav-item ps-4">
              <Link className="nav-link" aria-current="page" to="/pricing">Pricing</Link>
              </li>
              <li className="nav-item ps-4">
              <Link className="nav-link" aria-current="page" to="/info">Info</Link>
              </li>
              <li className="nav-item ps-4">
              <Link className="nav-link" aria-current="page" to="/Contact">Contact</Link>
              </li>
            </ul>
            <button type="button" className="btn btn-primary custom-bg-purple">
              See Demo
            </button>
          </div>
          {/* <!-- <div className="col-md-2"> --> */}

          {/* <!-- </div> --> */}
        </nav>
      </div>
    </div>
  </div>

   
  )
}

export default Menu;