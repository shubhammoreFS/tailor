import React from 'react';
import TopMenu from './compoent/TopBar/TopMenu';   
import "./app.css";
import Slidebar from './compoent/slidebar/Slidebar';

import Home1 from './pages/Home/Home';

export default function App() {
  return (
    <div className='App '> 
          <TopMenu/>
          <div className='slidecontainer'> 
          <Slidebar/>
          <Home1/>
          </div>
    </div>
    
  )
}
