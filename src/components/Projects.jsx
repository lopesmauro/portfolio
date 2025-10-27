import React from "react";
import { ExternalLink, Github, Terminal } from "lucide-react";
import { FaReact, FaNodeJs, FaCss3Alt, FaDatabase } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiPrisma } from "react-icons/si";

const projects = [
  {
    title: "IssoBank",
    description:
      "Landing Page moderna e sofisticada inspirada no estilo do Banco Itaú, utilizando Next.js, TailwindCSS e ShadcnUI para entregar uma experiência visual marcante e profissional.",
    github: "https://github.com/lopesmauro/isso-landing-page",
    image: "./isso.png",
    tech: [
      { icon: FaReact, color: "text-cyan-400" },
      { icon: SiTailwindcss, color: "text-sky-400" },
      { icon: FaNodeJs, color: "text-green-500" },
    ],
  },
  {
    title: "MF Donalds",
    description:
      "Aplicativo moderno e eficiente de pedidos de fast-food, construído com Next.js, React, Tailwind CSS e Prisma. Oferece personalização e acompanhamento de pedidos em tempo real.",
    github: "https://github.com/seu-usuario/donalds",
    image: "./mf-donalds.jpg",
    tech: [
      { icon: SiNextdotjs, color: "text-white" },
      { icon: FaReact, color: "text-cyan-400" },
      { icon: SiTailwindcss, color: "text-sky-400" },
      { icon: SiPrisma, color: "text-teal-400" },
    ],
  },
  {
    title: "Trallha",
    description:
      "Aplicação de gerenciamento de tarefas estilo Trello, construída com React e TypeScript, demonstrando arquitetura limpa e escalável sem libs externas de estado.",
    github: "https://github.com/lopesmauro/trallha",
    image: "./trallha.png",
    tech: [
      { icon: FaReact, color: "text-cyan-400" },
      { icon: FaCss3Alt, color: "text-blue-400" },
      { icon: FaDatabase, color: "text-slate-300" },
    ],
  },
];

const Projects = () => {
  return (
    <div className="w-full bg-black py-20 px-4 lg:px-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Título */}
        <div className="font-bold flex justify-center items-center text-4xl mb-16 tracking-tight">
          <Terminal className="mr-2 text-red-600 size-9" />
          <h1 className="flex items-center gap-2">
            Projetos
            <span className="bg-gradient-to-r from-red-600 to-pink-900 bg-clip-text text-transparent">_</span>
          </h1>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-b from-neutral-900 to-black border border-neutral-800 rounded-2xl transition-all duration-700 hover:border-red-600 hover:shadow-[0_0_25px_-5px_rgba(220,38,38,0.6)] overflow-hidden"
            >
              {/* Gradiente hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-red-600/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

              {/* Imagem */}
              <div className="relative aspect-video overflow-hidden rounded-t-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>

              {/* Conteúdo */}
              <div className="p-6 flex flex-col gap-4">
                {/* Título e links */}
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">{project.title}</h3>
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

                {/* Descrição */}
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed line-clamp-3">{project.description}</p>

                {/* Tecnologias */}
                <div className="flex mt-4">
                  {project.tech.map((tech, i) => {
                    const IconComponent = tech.icon;
                    return (
                      <div
                        key={i}
                        className={`w-9 h-9 ${i !== 0 ? '-ml-3' : ''} flex items-center justify-center rounded-full border-4 border-black bg-red-600  backdrop-blur-sm`}
                      >
                        <IconComponent className={tech.color} size={20} />
                      </div>
                    );
                  })}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
