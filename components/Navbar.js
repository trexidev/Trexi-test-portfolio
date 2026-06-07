import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Navbar() {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavigation = (sectionId) => {
    setIsMenuOpen(false)
    
    if (router.pathname === '/') {
      // Already on homepage, just scroll
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // On blog or other page, navigate to homepage then scroll
      router.push(`/#${sectionId}`)
    }
  }

  return (
    <nav className="fixed w-full z-50 py-4 bg-black/95 backdrop-blur-md border-b border-green-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-green-500 font-bold text-xl tracking-tight">
            $ whoami
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            <button onClick={() => handleNavigation('services')} className="text-gray-300 hover:text-green-500 transition font-mono text-sm cursor-pointer">
              Services
            </button>
            <button onClick={() => handleNavigation('certifications')} className="text-gray-300 hover:text-green-500 transition font-mono text-sm cursor-pointer">
              Certifications
            </button>
            <button onClick={() => handleNavigation('hall-of-fame')} className="text-gray-300 hover:text-green-500 transition font-mono text-sm cursor-pointer">
              Hall of Fame
            </button>
            <Link href="/blog" className="text-gray-300 hover:text-green-500 transition font-mono text-sm">
              Blog
            </Link>
            <button onClick={() => handleNavigation('resume')} className="text-gray-300 hover:text-green-500 transition font-mono text-sm cursor-pointer">
              Resume
            </button>
            <button onClick={() => handleNavigation('contact')} className="text-gray-300 hover:text-green-500 transition font-mono text-sm cursor-pointer">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-green-500 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <button onClick={() => handleNavigation('services')} className="block w-full text-left text-gray-300 hover:text-green-500 transition font-mono text-sm py-2 cursor-pointer">
              Services
            </button>
            <button onClick={() => handleNavigation('certifications')} className="block w-full text-left text-gray-300 hover:text-green-500 transition font-mono text-sm py-2 cursor-pointer">
              Certifications
            </button>
            <button onClick={() => handleNavigation('hall-of-fame')} className="block w-full text-left text-gray-300 hover:text-green-500 transition font-mono text-sm py-2 cursor-pointer">
              Hall of Fame
            </button>
            <Link href="/blog" className="block text-gray-300 hover:text-green-500 transition font-mono text-sm py-2" onClick={() => setIsMenuOpen(false)}>
              Blog
            </Link>
            <button onClick={() => handleNavigation('resume')} className="block w-full text-left text-gray-300 hover:text-green-500 transition font-mono text-sm py-2 cursor-pointer">
              Resume
            </button>
            <button onClick={() => handleNavigation('contact')} className="block w-full text-left text-gray-300 hover:text-green-500 transition font-mono text-sm py-2 cursor-pointer">
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}