import Hero from './Hero'
import Navbar from './Navbar'
import Services from './Services'
import Footer from './Footer'
import Projects from './Projects'
import Experience from './Experience'
import Contact from './Contact'

function Layout() {
  return (
    <div className={`z-10 relative overflow-x-hidden min-h-screen bg-[#0c0c0d] text-white transition-colors duration-300`}>
      <Navbar/>
      <Hero/>
      <Services/>
      <Projects/>
      <Experience/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Layout
