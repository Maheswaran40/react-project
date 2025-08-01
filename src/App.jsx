import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contect from './pages/Contect'
import Faq from './pages/Faq'
import Shop from './pages/Shop'
import Error from './pages/Error'
import Header_nav from './Components/CommonComponents/Header_nav'
import Footer from './Components/CommonComponents/Footer'
import Context from './contextfile/context' 
import Product from './pages/Product'
import Scrolltop from './pages/Scrolltop'
function App() {

  return (
    <>
        <Context>
      <BrowserRouter>
      <Scrolltop />
    <Header_nav/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contect' element={<Contect/>} />
        <Route path='/faq' element={<Faq/>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path="/shop/:navid" element={<Product/>}/>
        <Route path='*' element={<Error/>} />
      </Routes>
      <Footer/>
      <div id="navtop" style={{width:"100vw", position: "fixed",bottom:"100px", zIndex : '1'}}>
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "white",
              textAlign: "center",
              fontSize: "small",
               height: "50px",
            width: "50px",
            backgroundColor: "#A89C29",
            position: "absolute",
            right: "50px",
            top: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50px",
            }}
          >
           <i className="fa-solid fa-arrow-up"></i>
          </a>
      </div>
      </BrowserRouter>
        </Context>
          
    </>
  )
}

export default App
