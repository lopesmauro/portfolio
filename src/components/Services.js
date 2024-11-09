import { Container, Database, FileCode2 } from 'lucide-react'

const Services = () => {
  return (
    <div className="w-full mt-32 p-12">
      <div className="font-bold flex justify-center text-4xl mb-12">
        <h1>
          Services
          <span className="bg-gradient-to-r from-[#FF0000] to-pink-900 bg-clip-text text-transparent">.</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-stone-900 p-6 rounded-lg border-2 border-white border-opacity-10 hover:border-red-600 transition-all duration-700">
          <div className='py-5'>
            <FileCode2 size={80} className="text-red-600"/>
          </div>
          <h2 className="text-2xl font-bold mb-2">Front-end</h2>
          <p className="text-gray-600">Create beautiful and responsive user interfaces with modern frameworks like React, Vue, and Angular. I specialize in building interactive front-end experiences that delight users and enhance engagement.</p>
        </div>

        <div className="bg-stone-900 p-6 rounded-lg border-2 border-white border-opacity-10 hover:border-red-600 transition-all duration-700">
          <div className='py-5'>
            <Database size={80} className="text-red-600"/>
          </div>
          <h2 className="text-2xl font-bold mb-2">Back-end</h2>
          <p className="text-gray-600">Develop robust and scalable back-end systems using technologies like Node.js, Python, and databases such as PostgreSQL and MongoDB. I build the server-side logic that powers your application and handles complex data processing.</p>
        </div>

        <div className="bg-stone-900 p-6 rounded-lg border-2 border-white border-opacity-10 hover:border-red-600 transition-all duration-700">
          <div className='py-5'>
            <Container size={80} className="text-red-600"/>
          </div>
          <h2 className="text-2xl font-bold mb-2">DevOps</h2>
          <p className="text-gray-600">Ensure your application runs smoothly and scales with ease through continuous integration and delivery (CI/CD), containerization with Docker, and infrastructure management with Kubernetes. I help automate your workflows and optimize deployments.</p>
        </div>
      </div>
    </div>
  )
}

export default Services
