import React, { useState } from 'react';
import Slider from "react-slick";
import { bannerImgFive,bannerImgFour,bannerImgOne,bannerImgThree,bannerImgTwo } from '../../assets';

export const Banner = () => {
    const[dotActive,setDotActive]= useState(0);
    const settings = {
        dots: true,
        infinite: true,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        
        appendDots: dots => (
            <div
              style={{
                position:"absolute",
                top:"70%",
                left:"0",
                right:"0",
                margin:"0 auto",
                transform:"translate(-50% -50%)",
                width:"210px",
              }}
            >
              <ul style={{
                width:"100%",
                display:"flex",
                alignItems:"center",
                justifyContent:"space-between",
               }}>{""}{dots} </ul>
            </div>
          ),
          customPaging: i => (
            <div
              style={{
                width: "30px",
                height:"30px",
                borderRadius:"50%",
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                color:"white",
                background:"#131921",
                padding:"8px 0",
                cursor:"pointer",
                border:"1px solid #f2a847"
              }}
            >
              {i + 1}
            </div>
          )
      };
  return (
    <div className='w-full'>
        
        <div className='w-full h-full relative'>
        <Slider {...settings}>
          <div>
            <img src={bannerImgOne} alt="bannerImageOne"></img>
          </div>
          <div>
            <img src={bannerImgTwo} alt="bannerImageTwo"></img>
          </div>
          <div>
            <img src={bannerImgThree} alt="bannerImageThree"></img>
          </div>
          <div>
            <img src={bannerImgFour} alt="bannerImageFour"></img>
          </div>
          <div>
            <img src={bannerImgFive} alt="bannerImageFive"></img>
          </div>
         
        </Slider>
        </div>
      </div>
  )
}
