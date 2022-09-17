import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../components/Home/Home'
import Navbar from "../components/Navbar/Navbar"
import Cart from '../components/Cart/Cart'
import Contacto from '../components/Contacto/Contacto'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'
import Productos from '../components/Productos/Productos'
import Footer from "../components/Footer/Footer"

const Rutas = () => {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/productos' element={<Productos/>}/>
            <Route path='/item-detail/:id' element={<ItemDetailContainer/>}/>
            <Route path='/categorias/:categoria' element={<Productos/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/contacto' element={<Contacto/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
    
  )
}

export default Rutas