export default function Footer() {
  return (
    <footer className="py-8 relative z-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="text-gray-400 hover:text-green-500 transition">GitHub</a>
          <a href="#" className="text-gray-400 hover:text-green-500 transition">Twitter</a>
          <a href="#" className="text-gray-400 hover:text-green-500 transition">LinkedIn</a>
          <a href="#" className="text-gray-400 hover:text-green-500 transition">HackerOne</a>
        </div>
        <p className="text-gray-500 text-sm font-mono">
          $ whoami --privileged --secure<br />
          © 2025 — All vulnerabilities disclosed responsibly
        </p>
      </div>
    </footer>
  )
}