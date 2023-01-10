import React from 'react'
import Mask from './images/Mask Group.png';
import image2 from './images/image 2.png';
import image3 from './images/image 3.png';



const SectionFour = () => {
  return (
    <>
    <div className="container">
    <div className="row mt-5 mb-5 pt-5 pb-5">
      <div className="col-md-6 circle mb-5">
        <div className="col-md-5">
        <div className="mx-5 ms-5">
          <img src={Mask} alt="" className="mx-5 mt-5 mb-5" height="420" width="250" />
        </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="ms-5 ps-5 mt-5">
          <span className="customer-color-purple fw-bold pt-4 pb-4">| Download Now</span>
          <h2 className="mt-4 mb-4 fs-1">
            Get <span className="customer-color-purple">the app</span>
          </h2>
          <p>
            Aplikasi kami tersedia di play store , app store , anda dapat
            langsung mendownloadnya secara gratis dan nikmati fitur aplikasi
            yang sudah kami sediakan
          </p>
          <img src={image2} alt="" className="mt-5" />
          <img src={image3} alt="" className="mt-5" />
        </div>
      </div>
    </div>
  </div>
   
  </>
  )
}

export default SectionFour