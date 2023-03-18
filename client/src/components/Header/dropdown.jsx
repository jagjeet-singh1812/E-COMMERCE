import React from 'react'
import './dropdown.css'
import {useNavigate} from "react-router-dom"

const Dropdown = () => {
  const navigate=useNavigate();
  return (
    <div className='dropdown-container'>
        <ul className='list'>
            {/* <li className='list-items' style={{fontWeight:"bold"}}>Shop By Category</li>
            <div className='br'></div> */}
            <li className='list-items' onClick={()=>{navigate("/category/1")}}>Headphones</li>
            <li className='list-items ' onClick={()=>{navigate("/category/4")}}>Wireless Earbuds</li>
            <li className='list-items' onClick={()=>{navigate("/category/2")}}>Bluetooth Speakers</li>
            <li className='list-items'onClick={()=>{navigate("/category/3")}}>Smart Watches</li>
        </ul>
    </div>
  )
}

export default Dropdown