import React from 'react'
import { Terminal, Calendar, Building2, ChevronRight } from 'lucide-react'

const experiences = [
  {
    title: "Trainee Developer",
    company: "Imprensa Oficial",
    period: "2024 - Present",
    description: [
      "Criação de servidores utilizando TypeScript com Express.js e Fastify",
      "Integração com APIs externas e manipulação de dados",
      "Trabalho com bancos de dados MongoDB e PostgreSQL",
      "Desenvolvimento de interfaces modernas com React e Next.js",
      "Estilização responsiva com Tailwind CSS",
      "Uso de Docker para containerização e Git para versionamento",
      "Experiência com configuração de servidores em ambientes Linux"
    ],
    tech: [
      "TypeScript",
      "Fastify",
      "Express.js",
      "React",
      "Next.js",
      "Tailwind CSS",
      "MongoDB",
      "PostgreSQL",
      "Docker",
      "Git",
      "Linux"
    ]
  }
]

const Experience = () => {
  return (
    <div className="w-full bg-[#131314] py-20 relative overflow-hidden">
      {/* Fundo com grid vermelho sutil */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              'linear-gradient(90deg, rgba(255, 0, 0, 0.15) 1px, transparent 1px), linear-gradient(rgba(255, 0, 0, 0.15) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      {/* Container principal alinhado com Services e Projects */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row gap-12">
        {/* Coluna do título */}
        <div className="md:w-1/4 flex items-start">
          <div className="font-bold flex items-center text-4xl">
            <Terminal className="mr-2 text-red-600" />
            <h1>
              Experiência
              <span className="bg-gradient-to-r from-[#FF0000] to-pink-900 bg-clip-text text-transparent">_</span>
            </h1>
          </div>
        </div>

        {/* Coluna dos cards */}
        <div className="md:w-3/4 space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative group">
              <div className="bg-[#0c0c0d] p-8 rounded-2xl backdrop-blur-sm border-2 border-neutral-900 hover:border-red-600 transform transition-all duration-500 group-hover:-translate-y-1 z-10 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Building2 size={16} />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-red-600 bg-red-600/10 border border-red-600/20 px-4 py-2 rounded-full">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6 text-gray-600">
                  {exp.description.map((desc, descIndex) => (
                    <li key={descIndex} className="flex items-start gap-2">
                      <ChevronRight size={16} className="mt-1 text-red-600" />
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm rounded-full bg-red-600/10 text-red-600 border border-red-600/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
