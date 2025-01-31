import React from 'react';
import { Sun, Moon, Code, Globe } from 'lucide-react';

function Navbar({ isPortuguese, isDarkTheme, setIsPortuguese, setIsDarkTheme }) {
  return (
    <nav className="fixed w-full z-50 bg-secondary py-6 backdrop-blur-lg border-b border-white/10">
      <div className="lg:px-56">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2 group">
            <Code className="w-8 h-8 text-red-600 transform group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-2xl font-bold bg-gradient-to-r from-[#FF0000] to-pink-900 bg-clip-text text-transparent">
              Mauro.dev
              <span className="animate-pulse">_</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsPortuguese(!isPortuguese)}
              className="p-2 rounded-lg transition-all duration-300 bg-white/5 hover:bg-red-600/20 hover:text-red-600"
            >
              <Globe className={`w-5 h-5 ${isPortuguese ? 'text-red-600' : ''}`} />
            </button>

            <button
              onClick={() => setIsDarkTheme(!isDarkTheme)}
              className="p-2 rounded-lg transition-all duration-300 bg-white/5 hover:bg-red-600/20 hover:text-red-600"
            >
              {isDarkTheme ? (
                <Moon className="w-5 h-5 text-red-600" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
