import { useState } from 'react'
import Hero from './Hero'
import Navbar from './Navbar'

function Layout() {
  const [isPortuguese, setIsPortuguese] = useState(true)
  const [isDarkTheme, setIsDarkTheme] = useState(true)

  return (
    <div className={`relative overflow-x-hidden min-h-screen ${isDarkTheme ? 'bg-stone-900 text-white' : 'bg-white text-black'} transition-colors duration-300`}>
      <Navbar
        isPortuguese={isPortuguese}
        setIsPortuguese={setIsPortuguese}
        setIsDarkTheme={setIsDarkTheme}
        isDarkTheme={isDarkTheme}
      />   
      <Hero 
        isDarkTheme={isDarkTheme}
      />
    </div>
  )
}

export default Layout   
