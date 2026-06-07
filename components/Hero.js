export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative z-10">
      <div className="text-center px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="mb-6 sm:mb-8">
          <span className="hacker-badge text-xs sm:text-sm">$ whoami --root</span>
        </div>
        
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-4 sm:mb-6">
          <span className="text-green-500 break-words">Alex Trexi</span>
        </h1>
        
        <div className="text-base sm:text-xl md:text-2xl space-y-1 sm:space-y-2 mb-6 sm:mb-8">
          <p className="text-gray-300">Red Team Operator | Security Researcher</p>
          <p className="text-green-500 text-sm sm:text-lg">{">_ offensive security specialist"}</p>
        </div>

        <p className="text-gray-400 max-w-2xl mx-auto mb-8 sm:mb-12 font-mono text-xs sm:text-sm">
          [root@kali:~]$ find vulnerabilities --before-exploitation --enterprise-grade
          <br />
          <span className="text-green-500 text-xs sm:text-sm">50+ CVEs • $85k+ bounties • 100% success</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center flex-wrap">
          <a href="#contact" className="btn-terminal-primary text-center">
            init_engagement()
          </a>
          <a href="#hall-of-fame" className="btn-terminal text-center">
            view_credentials()
          </a>
        </div>

        <div className="mt-12 sm:mt-20 flex flex-col sm:flex-row justify-center gap-6 sm:gap-12">
          <div>
            <div className="stat-number text-2xl sm:text-4xl md:text-5xl">50+</div>
            <div className="text-gray-500 text-xs sm:text-sm font-mono">CVEs Discovered</div>
          </div>
          <div>
            <div className="stat-number text-2xl sm:text-4xl md:text-5xl">$85k+</div>
            <div className="text-gray-500 text-xs sm:text-sm font-mono">Bounties Earned</div>
          </div>
          <div>
            <div className="stat-number text-2xl sm:text-4xl md:text-5xl">100%</div>
            <div className="text-gray-500 text-xs sm:text-sm font-mono">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  )
}