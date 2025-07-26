// Context.jsx
import React, { useState,useEffect } from 'react';
import Mycontext from './Mycontext';
import fashonboys from "../assets/images/fashon-boys-lineup.jpg"
import { all_product } from '../assets/Image';
// import { useParams } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

function Context({ children }) {
  // const navigation=useNavigate()
    // about page function start
  const [activeTab, setActiveTab] = useState({
    title: "", //we send into object , so we create empty object in "activeTab" and get by calling "activeTab.values"
    p1: "",
    p2:"",
    conlist:""
  });

  const aboutFun = () => {
    setActiveTab({
      title: "Unveiling Your Unique Fashion Journey",
      img:fashonboys,
      desc:"Welcome to ClipCart, where fashion meets individuality, and style is more than just clothing – it's a statement. Our passion for fashion drives us to curate a collection that celebrates diversity, embraces trends, and empowers you to express yourself through clothing.",
      type:"about"
    });
  };

  const storyFun = () => {
    setActiveTab({
      title: "In the heart of [Your City], a dream was woven into the fabric of reality – the dream of creating a clothing haven that resonates with style enthusiasts, trendsetters, and those who seek to express themselves through fashion. Welcome to [Your Store Name], where every stitch tells a story. ",
      type:"story"
      
    });
  };
  
  const missionFun = () => {
    setActiveTab({
      title: "At [Your Store Name], we are driven by a singular mission: to empower individuals through the art of fashion. We believe that clothing is not just a means of covering the body but a powerful tool for self-expression, confidence, and individuality.",
      p1:"1.Curate Exceptional Style: We are committed to curating a diverse and exceptional collection of clothing that transcends the boundaries of fashion. Our mission is to offer a carefully selected range of garments that reflect the latest trends, timeless classics, and unique pieces that resonate with our customers.",
      p2:"2.Quality Craftsmanship: We prioritize quality craftsmanship in every stitch and detail. Our dedication to superior craftsmanship ensures that each garment is not just a piece of clothing but a work of art, designed to stand the test of time.",
      type:"mission"
      
});
  };
  
  const connectFun = () => {
    setActiveTab({
      heading:"Affilate Program",
      type:"connection",
      conlist:{
        li1:"Build your own online sporting goods store!",
        li2:"If you have a web site, you can make money selling sporting goods products. It’s easy and it’s free to join.",
        li3:"Click here to join now and earn commissions of up to 6%"
      }

    });
  };
  // useeffect for rendering to the page ,default the aboutFun will show
    useEffect(() => {
    aboutFun();
  }, []);
    // about page function end

    // home page cardfun navigate to shop product
    
    // const cardFun=()=>{
    //   navigation("/shop/dress")
    // }

    // search fun start

     var[searchdata,setData]=useState( )
 function searchFun(e){
  e.preventDefault()
  console.log(searchdata);
  
 }
 function seacrhInput(e){
   const input = e.target.value.toLowerCase();
    setData(input);
    console.log(input);
}
 const filteredItems =searchdata ?( all_product.filter((value) =>
    value.item.toLowerCase().includes(searchdata)
  ) ): '';

    // search fun end
    // like start
 
    // like end


  const mycontextValue = { activeTab, missionFun, connectFun,aboutFun, storyFun, searchFun,seacrhInput,filteredItems,setData,searchdata}; //cardFun

  return (
    <Mycontext.Provider value={mycontextValue}>
      {children}
    </Mycontext.Provider>
  );
}

export default Context;
