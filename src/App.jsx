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
function App() {

  return (
    <>
        <Context>
      <BrowserRouter>
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
      </BrowserRouter>
        </Context>
    </>
  )
}

export default App
