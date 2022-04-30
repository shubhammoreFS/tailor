import React from 'react'
import './sidebar.css' 
import Option from './Option';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import ViewListRoundedIcon from '@mui/icons-material/ViewListRounded';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import {
  BrowserRouter,
  Routes,
  Route,Link,
} from "react-router-dom";


function Slidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarwapper">
            <div className="sidebarmenu"> 
                    <ul className="sidebarlist">
                      
                        <Link to={"/"}> 
                        <Option text={"Dashboard"} Icon={HomeIcon} />
                        
                        </Link>
                        <Link to={"/AddOrder"}> 
                        <Option text={"Add Order"} Icon={ShoppingCartIcon} />
                        </Link> 
                        <Link to={"/ViewEditOrder"}> 
                        <Option text={"View/Edit Order"} Icon={ShoppingCartIcon} /> 
                        </Link>
                        <Link to={"/Addcustomer"}> 
                        <Option text={"Add Customer"} Icon={PersonRoundedIcon} /> 
                        </Link>
                        <Link to={"/Viewcustomer"}> 
                        <Option text={"View/Edit Customer"} Icon={PersonRoundedIcon} /> 
                        </Link>
                        <Link to={"/SentMessage"}> 
                        <Option text={"Sent messages"} Icon={MailOutlineRoundedIcon} /> 
                        </Link>
                        <Link to={"/SentEmail"}> 
                        <Option text={"Sent Email"} Icon={MailOutlineRoundedIcon} /> 
                        </Link>
                        <Link to={"/Staff"}> 
                        <Option text={"Staff management"} Icon={ViewListRoundedIcon} /> 
                        </Link>
                        <Link to={"/Settings"}> 
                        <Option text={"General Settings"} Icon={SettingsOutlinedIcon} /> 
                        </Link> 
                    </ul>
                
            </div>
        </div>
    </div>
  )
}

export default Slidebar