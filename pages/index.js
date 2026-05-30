import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Certifications from '../components/Certifications'
import HallOfFame from '../components/HallOfFame'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import MatrixRain from '../components/MatrixRain'  // ← ADD THIS LINE

export default function Home() {
  return (
    <>
      <MatrixRain />  {/* ← ADD THIS LINE */}
      <Navbar />
      <Hero />
      <Services />
      <Certifications />
      <HallOfFame />
      <Contact />
      <Footer />
    </>
  )
}