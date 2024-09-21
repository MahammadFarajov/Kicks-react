import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import SmoothScroll from './SmoothScroll'

export default function Layout() {
  return (
    <>
      <SmoothScroll>
        <Navbar />
        <Outlet />
      </SmoothScroll>
    </>
  )
}
