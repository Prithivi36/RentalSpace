// Host.jsx

import React from 'react';
import Navbar from './Navbar';
import "./Host.css"
import HowItWorks from './HowItWorks';
import Footer from "../Footer"
import { Link,useNavigate } from 'react-router-dom';

const Host = () => {
  return (
    <div>
      <div className="host-hero py-5 d-block d-md-flex">
        <div className="host-hero-left d-none d-md-block  text-center d-flex align-items-center justify-content-center ">
         <div className="host-hero-img  pt-5">
          <img src="/host-hero.jpg" alt="" className='host-hero-img- img-fluid w-100 rounded-5' />
         </div>
        </div>
        <div className="host-hero-right d-flex flex-column align-items-center justify-content-center  ">
          <h1 className='host-hero-title'>
          Get paid to store RVs, <br></br>cars, or boxes.
          </h1>
          <p className='host-hero-title-p'>Rent out your unused spaces with SarkarSpace®</p>
          
          <Link to="/hostdash"><button className="host-hro-btn">
            List Your Space
          </button></Link>
          <p className='host-hero-title-p'>It's Free and Secure</p>
        </div>
      </div>
      <HowItWorks/>
      <Footer/>
    </div>
   
  );
};

export default Host;
