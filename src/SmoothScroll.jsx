import ReactLenis, { useLenis } from '@studio-freight/react-lenis'
import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'

export default function SmoothScroll( { children }) {
    const lenisRef = useRef()
  
    useEffect(() => {
      function update(time) {
        lenisRef.current?.lenis?.raf(time * 1000)
      }
    
      gsap.ticker.add(update)
    
      return () => {
        gsap.ticker.remove(update)
      }
    })
    const lenis = useLenis(({ scroll }) => {})
    return (
        <ReactLenis root ref={lenisRef} autoRaf={false}>{children}</ReactLenis>
    )
}
