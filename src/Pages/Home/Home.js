import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import Slider from '../../Components/Slider/Slider'
import NewAtEmporium from '../../Components/NewAtEmporium/NewAtEmporium'
import Bank from '../../Components/Bank/Bank'
import SliderData from '../../Components/Slider/SliderData.js'
import Brands from '../../Components/Brands/Brands'
import DealsLaptops from '../../Components/Deals_Laptops/DealsLaptops'
import Accessories from '../../Components/Accessories/Accessories'
import Footer from '../../Components/Footer/Footer'

function Home() {
  return (
    <>
        <NavBar></NavBar>
        <Slider slides={SliderData}></Slider>
        <NewAtEmporium></NewAtEmporium>
        <Bank></Bank>
        <Brands></Brands>
        <DealsLaptops></DealsLaptops>
        <Accessories></Accessories>
        <Footer></Footer>
    </>
  )
}

export default Home