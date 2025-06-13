import { Server, Database, FileCode2, Terminal } from 'lucide-react'

const shadowOnIcons = {
  maskImage: 'linear-gradient(to top left, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 1) 70%)',
  WebkitMaskImage: 'linear-gradient(to top left, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 1) 60%)',
}

const services = [
  {
    title: 'Front-end',
    description: 'Crie interfaces de usuário bonitas e responsivas com frameworks modernos como React, Vue e Angular. Sou especialista em construir experiências interativas de front-end que encantam os usuários e aumentam o engajamento.',
    icon: <FileCode2 size={80} className="text-red-600" style={shadowOnIcons} />,
  },
  {
    title: 'Back-end',
    description: 'Desenvolva sistemas de back-end robustos e escaláveis usando tecnologias como Node.js, Python e bancos de dados como PostgreSQL e MongoDB. Construo a lógica do lado do servidor que impulsiona seu aplicativo e lida com o processamento complexo de dados.',
    icon: <Database size={80} className="text-red-600" style={shadowOnIcons} />,
  },
  {
    title: 'DevOps',
    description: 'Garanta que seu aplicativo funcione sem problemas e escale com facilidade através da integração e entrega contínuas (CI/CD), conteinerização com Docker e gerenciamento de infraestrutura com Kubernetes. Ajudo a automatizar seus fluxos de trabalho e otimizar as implantações.',
    icon: <Server size={80} className="text-red-600" style={shadowOnIcons} />,
  },
]


const Services = () => {
  return (
    <div className="w-full bg-secondary py-20 px-4 md:px-12">
      <div className="font-bold flex justify-center text-4xl mb-16">
        <Terminal className="mr-2 text-red-600" />
        <h1>
          Services
          <span className="bg-gradient-to-r from-[#FF0000] to-pink-900 bg-clip-text text-transparent">_</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="group relative bg-primary p-6 rounded-lg border-2 border-neutral-900  hover:border-red-600 transition-all duration-700">
            <div className='absolute inset-0 bg-gradient-to-tr from-red-600/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'/>
            <div className='py-5'>
              {service.icon}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold mb-2">{service.title}</h2>
            <p className="text-gray-600 text-sm sm:text-base">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
