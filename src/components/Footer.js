import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const shadowOnIcons = {
    maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%)',
    WebkitMaskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%)',
  }
  return (
    <footer className="text-white py-10">
      <div
        className='border-t border-white border-opacity-10 w-full mb-12'
        style={shadowOnIcons}
      />
      <div className="container px-16 mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h4 className="text-4xl font-bold bg-gradient-to-r from-[#FF0000] to-pink-600 bg-clip-text text-transparent">MF</h4>
        </div>

        <div className="flex space-x-6">
          <a
            href="https://github.com/seu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github/>
          </a>
          <a
            href="www.linkedin.com/in/mauro-felipe-lopes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin/>
          </a>
          <a
            href="mailto:mfelipxl@gmail.com"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Mail/>
          </a>
        </div>
      </div>
      <p className="text-center text-md text-gray-500 mt-4">
        © {new Date().getFullYear()} <span className='bg-gradient-to-r from-[#FF0000] to-pink-600 bg-clip-text text-transparent'>maurofelipe.dev.br</span> Todos os direitos reservados.
      </p>
    </footer>
  )
}

export default Footer
