import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Navbar() {
  const router = useRouter()
  const isHomePage = router.pathname === '/'
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = (e, sectionId) => {
    setIsMenuOpen(false)
    if (!isHomePage) {
      e.preventDefault()
      router.push(`/#${sectionId}`)
    }
  }

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed w-full z-50 py-4 bg-black/95 backdrop-blur-md border-b border-green-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-green-500 font-bold text-xl tracking-tight" onClick={handleLinkClick}>
            $ whoami
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            <a onClick={(e) => handleNavClick(e, 'services')} className="text-gray-300 hover:text-green-500 transition font-mono text-sm cursor-pointer">
              Services
            </a>
            <a onClick={(e) => handleNavClick(e, 'certifications')} className="text-gray-300 hover:text-green-500 transition font-mono text-sm cursor-pointer">
              Certifications
            </a>
            <a onClick={(e) => handleNavClick(e, 'hall-of-fame')} className="text-gray-300 hover:text-green-500 transition font-mono text-sm cursor-pointer">
              Hall of Fame
            </a>
            <Link href="/blog" className="text-gray-300 hover:text-green-500 transition font-mono text-sm" onClick={handleLinkClick}>
              Blog
            </Link>
            <a onClick={(e) => handleNavClick(e, 'contact')} className="text-gray-300 hover:text-green-500 transition font-mono text-sm cursor-pointer">
              Contact
            </a>
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
            <a onClick={(e) => handleNavClick(e, 'services')} className="block text-gray-300 hover:text-green-500 transition font-mono text-sm py-2 cursor-pointer">
              Services
            </a>
            <a onClick={(e) => handleNavClick(e, 'certifications')} className="block text-gray-300 hover:text-green-500 transition font-mono text-sm py-2 cursor-pointer">
              Certifications
            </a>
            <a onClick={(e) => handleNavClick(e, 'hall-of-fame')} className="block text-gray-300 hover:text-green-500 transition font-mono text-sm py-2 cursor-pointer">
              Hall of Fame
            </a>
            <Link href="/blog" className="block text-gray-300 hover:text-green-500 transition font-mono text-sm py-2" onClick={handleLinkClick}>
              Blog
            </Link>
            <a onClick={(e) => handleNavClick(e, 'contact')} className="block text-gray-300 hover:text-green-500 transition font-mono text-sm py-2 cursor-pointer">
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}