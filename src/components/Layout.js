import { useState } from 'react'
import Hero from './Hero'
import Navbar from './Navbar'
import Services from './Services'
import Footer from './Footer'
import Projects from './Projects'
import Experience from './Experience'

function Layout() {
  const [isPortuguese, setIsPortuguese] = useState(true)
  const [isDarkTheme, setIsDarkTheme] = useState(true)

  return (
    <div className={`z-10 relative overflow-x-hidden min-h-screen ${isDarkTheme ? 'bg-primary text-white' : 'bg-white text-black'} transition-colors duration-300`}>
      <Navbar
        isPortuguese={isPortuguese}
        setIsPortuguese={setIsPortuguese}
        setIsDarkTheme={setIsDarkTheme}
        isDarkTheme={isDarkTheme}
      />
      <Hero
        isDarkTheme={isDarkTheme}
      />
      <Services/>
      <Projects/>
      <Experience/>
      <Footer/>
    </div>
  )
}

export default Layout
