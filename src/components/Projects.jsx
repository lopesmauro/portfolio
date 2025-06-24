import React from 'react';
import { ExternalLink, Github, Terminal } from 'lucide-react'

const projects = [
  {
    title: "Agenda",
    description: "Minha primeira aplicação em 2022, um aplicativo de agenda telefônica construído com o padrão MVC. Permite aos usuários gerenciar contatos com operações CRUD, através de rotas RESTful.",
    tech: ["Node.js", "Express", "Mustache", "MongoDB"],
    github: "https://github.com/lopesmauro/agenda",
    live: "https://terminal-blog.demo", 
    image: "./agenda.png",
  },
  {
    title: "MyLeague",
    description: "MyLeague é uma plataforma desenvolvida para simplificar o gerenciamento de torneios de futebol, permitindo aos usuários criar, organizar e acompanhar competições de forma eficiente.",
    tech: ["Next.js", "Tailwind.css", "Node.js", "Fastify", "Prisma", "Docker"], 
    github: "https://github.com/lopesmauro/myleague",
    image: "./myleague.png",
  },
  {
    title: "Isso",
    description: "'Isso' é uma Landing page de estudo de caso inspirada no banco Itaú feita em Next.js.",
    tech: ["React", "Tailwind.css", "Node.js"], 
    github: "https://github.com/lopesmauro/isso-landing-page",
    image: "./isso.png",
  },
]

const Projects = () => {
  return (
    <div className="w-full px-4 lg:px-12 py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="font-bold flex justify-center text-4xl mb-16">
          <Terminal className="mr-2 text-red-600" />
          <h1>
            Projetos
            <span className="bg-gradient-to-r from-[#FF0000] to-pink-900 bg-clip-text text-transparent">_</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-zinc-900/50 border-2 border-neutral-900  hover:border-red-600 rounded-2xl overflow-hidden transform transition-all duration-700 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/10 hover:bg-red-600 text-white backdrop-blur-sm transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-white/10 hover:bg-red-600 text-white backdrop-blur-sm transition-colors duration-300"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 text-sm sm:text-base">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech, techIndex) => (
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

export default Projects;
