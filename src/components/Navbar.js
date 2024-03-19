
import React from 'react'
import { NavLink  } from 'react-router-dom'
import {useAuth} from './Auth';
import { Button } from '@mui/material'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';
import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton from '@mui/material/IconButton';
import Write from './Write';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';


// const LinkStyles = ({isActive}) => {
//     return {
//         textDecoration : isActive ? 'none' : 'underline',
//         fontWeight : isActive ? 'bold' : 'normal' ,
//         marginRight: '20px',
//     }
// }

const Logo1 = ()=> {
  return(
    <img src= "blogimg.png" alt="Logo" style={{ height: '50px', marginRight: '20px' }} />
  );
};
const Logo2 = () => {
  return (
    <img src="write.png" alt="Logo" style={{ height: '50px', marginRight: '20px' }} />
  );
};

const hStyle = {
  fontSize: '20px',
  marginRight: '40px'
  
}

export default function Navbar() {
 const auth = useAuth();  
 const navigate = useNavigate();

  const [more, setMore] = React.useState('');

  const handleChange = (event) => {
    setMore(event.target.value);
  };

  return (
    <>
    <div>
      <nav className='primary-nav' style={{ display: 'flex', alignItems: 'center',color:'black' }} >

        <Logo1/>

        <h1 style={{hStyle , fontFamily:'papyrus,fantasy' , fontSize: '30px' , paddingRight:'50px' }}>NewBie</h1> 
   

         <NavLink to="/"  style={{ marginRight: '50px'}}>HOME</NavLink>
         <NavLink to="m"  style={{ marginRight: '50px'}}>Myfeed</NavLink>
         <NavLink to="d"  style={{  marginRight: '50px'}}>Discussion</NavLink>

        <Box sx={{  display: 'flex', marginRight: '50px', width: '100px', padding: ' 0px', fontSize: '0.8rem'}}>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-simple-select-label">MORE</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="MORE"
          value={more}
          onChange={handleChange}
        >
          <MenuItem onClick={() => navigate('e')}>Explore</MenuItem>
          <MenuItem onClick={() => navigate('i')}>Instructions</MenuItem>
        </Select>
      </FormControl>
    </Box>

    <h2 style={{ fontSize: '20px', marginLeft: '20px',marginRight: '0px' }}  >START YOUR BLOGGING CARRIER</h2>

    <Box style={{ display: 'flex', alignItems: 'center', marginLeft:'60px' ,marginRight: '90px' }} onClick={() => navigate('w')}>
            <Logo2 />
            <Button>WRITE</Button>
          </Box>
          <TextField id="outlined-basic" label="SEARCH" variant="outlined" style={{color:'Black',marginRight: '10px'   ,marginLeft: '-70px' }} ></TextField>
          <SearchIcon/>
          

          <IconButton aria-label="notifications" style={{color:'Black'  ,marginLeft: '-20px' }}>
      <NotificationsIcon style={{color:'Black'  ,marginLeft: '20px' }} />
    </IconButton>


          {
          (!auth.user) && (
            <Button variant="contained" sx={{ borderRadius: 50 , fontSize: '1rem', padding: '8px 20px' , marginLeft:'40px' }} onClick={() => navigate('l')}>LOGIN</Button>
          )
        }
               <Button variant="contained" sx={{ borderRadius: 50 , fontSize: '1rem', padding: '8px 20px' , marginLeft:'40px' }} onClick={() => navigate('r')}>Register</Button>

      </nav>
    </div>
    </>
  )
}
