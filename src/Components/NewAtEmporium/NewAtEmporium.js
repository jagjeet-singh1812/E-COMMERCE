import React from 'react'
import './NewAtEmporium.css'
import acer from "../../Images/acer-nitro.png"
import tv from '../../Images/tv.jpg'

const NewAtEmporium = () => {
  return (
    <>
        <div className='newatemporium'>New At E-mporium</div>
        <div className='newatitems-container1'>
        <div className="product">
                <div className="image">
                    <img className='imgs2' src={acer} alt="photu"></img>
                </div>
                <div className="namePrice">
                    <h3>Laptops</h3>
                </div>
                <p>Starting form 55,000 onwards</p>
                <div className="stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                </div>
            </div>
            
            <div className="product">
                <div className="image">
                    <img className='imgs2' src={tv} alt="photu"></img>
                </div>
                <div className="namePrice">
                    <h3>Telvision</h3>
                </div>
                <p>Starting form 9999 onwards</p>
                <div className="stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                </div>
            </div>
        </div>

        <div className='newatitems-container2'>
            <div className="product2">
                <div className="image">
                    <img className='imgs2' src={acer} alt="photu"></img>
                </div>
                <div className="namePrice">
                    <h3>Speakers</h3>
                </div>
                <p>Starting form 5999 onwards</p>
                <div className="stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                </div>
            </div>

            <div className="product2">
                <div className="image">
                    <img className='imgs2' src={acer} alt="photu"></img>
                </div>
                <div className="namePrice">
                    <h3>Phones</h3>
                </div>
                <p>Starting form 14999 onwards</p>
                <div className="stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                </div>
            </div>

            <div className="product2">
                <div className="image">
                    <img className='imgs2' src={acer} alt="photu"></img>
                </div>
                <div className="namePrice">
                    <h3>Smart Watches</h3>
                </div>
                <p>Starting form 499 onwards</p>
                <div className="stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                </div>
            </div>

            <div className="product2">
                <div className="image">
                    <img className='imgs2' src={acer} alt="photu"></img>
                </div>
                <div className="namePrice">
                    <h3>Cases and Covers</h3>
                </div>
                <p>Starting form 499 onwards</p>
                <div className="stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                </div>
            </div>
        </div>
    </>
  )
}

export default NewAtEmporium
