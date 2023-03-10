import React from 'react'
import './Brands.css'
// import moto from './Brands-Images/moto.png'
import mi2 from './Brands-Images/mi2.png'
import ineplus from './Brands-Images/ineplus.png'
import nokia from './Brands-Images/nokia.png'
import huawei from './Brands-Images/huawei.jpg'

const Brands = () => {
  return (
    <>
    <div class="slider-brands">
        <div class="slide-brands-track">
            <div class="slide-brands">
            <img className="Brand-logo" src={nokia} alt="" />
            </div>
            <div class="slide-brands">
            <img className="Brand-logo"  src={mi2} alt="" />
            </div>
            <div class="slide-brands">
            <img className="Brand-logo" src={huawei} alt="" />
            </div>
            <div class="slide-brands">
            <img className="Brand-logo" src={ineplus} alt="" />
            </div>
            <div class="slide-brands">
            <img className="Brand-logo"  src={nokia} alt="" />
            </div>
            <div class="slide-brands">
            <img className="Brand-logo"  src={mi2} alt="" />
            </div>
            <div class="slide-brands">
            <img className="Brand-logo"  src={ineplus} alt="" />
            </div>
            <div class="slide-brands">
            <img className="Brand-logo"  src={nokia} alt="" />
            </div>
            <div class="slide-brands">
            <img className="Brand-logo"  src={huawei} alt="" />
            </div>
            <div class="slide-brands">
            <img className="Brand-logo"  src={mi2} alt="" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Brands