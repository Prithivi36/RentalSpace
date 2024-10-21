import React from 'react';
import './Login.css';
import { Navigate, useNavigate } from 'react-router-dom';
import { getUid } from '../../api/Api';

const Login = () => {
    const navigate=useNavigate()
    const [user,setUser]=React.useState({
      email:"",
      password:""
    })
    function handleSubmit(){
      
      getUid(user.email).then(res=>handleLogin(res.data))
      
        navigate('/hostdash')
    }
    function handleLogin(d){
      localStorage.setItem('user',d)
    }
   function handleChange(e){
        const {name,value}=e.target;
        setUser((prev)=>{
          return(
            {...prev,[name]:value}
          )
        })
   }
   console.log(user);
    const handleSwitch=()=>{
        navigate('/signup')
    }


  return (
    <div className="login-container d-flex">
      <div className="login-wrapper">
        <div className="login-left">
          <h1 className='mb-5'>Welcome Back</h1>
       
          <div className="email-log">
            <input onChange={handleChange} name='email' type="text" placeholder="Enter your email" />
          </div>
          <div className="pass-log">
            <input onChange={handleChange} name='password' type="password" placeholder="Password" />
          </div>

          
          <button className="login-btn" onClick={handleSubmit}>Login</button>
          <p>dont have an account ? <span className='text-primary' onClick={handleSwitch}>Sign Up</span></p>
        </div>

        <div className="login-right">
          {/* Optional space for image or any additional information */}
          <div className="login-img">
          <img src="/space.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
