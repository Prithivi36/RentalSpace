import React from 'react';
import './SignUp.css';
import { Navigate, useNavigate } from 'react-router-dom';
import { saveUser } from '../../api/Api';

const SignUp = () => {
    const navigate=useNavigate()
    const [user,setUser]=React.useState({
      name:"",
      email:"",
      phone:""
    })
    const handleSubmit=()=>{
      saveUser(user).then(
        res=>alert(res.data)
      )
        navigate('/login')
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
  return (
    <div className="login-container d-flex">
      <div className="login-wrapper">
        <div className="login-left">
          <h1 className='mb-5'>Sign Up</h1>

          <div className="name-log">
            <input name='name' type="text" onChange={handleChange} placeholder='Name'/>
          </div>
       
          <div className="email-log">
            <input name='email' type="text" onChange={handleChange} placeholder="Email" />
          </div>
          <div className="email-log">
            <input name='phone' type="text" onChange={handleChange} placeholder="Phone" />
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
