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
      <Navbar />
      <div className="host-hero">
        <div className="host-hero-left">
         <div className="host-hero-img">
          <img src="/host-hero.jpg" alt="" className='host-hero-img-' />
         </div>
        </div>
        <div className="host-hero-right">
          <h1 className='host-hero-title'>
          Get paid to store RVs, <br></br>cars, or boxes.
          </h1>
          <p className='host-hero-title-p'>Rent out your unused spaces with Neighbor®</p>
          
          <Link to="/hostmain"><button className="host-hro-btn">
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
