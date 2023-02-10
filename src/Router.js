import React from 'react';
// import { Link } from 'react-router-dom';


import Signup from './components/Signup/Signup';

import Login from './components/Login/Login';

import Home from './components/Home/Home';


import {BrowserRouter as Router, Route, Routes,} from 'react-router-dom'



const Rtr = () => {

  return(
    <div>
       <Router>
      
  <Routes>
    
 
   <Route exact path="/" element={<Login/>}></Route>
   <Route exact path="/home" element={<Home/>}></Route>
     <Route exact path="/signup" element={<Signup/>} />
   </Routes>
   </Router>
  </div>
 
  )
 
  

};

export default Rtr;
