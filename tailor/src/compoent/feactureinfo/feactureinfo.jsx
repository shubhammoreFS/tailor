import React from 'react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import './feactureinfo.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PaymentIcon from '@mui/icons-material/Payment';

function feactureinfo() {
  return (
    <div className='feactured'>
        <div className='feacturedItem'>
            <span className='featuredTitle'>Total Customer</span><br></br>
            <div className='featuredmoneyContainer'> 
            <span className='total_count'><AccountCircleIcon/>
            <span className="countcustomer">10</span>
             </span> 
            </div>
            <button className='viewDetails'>View Details</button>
         
        </div>
        <div className='feacturedItem'>
            <span className='featuredTitle'>Total order</span>
            <div className='featuredmoneyContainer'>
            <span className='total_count'><ShoppingCartIcon/> 
            <span className='ordercount'>12</span> </span>
            </div>
            
            <button className='viewDetails'>View Details</button>
         
        </div>
        <div className='feacturedItem'>
            <span className='featuredTitle'>Last 30 day income</span>
            <div className='featuredmoneyContainer'> 
            
            <span className='total_count'><LocalAtmIcon/> 
            <span className='featuredMoney'>2,415</span> </span>
            </div>
            <button className='viewDetails'>View Details</button>
         
         
        </div>
        <div className='feacturedItem'>
            <span className='featuredTitle'>Last 30 day expense</span>
            <div className='featuredmoneyContainer'>  
            <span className='total_count'><PaymentIcon/> 
            <span className='expense_money'>2,415</span> </span>
            </div>
            <button className='viewDetails'>View Details</button>
         
        </div>
    
    </div>
  )
}

export default feactureinfo