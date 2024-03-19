import React from 'react'
import {  useLocation, useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate();
  return (
    <div>
       <h1 style={{ color:'white' , marginTop: '60px'  , fontFamily:'papyrus,fantasy' , fontSize:'50px' }}  > please register here</h1> 
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
        <button className="btn btn-primary btn-block mb-4" style={{padding:'10px 20px'  , marginTop: '40px'}} onClick={() => navigate('l')}>
          Register
        </button>
    </div>
  )
}
