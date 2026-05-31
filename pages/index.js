import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Certifications from '../components/Certifications'
import HallOfFame from '../components/HallOfFame'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import FallingGlass from '../components/FallingGlass'

export default function Home() {
  return (
    <div className="liquid-reflection">
      <FallingGlass />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Services />
        <Certifications />
        <HallOfFame />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}