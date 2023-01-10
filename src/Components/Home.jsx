import React from 'react';
import Frame378 from './images/Frame378.png';


function Home() {
  return (
    <div class="container">
    <div class="row my-5">
      <div class="col-md-5 ms-4">
        <h1 class="customer-color-purple">
          Saling bantu <br />
          sesama Warga
        </h1>

        <p class="mt-5">
          Aplikasi Bantu warga merupakan aplikasi berbasis mobile dengan
          konsep kesehatan yang berkaitan dengan keadaan covid sekarang
        </p>
      </div>

      <div class="col-md-6">
        <div class="img">
          <img src={Frame378} class="card-img" alt="" />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Home;