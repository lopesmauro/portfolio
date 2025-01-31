import React from 'react';
import { Rocket, Sparkles } from 'lucide-react';

function Hero({ isDarkTheme, isPortuguese }) {
  return (
    <div className="w-full lg:px-56 relative overflow-hidden py-72">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold leading-tight lg:text-6xl">
            {isPortuguese ? (
              <>
                Transformando ideias em
                <span className="block mt-2 bg-gradient-to-r from-[#FF0000] to-pink-900 bg-clip-text text-transparent">
                  experiências digitais
                  <span className="animate-pulse">_</span>
                </span>
              </>
            ) : (
              <>
                Transforming ideas into
                <span className="block mt-2 bg-gradient-to-r from-[#FF0000] to-pink-900 bg-clip-text text-transparent">
                  digital experiences
                  <span className="animate-pulse">_</span>
                </span>
              </>
            )}
          </h1>
          <p className="text-xl text-gray-400">
            {isPortuguese
              ? 'Criando soluções inovadoras com código limpo e design intuitivo'
              : 'Creating innovative solutions with clean code and intuitive design'}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-4 bg-gradient-to-r from-[#FF0000] to-pink-900 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-600/20">
            <Rocket className="w-5 h-5" />
            {isPortuguese ? 'Iniciar Projeto' : 'Start Project'}
          </button>
          <button className="px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 border-2 border-white/10 hover:border-red-600 transition-colors duration-300">
            <Sparkles className="w-5 h-5" />
            {isPortuguese ? 'Ver Portfólio' : 'View Portfolio'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero;
