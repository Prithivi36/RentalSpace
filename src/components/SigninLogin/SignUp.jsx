import React from 'react';
import './SignUp.css';
import { Navigate, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate=useNavigate()
    const handleSubmit=()=>{
        navigate('/login')
    }
  return (
    <div className="login-container d-flex">
      <div className="login-wrapper">
        <div className="login-left">
          <h1 className='mb-5'>Sign Up</h1>

          <div className="name-log">
            <input type="text" placeholder='Name'/>
          </div>
       
          <div className="email-log">
            <input type="text" placeholder="Email" />
          </div>
          <div className="pass-log">
            <input type="password" placeholder="Password" />
          </div>

          <button className="login-btn" onClick={handleSubmit}>Login</button>
          <p>Already have an account ? <span className='text-primary' onClick={handleSubmit}>Login</span></p>
        </div>

        <div className="login-right">
          {/* Optional space for image or any additional information */}
          <div className="login-img">
          <img src="/park.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
