import React from 'react'
import { Sun, Moon, Globe } from 'lucide-react'
import logo from '../assets/img/logo.png'

function Navbar({ isPortuguese, isDarkTheme, setIsPortuguese, setIsDarkTheme }) {
  return (
    <nav className="fixed w-full z-50 bg-primary py-6 backdrop-blur-lg border-b border-white/10">
      <div className="lg:px-56">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2 group">
            <img src={logo} alt="logo" className="w-14 h-14" />
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsPortuguese(!isPortuguese)}
              className="p-2 rounded-lg transition-all duration-300 bg-white/5 hover:bg-red-600/20 hover:text-red-600"
            >
              <Globe className={`w-6 h-6 ${isPortuguese ? 'text-red-600' : ''}`} />
            </button>

            <button
              onClick={() => setIsDarkTheme(!isDarkTheme)}
              className="p-2 rounded-lg transition-all duration-300 bg-white/5 hover:bg-red-600/20 hover:text-red-600"
            >
              {isDarkTheme ? (
                <Moon className="w-6 h-6 text-red-600" />
              ) : (
                <Sun className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
