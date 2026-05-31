export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative z-10">
      <div className="text-center px-6 max-w-5xl mx-auto">
        <div className="mb-8">
          <span className="hacker-badge">$ whoami --root</span>
        </div>
        
        <h1 className="text-6xl md:text-7xl font-bold mb-6">
          <span className="text-green-500">Alex Trexi</span>
        </h1>
        
        <div className="text-xl md:text-2xl space-y-2 mb-8">
          <p className="text-gray-300">Red Team Operator | Security Researcher</p>
          <p className="text-green-500 text-lg">{">_ offensive security specialist"}</p>
        </div>

        <p className="text-gray-400 max-w-2xl mx-auto mb-12 font-mono text-sm">
          [root@kali:~]$ find vulnerabilities --before-exploitation --enterprise-grade
          <br />
          <span className="text-green-500">50+ CVEs • $85k+ bounties • 100% success</span>
        </p>

        <div className="flex gap-5 justify-center flex-wrap">
          <a href="#contact" className="btn-terminal-primary">
            init_engagement()
          </a>
          <a href="#hall-of-fame" className="btn-terminal">
            view_credentials()
          </a>
        </div>

        <div className="mt-20 flex justify-center gap-12 flex-wrap">
          <div>
            <div className="stat-number">50+</div>
            <div className="text-gray-500 text-sm font-mono">CVEs Discovered</div>
          </div>
          <div>
            <div className="stat-number">$85k+</div>
            <div className="text-gray-500 text-sm font-mono">Bounties Earned</div>
          </div>
          <div>
            <div className="stat-number">100%</div>
            <div className="text-gray-500 text-sm font-mono">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  )
}