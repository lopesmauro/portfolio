import React from 'react'
import logo from '../assets/img/logo.png'

function Navbar(){
  return (
    <nav className="fixed w-full z-50 bg-primary py-6 backdrop-blur-lg border-b border-white/10">
      <div className="lg:px-56">
        <div className="flex items-center justify-center">
          <img src={logo} alt="logo" className="w-14 h-14" />
        </div>
        <div className="flex items-center gap-4">

        </div>
      </div>
    </nav>
  )
}

export default Navbar
