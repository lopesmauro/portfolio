import { Server, Database, FileCode2, Terminal } from 'lucide-react'

const shadowOnIcons = {
  maskImage: 'linear-gradient(to top left, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 1) 70%)',
  WebkitMaskImage: 'linear-gradient(to top left, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 1) 60%)',
}

const services = [
  {
    title: 'Front-end',
    description:
      'Crie interfaces de usuário bonitas e responsivas com frameworks modernos como React, Vue e Angular. Sou especialista em construir experiências interativas de front-end que encantam os usuários e aumentam o engajamento.',
    icon: <FileCode2 size={80} className="text-red-600" style={shadowOnIcons} />,
  },
  {
    title: 'Back-end',
    description:
      'Desenvolva sistemas de back-end robustos e escaláveis usando tecnologias como Node.js, Python e bancos de dados como PostgreSQL e MongoDB. Construo a lógica do lado do servidor que impulsiona seu aplicativo e lida com o processamento complexo de dados.',
    icon: <Database size={80} className="text-red-600" style={shadowOnIcons} />,
  },
  {
    title: 'DevOps',
    description:
      'Integro infraestrutura, automação e deploy contínuo para garantir que seus sistemas sejam confiáveis, escaláveis e fáceis de manter, usando ferramentas modernas como Docker, Kubernetes e CI/CD.',
    icon: <Server size={80} className="text-red-600" style={shadowOnIcons} />,
  },
]

const Services = () => {
  return (
    <div className="w-full bg-black py-20 px-4 lg:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Título da seção */}
        <div className="font-bold flex justify-center items-center text-4xl mb-16 tracking-tight">
          <Terminal className="mr-2 text-red-600 size-9" />
          <h1>
            Serviços
            <span className="bg-gradient-to-r from-red-600 to-pink-900 bg-clip-text text-transparent">_</span>
          </h1>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-b from-neutral-900 to-black p-6 rounded-2xl border border-neutral-800 hover:border-red-600 hover:shadow-[0_0_25px_-5px_rgba(220,38,38,0.6)] transition-all duration-700"
            >
              {/* Efeito de luz no hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-red-600/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="py-5">{service.icon}</div>
              <h2 className="text-xl sm:text-2xl font-bold mb-2">{service.title}</h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
