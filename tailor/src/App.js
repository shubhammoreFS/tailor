import React from 'react';
import TopMenu from './compoent/TopBar/TopMenu';   
import "./app.css";
import Slidebar from './compoent/slidebar/Slidebar';

import Home1 from './pages/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route,Link,
} from "react-router-dom";
import Addcustomer from './pages/Customer/Addcustomer';
import Vieweditcustomer from './pages/Customer/vieweditcustomer';

export default function App() {
  return ( 
           
           
     
    
    <BrowserRouter>
    
    <div className='App '> 
          <TopMenu/>
          <div className='slidecontainer'> 
          <Slidebar/> 
    <Routes>
      <Route path="/" element={<Home1/> } />
      <Route path="/Addcustomer" element={<Addcustomer/>} /> 
      
      <Route path="/Viewcustomer" element={<Vieweditcustomer/>} /> 
      
      
      <Route path="/AddOrder" element={<Vieweditcustomer/>} /> 
      
      
      <Route path="/ViewEditOrder" element={<Vieweditcustomer/>} /> 
      
      
      <Route path="/SentMessage" element={<Vieweditcustomer/>} /> 
      
      
      <Route path="/SentEmail" element={<Vieweditcustomer/>} /> 
      
      
      <Route path="/Staff" element={<Vieweditcustomer/>} /> 
      
      <Route path="/Settings" element={<Vieweditcustomer/>} /> 

      
    </Routes>
    </div></div>
  </BrowserRouter>
  )
}
