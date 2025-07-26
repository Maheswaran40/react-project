import React from "react";
import heroimg from "../../assets/images/hero-face-img.jpg";
import bagimg from "../../assets/images/travel-bag.webp";
import fashonlady from "../../assets/images/fashon-lady.png"
import { all_product, allBrands } from "../../assets/Image";
import { useNavigate } from "react-router-dom";
import "../../index.css"
import {Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
import {Navigation}from "swiper/modules"
import "swiper/css/navigation"
import { Autoplay } from 'swiper/modules';


function New_arrivals() {
  const navigate = useNavigate()
  return (
    <>
      <div className="container">{/* container start */}
        {/* heroimg div  */}
        <div style={{
            backgroundImage: `url(${heroimg})`,
             height: "700px",
            width:"100%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            position:"relative"}}>
              <div id="offerdiv"> <h1>Trending Collection with <span style={{color:"#E52020"}}>50%</span>Offer</h1> <button className="btn btn-dark text-white position-absolute ">Shop Now</button> </div>
        </div>
          {/* hero sub img div 1 */}
          <div className="row d-flex m-0 pt-2 justify-content-between">
        <div
          id="sub-hero-img-1"
          style={{
            backgroundImage: `url(${bagimg})`,
            height: "400px",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            margin:"10px 0"
          }}
          className="col-lg-6 p-0"
        > <div id="offerdiv-sub1"> <h3>Torust Bags with <span style={{color:"#E52020"}}>30%</span>Offer</h3> <button className="btn btn-dark text-white position-absolute ">Shop Now</button> </div>
        </div>
           {/* hero sub img div 1 */}
          <div id="sub-hero-img-2" style={{
            backgroundImage: `url(${fashonlady})`,
            height: "400px",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            margin:"10px 0"

           
          }} className="col-lg-6 ps-5">
             <div id="offerdiv-sub2"> <h3>Trending tops with <span style={{color:"#E52020"}}>20%</span>Offer</h3> <button className="btn btn-dark text-white position-absolute ">Shop Now</button> </div>
          </div>
          </div>{/* heroimg end*/}
          <br />
          <h1 className="text-center"style={{color:"#A89C29"}} >New Arrivals</h1>
            <div className="row">
              {/* new alrivals mapping start*/}
         {
            all_product.filter((value)=>value.catagery==="new arrival").map((value,index)=>{
              return(
                <div className="col-lg-3 col-md-4 col-sm-12 p-2 " key={index}>
                   <div className="card" id="mapping-card" height="300" width="200"  >
                    {/* setting img's id to url and compare the url and img id to show */}
                   <center >
                    <img  src={value.img} onClick={() => navigate(`/shop/${value.id}`) } alt="image" className="py-3 mapping-img"  height="300" width="200"/>    
                  </center>  
                   <div className="mapping-nav-icons">
         <span> <i className="fa-regular fa-heart"></i></span><br />
         <span> <i className="fa-solid fa-cart-shopping"></i></span>
        </div>            
                    <div className="card-footer"><span style={{color:"#E52020"}}>Name : </span>{value.item} <br /><span style={{color:"#E52020"}}>Price : </span>{value.price}</div>
                  </div>
                </div>
              )
              
          })     
          }
            </div>{/* new alrivals mapping end*/}
            <br /><br />
            {/* top brands swiper start */}
            <div>
            <center style={{color:"gray",fontSize:"large"}}>Top Brands</center>
            <center><h1 style={{color:"var(--graygreen)"}}>Popular Brands</h1></center>
            </div>
            <br />
            <div>
                <Swiper id="brandswpier"
                         spaceBetween={10}
                          modules={[Navigation,Autoplay]}
                          autoplay={{delay:2000}}
                           breakpoints={{320:{slidesPerView:3},768:{slidesPerView:3},1024: { slidesPerView: 6}}}
                          loop
                >
                    {allBrands.map((value)=>(
                  <SwiperSlide>
                    <div >
                        <img src={value.img} alt="" style={{width:"100px",height:"70px"}}/>
                    </div>
                  </SwiperSlide>
                    ))}
                </Swiper>
                </div>
            {/* top brands swiper end */}

      </div>{/* container end*/}
      <br /><br />

    </>
  );
}

export default New_arrivals;
