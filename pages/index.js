import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Certifications from '../components/Certifications'
import HallOfFame from '../components/HallOfFame'
import Resume from '../components/Resume'      // ADD THIS
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import CodeRain from '../components/CodeRain'

export default function Home() {
  return (
    <>
      <CodeRain />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Services />
        <Certifications />
        <HallOfFame />
        <Resume />                               
        <Contact />
        <Footer />
      </div>
    </>
  )
}