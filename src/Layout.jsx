import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import SmoothScroll from './SmoothScroll'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast'

export default function Layout() {
  return (
    <>
     <Toaster />
      <SmoothScroll>
        <Navbar />
        <Outlet />
        <Footer />
      </SmoothScroll>
    </>
  )
}
