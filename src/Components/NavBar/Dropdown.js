import React from 'react'
import './Dropdown.css'

const Dropdown = () => {
  return (
    <div className='dropdown-container'>
        <ul className='list'>
            <li className='list-items' style={{fontWeight:"bold"}}>Shop By Category</li>
            <div className='br'></div>
            <li className='list-items'>Mobile Phones</li>
            <li className='list-items'>Tablets</li>
            <li className='list-items'>Mobile Accessories</li>
            <li className='list-items'>Cases and Covers</li>
            <li className='list-items'>Telvision</li>
            <li className='list-items'>Audio Accessories</li>
            <li className='list-items'>Smart Devices</li>
        </ul>
    </div>
  )
}

export default Dropdown
