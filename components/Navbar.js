import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-black/90 backdrop-blur-md fixed w-full z-50 border-b border-green-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-green-500 font-bold text-xl glow-text">
              $ whoami
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#services" className="text-gray-300 hover:text-green-500 px-3 py-2 text-sm font-mono">Services</a>
              <a href="#certifications" className="text-gray-300 hover:text-green-500 px-3 py-2 text-sm font-mono">Certifications</a>
              <a href="#hall-of-fame" className="text-gray-300 hover:text-green-500 px-3 py-2 text-sm font-mono">Hall of Fame</a>
              <a href="#contact" className="text-gray-300 hover:text-green-500 px-3 py-2 text-sm font-mono">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}