import { Button } from '@mui/material'
import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div style={{backgroundColor: 'black' , height: '90vh' , paddingTop: '100px'}}>
      <h1 style={{ color:'white' , marginTop: '20px' , marginBottom: '50px' , fontFamily:'papyrus,fantasy' }} > Create And Grow Your  Blog <br/><br/> With NewBie </h1>
      <Button variant="contained" sx={{ borderRadius: 50 , fontSize: '2rem', padding: '10px 20px'  }}  onClick={() => navigate('l')}>LOGIN</Button>
      </div>
      {/* <div>
      <Outlet/>
      </div> */}
     </>
  )
}