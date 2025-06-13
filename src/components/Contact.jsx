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
      <section id='contact'>
        <div className='contact-container'>
          <div className='contact-cards'>
            <div className="contact-card-social">
              <a className='github-icon contact-card rounded-lg border-2 border-neutral-900 border-opacity-25 hover:border-red-600 transition-all duration-700' href='https://github.com/lopesmauro' target='_blank' data-tooltip-id='github' data-tooltip-content='github.com/lopesmauro' data-tooltip-float rel='noopener noreferrer'>
                <AiFillGithub className='github icon text-red-600' style={shadowOnIcons} size={50} />
              </a>
              <a className='linkedin-icon contact-card rounded-lg border-2 border-neutral-900 hover:border-red-600 transition-all duration-700' href='https://www.linkedin.com/in/' target='_blank' data-tooltip-id='linkedin' data-tooltip-content='linkedin.com/in/mauro-felipe' data-tooltip-float rel='noopener noreferrer'>
                <FaLinkedin className='linkedin icon text-red-600' style={shadowOnIcons} size={50} />
              </a>
              <a className='email-icon contact-card rounded-lg border-2 border-neutral-900 hover:border-red-600 transition-all duration-700' href='mailto: @gmail.com' target='_blank' data-tooltip-id='gmail' data-tooltip-content='mfelipxl@gmail.com' data-tooltip-float rel='noopener noreferrer'>
                <SiGmail className='email icon text-red-600' style={shadowOnIcons} size={50} />
              </a>
            </div>
          </div>

          <div className='contact-title'>
            <h1>Venha me <strong className='text-red-600'>Contatar</strong>.</h1>
            <p>Oi de novo! Vou deixar algumas <strong>redes sociais</strong> para me contatar quando quiser.</p>
          </div>
        </div>
      </section>
      <Tooltip id="github" />
      <Tooltip id="linkedin" />
      <Tooltip id="gmail" />

    </>
  )
}

export default Contact
