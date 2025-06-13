import React from 'react'
import logo from '../assets/img/logo.png'

const Footer = () => {
  const shadowOnIcons = {
    maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%)',
    WebkitMaskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%)',
  }

  return (
    <footer className="text-white py-10 flex justify-center items-center flex-col">
      <div className='border-t border-neutral-900 w-full mb-12' style={shadowOnIcons}/>
        <div className="flex gap-5 justify-center items-center md:text-left mb-4 md:mb-0">
          <img src={logo} alt="logo" className="w-14 h-14" />
          <div>
            <p> Desenvolvido por <br/> Mauro Felipe © <span className='text-red-600'>{new Date().getFullYear()}</span></p>
          </div>
      </div>
    </footer>
  )
}

export default Footer
