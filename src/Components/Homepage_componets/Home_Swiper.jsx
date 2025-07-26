import React from "react";
import { all_product } from "../../assets/Image";
import {Swiper,SwiperSlide}from "swiper/react"
import {Navigation,Autoplay}from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "../../index.css"
import { useNavigate } from "react-router-dom";


function Home_Swiper() {
   const navigate = useNavigate() 
  
  return (
    <>
      <div className="container">
       <center><h1 style={{color:"#A89C29"}}>Popular Porduct</h1></center> 
     
        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          modules={[Navigation,Autoplay]}
          navigation
          autoplay={{delay:3000}}
           breakpoints={{  320:{slidesPerView:1},768:{slidesPerView:2}  }}
          loop
        >
          {/* .filter((value)=>value.catagery==="shop"). */}
          {all_product.filter((value)=>value.catagery==="shop").map((value)=>(
            <SwiperSlide>
             <center> <img id="mapping-img" onClick={() => navigate(`/shop/${value.id}`) }
              src={value.img} alt="" height="300" width="300"/></center>
             <center> <h5><span style={{color:"#E52020"}}>Name : </span>{value.item}</h5>
              <h6><span style={{color:"#E52020"}}>Price : </span>{value.price}</h6></center>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Home_Swiper;
