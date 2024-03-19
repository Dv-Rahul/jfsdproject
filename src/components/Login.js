import React, { useState } from 'react';
import {  useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from './Auth';
import axios from 'axios';

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();
  const redirectpath = location.state?.pathname || 'm';
  const [user, setUser] = useState(" ");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status,setStatus] = useState('');
  const handleLogin1 = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/login/checklogin', {
        email,
        password
      });

      // Handle login success
      console.log(response.data.message);
      setStatus(response.data.message);
      if(status === "success"){
        navigate('/');
      }else{
        navigate('l');
      }
    } catch (error) {
      // Handle login failure
      console.error('Login failed:', error.response.data.message);
    }
  };

  const handleLogin = () => {
    auth.login(user);
    //auth.useNavigate(redirectpath);
    navigate(redirectpath);
  }
  return (
    <>
    <div >
       <h1 style={{ color:'white' , marginTop: '60px'  , fontFamily:'papyrus,fantasy' , fontSize:'50px' }}  > Hello NewBie ,welcome</h1> 
        <div  >
          <label type="email" style={{fontSize:'40px' , marginTop: '40px'}} >
            Enter email address
          </label>
           {/* <input type="email" className="form-control" id="form2Example1"  value={user} onChange={(e)=> setUser(e.target.value)} style={{marginRight :'200px'}} />  */}
          <div>
          
          <input class="input" style={{marginTop: '20px' , padding:'7px 100px' }}/>
          
          </div>
        </div>

        <div>
          <label htmlFor="form2Example2" className="form-label"  style={{fontSize:'40px' , marginTop: '40px'}}>
           Enter your password
          </label>
          <div>

          <input  class="input1" type="password" style={{marginTop: '20px'  , padding:'7px 100px' }}  placeholder="" />
          </div>
          {/* <input type="password" className="form-control" id="form2Example2" style={{padding:'10px 0px'}}/> */}
        </div>
        <button className="btn btn-primary btn-block mb-4" style={{padding:'10px 20px'  , marginTop: '40px'}}  onClick={handleLogin} >
          Login
        </button>
    </div>

<div>

</div>
</>
  );
}
