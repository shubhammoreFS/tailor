import React from 'react'
import './Addcustomer.css';

function Addcustomer() {
  return (
    <div className='Addcustomer'>
       <div className="customercontainer">
         <div className="customertitlecontainer">
           <h3 className="Editcustomer1">Edit Customer</h3>
           <div className="create"> create</div>
         </div>
         <div className="customerbodycontainer">
           <div className="Edit">
             <div className="topview">
                <img src="https://thumbs.dreamstime.com/z/red-rose-flower-11041732.jpg" alt="" className="updateProfilephoto" />          
               </div>
               <h3 className="Name"></h3>
               <div className="userinfo">
                 Name<span className='name'>Shubham</span>
               </div>
               <div className="userinfo">
                 Address<span className='Address'>At post Nimsod</span>
               </div>
               <div className="userinfo">
                 Phone number<span className='phonenumber'>7774842351</span>
               </div>
               </div>
              
           <div className="updatecustomer"></div>
         </div>
       </div>
    </div>
  )
}

export default Addcustomer
