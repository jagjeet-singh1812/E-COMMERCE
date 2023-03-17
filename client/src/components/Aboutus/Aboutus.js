import React from 'react'
import "./about.css"

const Aboutus = () => {
  return (
    <div className='about-con'>
        <div className='about-txt-1'>WHO</div>
        <div className='about-txt-2'>ARE</div>
        <div className='about-txt-3'>WE?</div>
        <div className='text-0'>
            <p className='about-side-txt-1'>
                We are the young and enthusiastic explorers, out on a journey to serve people with the new experience of the true sound
            </p>
            <p className='about-side-txt-2'>
                We present you the latest audio devices of various categories like wired and bluetooth earphones, headphones and speakers.
            </p>
            <h2 className='whats-new'>WHAT'S NEW ?</h2>
            <p className='about-side-txt-3'>
                We have recently lauched a series of smart watches which is many features like locating all your smart devices, customizing it in your own way.
            </p>
        </div>
    </div>
  )
}

export default Aboutus;