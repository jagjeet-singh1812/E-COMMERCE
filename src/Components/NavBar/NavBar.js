import React, { useState } from 'react'
import '../NavBar/NavBar.css'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import Dropdown from './Dropdown';
import CloseIcon from '@mui/icons-material/Close';

function NavBar() {
    const [isOpen,setIsOpen]=useState(false);
    
    const menuOn=()=>{
        setIsOpen(!isOpen);
        console.log("ok");
    }
  return (
    <>
    <div className='navbar-container'>
        <div className='wrapper'>
            <div className='left'>
                <div className='logo'>E-mporium</div>
            </div>
            <div className='center'>
                <div className='search-container'>
                    <input type="text" className='input' placeholder='Product you need to search'></input>
                    <div className='search-icon'>
                        <SearchIcon style={{fontSize:27}}></SearchIcon>
                    </div>
                </div>
            </div>
            <div className='right'>
                <div className='icons'>
                    <div className='menu' onClick={menuOn}>
                        {!isOpen && <MenuIcon style={{fontSize:33}}></MenuIcon>}
                        {isOpen && <CloseIcon style={{fontSize:33}}></CloseIcon>}
                        <div className='menutxt'>Menu</div>
                    </div>
                    <ShoppingCartIcon style={{fontSize:35}}></ShoppingCartIcon>
                    <PersonIcon style={{fontSize:35}}></PersonIcon>
                </div>
            </div>
        </div>
    </div>
    {
        isOpen && <Dropdown/>
    }
    </>
  )
}

export default NavBar