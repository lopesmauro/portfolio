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
    <section className="w-full bg-black py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 relative z-10">
        {/* Título */}
        <div className="md:w-1/4 flex items-start">
          <div className="flex items-center text-4xl font-extrabold text-white">
            <Terminal className="mr-3 text-red-600" />
            <h1>
              Experiência
              <span className="bg-gradient-to-r from-red-600 to-pink-900 bg-clip-text text-transparent">_</span>
            </h1>
          </div>
        </div>

        {/* Cards */}
        <div className="md:w-3/4 space-y-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 p-[1px] rounded-2xl group"
            >
              <div className="relative bg-black rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_25px_-5px_rgba(220,38,38,0.4)] border border-neutral-800">
                {/* Gradiente leve no fundo */}
                <div className="absolute inset-0 bg-gradient-to-t from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />

                {/* Header */}
                <div className="flex flex-wrap justify-between items-start gap-4 mb-6 relative z-10">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-1 text-white">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Building2 size={16} />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  {/* Badge de período minimalista */}
                  <div className="flex items-center gap-2 text-sm text-white bg-red-600 px-3 py-1 rounded-full">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Descrição */}
                <ul className="space-y-3 mb-6 text-gray-300 relative z-10">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ChevronRight size={16} className="mt-1 text-red-600" />
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                {/* Tecnologias minimalistas */}
                <div className="flex flex-wrap gap-2 relative z-10">
                  {exp.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm text-white bg-red-600 rounded-full"
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
    </section>
  )
}

export default Experience
