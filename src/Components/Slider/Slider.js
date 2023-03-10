import React, {useState} from 'react'
import './Slider.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import simg1 from "./Simages/simg1.jpg"
// import simg2 from "./Simages/simg2.jpg"

const Slider = ({slides}) => {

  const [curr, setCurr] = useState(0);
  const length=slides.length;

  const nextslide=()=>{
    setCurr(curr===length-1 ? 0 :curr+1);
  }
  
  const prevslide=()=>{
    setCurr(curr===0 ? length-1 :curr-1);
  }

  if(!Array.isArray(slides) || slides.length<=0){
    return null;
  }

  return (
      <div className='slider'>
          <ArrowBackIosNewIcon className='left-btn' onClick={prevslide}></ArrowBackIosNewIcon>
          <ArrowForwardIosIcon className='right-btn' onClick={nextslide}></ArrowForwardIosIcon>
              {slides.map((slide,index)=>{
                return(
                  <div className={index===curr ? 'slide-active' : 'slide'} key={slide.id}>
                    {index===curr && 
                      <img src= {slide.photu} alt={slide.id}/>
                    }
                  </div>
                )
              })}
      </div>
      // <Carousel>
      //     <div>
      //         <img src={simg1} />
      //     </div>
      //     <div>
      //         <img src={simg2} />
      //     </div>
      //     <div>
      //         <img src={simg1} />
      //     </div>
      // </Carousel>
  )
}
export default Slider

