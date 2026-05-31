import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 py-5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-green-500 font-bold text-xl tracking-tight neon-green">
            $ whoami
          </Link>
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-300 hover:text-green-500 transition font-mono text-sm">Services</a>
            <a href="#certifications" className="text-gray-300 hover:text-green-500 transition font-mono text-sm">Certifications</a>
            <a href="#hall-of-fame" className="text-gray-300 hover:text-green-500 transition font-mono text-sm">Hall of Fame</a>
            <a href="#contact" className="text-gray-300 hover:text-green-500 transition font-mono text-sm">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  )
}