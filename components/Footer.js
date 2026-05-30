export default function Footer() {
  return (
    <footer className="bg-black py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="text-gray-400 hover:text-green-500">GitHub</a>
          <a href="#" className="text-gray-400 hover:text-green-500">Twitter</a>
          <a href="#" className="text-gray-400 hover:text-green-500">LinkedIn</a>
          <a href="#" className="text-gray-400 hover:text-green-500">HackerOne</a>
        </div>
        <p className="text-gray-500 text-sm">
          $ whoami --always-rooted-in-ethics<br />
          © 2025 - All vulnerabilities disclosed responsibly
        </p>
      </div>
    </footer>
  )
}