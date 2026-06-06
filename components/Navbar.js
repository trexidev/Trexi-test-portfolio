import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar() {
  const router = useRouter()
  const isHomePage = router.pathname === '/'

  const handleNavClick = (e, sectionId) => {
    if (!isHomePage) {
      e.preventDefault()
      router.push(`/#${sectionId}`)
    }
  }

  return (
    <nav className="fixed w-full z-50 py-5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-green-500 font-bold text-xl tracking-tight">
            $ whoami
          </Link>
          <div className="hidden md:flex space-x-8">
            <a 
              href="#services" 
              onClick={(e) => handleNavClick(e, 'services')}
              className="text-gray-300 hover:text-green-500 transition font-mono text-sm cursor-pointer"
            >
              Services
            </a>
            <a 
              href="#certifications" 
              onClick={(e) => handleNavClick(e, 'certifications')}
              className="text-gray-300 hover:text-green-500 transition font-mono text-sm cursor-pointer"
            >
              Certifications
            </a>
            <a 
              href="#hall-of-fame" 
              onClick={(e) => handleNavClick(e, 'hall-of-fame')}
              className="text-gray-300 hover:text-green-500 transition font-mono text-sm cursor-pointer"
            >
              Hall of Fame
            </a>
            <Link href="/blog" className="text-gray-300 hover:text-green-500 transition font-mono text-sm">
              Blog
            </Link>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, 'contact')}
              className="text-gray-300 hover:text-green-500 transition font-mono text-sm cursor-pointer"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}