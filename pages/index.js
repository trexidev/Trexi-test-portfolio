import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Certifications from '../components/Certifications'
import HallOfFame from '../components/HallOfFame'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import CodeRain from '../components/CodeRain'
import Terminal from '../components/Terminal'  // ADD THIS

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
        <Terminal />  {/* ADD THIS */}
        <Contact />
        <Footer />
      </div>
    </>
  )
}