import React, { useState } from 'react'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Product from './components/Product'
import LifeStyle from './components/LifeStyle'
import Cart from './components/Cart'
import Buyitnow from './components/Buyitnow'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home />}/>
            <Route path='/product' element={<Product/>}/>
            <Route path='/lifestyle' element={<LifeStyle/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/buyitnow' element={<Buyitnow/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
)
}
