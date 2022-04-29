import React from 'react'
import './sidebar.css' 
import Option from './Option';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import ViewListRoundedIcon from '@mui/icons-material/ViewListRounded';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';


function Slidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarwapper">
            <div className="sidebarmenu"> 
                    <ul className="sidebarlist">
                        <Option text={"Dashboard"} Icon={HomeIcon} />  
                        <Option text={"Add Order"} Icon={ShoppingCartIcon} /> 
                        <Option text={"View/Edit Order"} Icon={ShoppingCartIcon} /> 
                        <Option text={"Add Customer"} Icon={PersonRoundedIcon} /> 
                        <Option text={"View/Edit Customer"} Icon={PersonRoundedIcon} /> 
                        <Option text={"Sent messages"} Icon={MailOutlineRoundedIcon} /> 
                        <Option text={"Sent Email"} Icon={MailOutlineRoundedIcon} /> 
                        <Option text={"Staff management"} Icon={ViewListRoundedIcon} /> 
                        <Option text={"General Settings"} Icon={SettingsOutlinedIcon} />  
                    </ul>
                
            </div>
        </div>
    </div>
  )
}

export default Slidebar