"use client"

import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedin } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { Tooltip } from 'react-tooltip'
import '../assets/styles/contact.css'

const Contact = () => {
  const shadowOnIcons = {
    maskImage: 'linear-gradient(to top left, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 1) 70%)',
    WebkitMaskImage: 'linear-gradient(to top left, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 1) 60%)',
  }

  return (
    <>
      <section id='contact' className="w-full bg-black py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-start gap-12">

          {/* Conteúdo do título */}
          <div className="md:w-1/2 flex flex-col justify-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Venha me <strong className='text-red-600'>Contatar</strong>.
            </h1>
            <p className="text-gray-300 text-lg">
              Oi de novo! Vou deixar algumas <strong>redes sociais</strong> para me contatar quando quiser.
            </p>
          </div>

          {/* Ícones */}
          <div className="md:w-1/2 flex flex-wrap gap-8 items-start">
            <a
              href='https://github.com/lopesmauro'
              target='_blank'
              rel='noopener noreferrer'
              className='contact-card rounded-lg border-2 border-neutral-900 border-opacity-25 hover:border-red-600 transition-all duration-700 p-4 flex items-center justify-center'
              data-tooltip-id='github'
              data-tooltip-content='github.com/lopesmauro'
              data-tooltip-float
            >
              <AiFillGithub className='text-red-600' style={shadowOnIcons} size={50} />
            </a>

            <a
              href='https://www.linkedin.com/in/'
              target='_blank'
              rel='noopener noreferrer'
              className='contact-card rounded-lg border-2 border-neutral-900 hover:border-red-600 transition-all duration-700 p-4 flex items-center justify-center'
              data-tooltip-id='linkedin'
              data-tooltip-content='linkedin.com/in/mauro-felipe'
              data-tooltip-float
            >
              <FaLinkedin className='text-red-600' style={shadowOnIcons} size={50} />
            </a>

            <a
              href='mailto: mfelipxl@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
              className='contact-card rounded-lg border-2 border-neutral-900 hover:border-red-600 transition-all duration-700 p-4 flex items-center justify-center'
              data-tooltip-id='gmail'
              data-tooltip-content='mfelipxl@gmail.com'
              data-tooltip-float
            >
              <SiGmail className='text-red-600' style={shadowOnIcons} size={50} />
            </a>
          </div>
        </div>
      </section>

      {/* Tooltips */}
      <Tooltip id="github" />
      <Tooltip id="linkedin" />
      <Tooltip id="gmail" />
    </>
  )
}

export default Contact
