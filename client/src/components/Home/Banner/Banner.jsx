import React from "react";

import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";
import { useNavigate } from "react-router-dom";
const Banner = () => {
    const navigate = useNavigate();
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>SALES</h1>
                    <p>
                        WE PROVIDE THE INDUSTRY BEST EARBUDS,WITH HYBRID ACTIVE NOICE CANCELLATION JUST FOR YOU 
                    </p>
                    <div className="ctas">
                        <div className="banner-cta" onClick={()=>{
                            navigate('/product/4')
                        }} >Read More</div>
                        <div className="banner-cta v2" onClick={()=>{
                            navigate('/product/4')
                        }}>Shop Now</div>
                    </div>
                </div>
                <img className="banner-img" src={BannerImg} alt="leading_product_photo" />
            </div>
        </div>
    );
};

export default Banner;
