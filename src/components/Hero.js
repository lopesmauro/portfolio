import React from 'react'
import { Rocket, Sparkles } from 'lucide-react'
import { cn } from '../lib/utils'

function Hero({ isPortuguese }) {
  return (
    <div className="w-full h-screen flex justify-center items-center relative text-white py-24 px-8 bg-secondary">

      {/* Grid background com linhas vermelhas */}
      <div
        className={cn(
          "absolute inset-0 z-0",
          "[background-size:60px_60px]",
          "[background-image:linear-gradient(to_right,rgba(255,0,0,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,0,0,0.2)_1px,transparent_1px)]",
          "[mask-image:linear-gradient(to_top,transparent,black_40%)]"
        )}
      />

      {/* Conteúdo */}
      <div className="relative z-10 text-center space-y-8">
        <div className="space-y-4">
          <h1 className="font-bold lg:text-5xl text-white">
            Olá! Me chamo <span className="bg-gradient-to-r from-[#FF0000] to-pink-900 bg-clip-text text-transparent font-bold leading-tight">Mauro Felipe</span>,
          </h1>
          <p className="text-xl text-gray-300">
            Sou desenvolvedor web full-stack.
          </p>
        </div>

        <div className="flex justify-center gap-6">
          <button className="px-8 py-4 bg-gradient-to-r from-[#FF0000] to-pink-900 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-600/20">
            <Rocket className="w-5 h-5" />
            Iniciar Projeto
          </button>
          <button className="px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 border-2 border-white/10 hover:border-red-600 text-white transition-colors duration-300">
            <Sparkles className="w-5 h-5" />
            Ver Portfólio
          </button>
        </div>
      </div>
    </div>
  )
}


export default Hero
