import React from 'react'
import './Accessories.css'
import acer from '../../Images/acer-nitro.png';

const Accessories = () => {
  return (
    <>
    <div className='dealLaptop'>Accessories under 1999</div>
    <div className='newatitems-container2'>
            <div className="product2">
                <div className="namePrice">
                    <h3>Student Laptops</h3>
                </div>
                <p>Additional 10% discount</p>
                <div className="image">
                    <img className='imgs2' src={acer} alt="photu"></img>
                </div>
                <div className="stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                </div>
            </div>

            <div className="product2">
                <div className="namePrice">
                    <h3>Professional Laptops</h3>
                </div>
                <p>Extra 4 months Warranty</p>
                <div className="image">
                    <img className='imgs2' src={acer} alt="photu"></img>
                </div>
                <div className="stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                </div>
            </div>

            <div className="product2">
                <div className="namePrice">
                    <h3>Gaming Laptops</h3>
                </div>
                <p>Free Gaming mouse and Keyboard</p>
                <div className="image">
                    <img className='imgs2' src={acer} alt="photu"></img>
                </div>
                <div className="stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                </div>
            </div>

            <div className="product2">
                <div className="namePrice">
                    <h3>High-Tech Laptops</h3>
                </div>
                <p>New and latest Processor</p>
                <div className="image">
                    <img className='imgs2' src={acer} alt="photu"></img>
                </div>
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

export default Accessories