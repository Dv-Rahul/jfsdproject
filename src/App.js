import './App.css';
import Discussion from './components/Discussion';
import MyFeed from './components/MyFeed';
import Navbar from './components/Navbar';
import { Route,Routes } from 'react-router-dom';
//import { Button } from '@mui/material'
import Home from './components/Home';
import Login from './components/Login';
import { AuthProvider } from './components/Auth';
import RequireAuth from './components/RequireAuth';
import MuiButton from './components/MuiButton';
import MuiCard from './components/MuiCard';
import MuiTextField from './components/MuiTextFeild';
import MuiTypography from './components/MuiTypography';
import Write from './components/Write';
import MuiCard1 from './components/MuiCard1';
import { BlogProvider } from './components/BlogContext';
import Publish from './components/Publish';
import Explore from './components/Explore';
import Instructions from './components/Instructions';
import Register from './components/Register';

function App() {
  return (
    <>
    <AuthProvider>
    <BlogProvider>
    <div className="App" style={{backgroundColor: 'black', height: '120vh',color:'white' }}>
      <Navbar/>
      <Routes>
      <Route path="m" element={<RequireAuth><MyFeed heading="HERE IS YOUR WORK now"/> <MuiCard/>  <MuiCard1/> </RequireAuth>}/>
      <Route path="d" element={<Discussion/>}/> 
       <Route path="/" element={<Home/>}/>
        {/* <Route index element={<Login/>}/> */}
      <Route path="l" element={<Login/>}/>
      {/* </Route>  */}
      <Route path="w" element={<Write/>}/>
      <Route path="/w/p" element={<Publish/>}/>
      <Route path="e" element={<Explore/>}/>
      <Route path="i" element={<Instructions/>}/>
      <Route path="r" element={<Register/>}/>
      </Routes>    
      </div>
      </BlogProvider>
      </AuthProvider>
    </>
  );
}

export default App;