import React from 'react'
import Group1 from './images/Group1.png';
import Group2 from './images/Group2.png';
import Group3 from './images/Group3.png';
import Group4 from './images/Group4.png';
import Group5 from './images/Group5.png';
import Group6 from './images/Group6.png';
// import Frame378 from './images/Frame378.png';

const About = () => {
  return (
  <>
    <div className="container">
    <div className="row">
      <div className="col-12 text-center mt-4">
        <h2>
          What's <span className="customer-color-purple"> Bantu Warga </span>
        </h2>
        <p>
          Aplikasi Bantu warga disini anda bisa melihat keadaan <br />
          pandemi covid di Indonesia dari penyebaran covid , berita , data
        </p>
      </div>
    </div>
    <div className="mb-5 pb-5"></div>
  </div>

    <div className="container">
    <div className="row justify-content-center align-items-center g-3">
      <div className="col-md-4 text-center">
        <div className="text-center ps-3 pe-3 pt-5 pb-5 shadow-lg rounded-4">
          <img src={Group1} alt="" />
          <h4 className="mt-3">Donasi uang</h4>
          <p className="ps-2 pe-2">
            Bantu teman - teman kita yang sedang mengalami kesulitan finansial
          </p>
        </div>
      </div>

      <div className="col-md-4 text-center">
        <div className="text-center ps-3 pe-3 pt-5 pb-5 shadow-lg rounded-4">
          <img src={Group2} alt="" />
          <h4 className="mt-3">Donasi uang</h4>
          <p className="ps-2 pe-2">
            Bantu teman - teman kita yang sedang mengalami kesulitan finansial
          </p>
        </div>
      </div>
      <div className="col-md-4 text-center">
        <div className="text-center ps-3 pe-3 pt-5 pb-5 shadow-lg rounded-4">
          <img src={Group3} alt="" />
          <h4 className="mt-3">Donasi alat medis</h4>
          <p className="ps-2 pe-2">
            Bantu para nakes yang sedang berjuang melawan pandemi
          </p>
        </div>
      </div>
       </div>
       <div className="row justify-content-center align-items-center mt-5 mb-5"> 
      <div className="col-md-4 text-center">
        <div className="text-center ps-3 pe-3 pt-5 pb-5 shadow-lg rounded-4">
          <img src={Group4} alt="" />
          <h4 className="mt-3">Donasi Vitamin</h4>
          <p className="ps-2 pe-2">
            Cek ketersediaan donor darah atau mau donor darah
          </p>
        </div>
      </div>
      <div className="col-md-4 text-center">
        <div className="text-center ps-3 pe-3 pt-5 pb-5 shadow-lg rounded-4">
          <img src={Group5} alt="" />
          <h4 className="mt-3">Cek vaksinasi</h4>
          <p className="ps-2 pe-2">
            Bantu teman - teman kita yang sedang mengalami kesulitan finansial
          </p>
        </div>
      </div>
      <div className="col-md-4 text-center">
        <div className="text-center ps-3 pe-3 pt-5 pb-5 shadow-lg rounded-4">
          <img src={Group6} alt="" />
          <h4 className="mt-3">Ketersediaan ambulance</h4>
          <p className="ps-2 pe-2">
            Bantu para nakes yang sedang berjuang melawan pandemi
          </p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-12 text-center mt-5 mb-5 pt-5">
        <a href="#" className="ps-3 pt-2 pb-2 pe-3 rounded-3 text-decoration-none text-light custom-bg-purple">Load More</a>
      </div>
    </div>
  </div>
  </>
  )
}

export default About;