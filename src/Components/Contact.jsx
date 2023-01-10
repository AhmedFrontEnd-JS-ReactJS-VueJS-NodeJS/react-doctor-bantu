import React from 'react';
import Map from './images/map.png';

const Contact = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-2 mx-auto mt-4">
                        <h2 className="customer-color-purple fw-bold text-center fs-1 custom-border-bottom mb-5">
                            Contact
                        </h2>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="shadow-lg rounded-2 mb-4 p-4 overflow-hidden">
                    <div className="row p-3">
                        <div className="col-md-8">
                            <form action="" className="">
                                <h4 className="fw-bold">Leave us a message</h4>
                                {/* <!-- <label for="name" className="w-75 position-absolute top-100 ">Name</label> --> */}
                                <input type="text" id="name" placeholder="Your Name"
                                    className="mt-4 w-75 position-relative rounded-1 border-light shadow-lg ps-2 pt-2 pb-2" />

                                {/* <!-- <label for="Email" className="w-75 position-absolute top-100">Your Email</label> --> */}
                                <input type="email" id="Email" placeholder="Your Email"
                                    className="mt-4 w-75 position-relative rounded-1 border-light shadow-lg ps-2 pt-2 pb-2" />

                                {/* <!-- <label for="textarea" className="w-75 position-absolute top-100">Your Message</label> --> */}
                                <textarea name="" id="textarea" placeholder="Text Area" cols="30" rows="10"
                                    className="mt-4 w-75 position-relative rounded-1 border-light shadow-lg ps-2 pt-2 pb-2"></textarea>

                                <div className="row">
                                    <a href="#"
                                        className="fw-bold text-light w-75 text-decoration-none pt-3 pb-2 custom-bg-purple rounded-3 mt-5 text-center">Send</a>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-4">
                            <div className="mt-5 text-start ps-0">
                                <p className="mt-3">
                                    <i className="fa-solid fa-location-dot"></i> Infomation technologies
                                    building,Kudus , Jawa tengah Indonesian
                                </p>
                                <p className="mt-3">
                                    <i className="fa-solid fa-phone"></i> hello1234@info.com
                                </p>
                                <p className="mt-3">
                                    <i className="fa-regular fa-envelope"></i> +021213414115151
                                </p>
                                <div>
                                    <i className="fa-brands fa-youtube"></i><i className="fa-brands fa-instagram ps-2"></i>
                                    <i className="fa-brands fa-facebook ps-2"></i>
                                    <i className="fa-brands fa-twitter ps-2"></i>
                                </div>
                                <img src={Map} alt="" className="img mt-5" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact