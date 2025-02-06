import React from 'react'
import { Terminal, Calendar, Building2, ChevronRight } from 'lucide-react'

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Company Inc.",
    period: "2022 - Present",
    description: [
      "Led development of microservices architecture",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Mentored junior developers and conducted code reviews"
    ],
    tech: ["React", "Node.js", "Docker", "AWS"]
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd",
    period: "2020 - 2022",
    description: [
      "Developed and maintained multiple client projects",
      "Optimized database queries improving performance by 40%",
      "Integrated third-party APIs and payment gateways"
    ],
    tech: ["Vue.js", "Python", "PostgreSQL", "Redis"]
  },
]

const Experience = () => {
  return (
    <div className="w-full bg-secondary py-20 relative overflow-hidden">
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

      <div className="max-w-5xl mx-auto px-4 sm:px-12 lg:px-36 relative z-10">
        <div className="flex items-center justify-center gap-3 text-4xl font-bold mb-20">
          <Terminal className="text-red-600" />
          <h1>
            Experience
            <span className="bg-gradient-to-r from-[#FF0000] to-pink-900 bg-clip-text text-transparent">_</span>
          </h1>
        </div>

        <div className="relative">
          {experiences.map((exp, index) => {
            return (
              <div key={index} className="relative pb-12 group">
                <div className="ml-0 sm:ml-16 bg-primary p-8 rounded-2xl backdrop-blur-sm border-2 border-white border-opacity-10 hover:border-red-600 transform transition-all duration-500 group-hover:-translate-y-1 z-10">
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
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Experience
