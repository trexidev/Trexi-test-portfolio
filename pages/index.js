import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Certifications from '../components/Certifications'
import HallOfFame from '../components/HallOfFame'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <div className="scan-line"></div>
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