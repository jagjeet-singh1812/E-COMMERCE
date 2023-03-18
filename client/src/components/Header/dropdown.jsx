import React from 'react'
import './dropdown.css'

const Dropdown = () => {
  return (
    <div className='dropdown-container'>
        <ul className='list'>
            {/* <li className='list-items' style={{fontWeight:"bold"}}>Shop By Category</li>
            <div className='br'></div> */}
            <li className='list-items'>Headphones</li>
            <li className='list-items'>Wireless Earbuds</li>
            <li className='list-items'>Bluetooth Speakers</li>
            <li className='list-items'>Smart Watches</li>
        </ul>
    </div>
  )
}

export default Dropdown