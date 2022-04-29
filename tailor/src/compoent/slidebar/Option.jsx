import React from 'react'
import './option.css'

function Option({text,Icon}) {
  return (
    <div className='option'>
        <span className='icons'> 
         <Icon/> 
         <span className='text'> {text}</span>
         
         </span>
    </div>
  )
}

export default Option