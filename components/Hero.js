export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative z-10">
      <div className="text-center px-6 max-w-5xl mx-auto">
        <div className="mb-8">
          <span className="badge-glass text-sm">// root@billionaire:~$</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6">
          <span className="gradient-text">
            Alex Trexi
          </span>
        </h1>
        
        <div className="text-xl md:text-2xl text-gray-300 space-y-2 mb-8">
          <p>Red Team Operator <span className="text-green-500">|</span> Security Researcher</p>
          <p className="text-green-500 text-lg font-mono">{"< offensive security specialist />"}</p>
        </div>

        <p className="text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Discovering critical vulnerabilities before exploitation. 
          Trusted by Fortune 500 enterprises and government agencies.
        </p>

        <div className="flex gap-5 justify-center flex-wrap">
          <a href="#contact" className="btn-primary-glass">
            Initiate Engagement
          </a>
          <a href="#hall-of-fame" className="btn-glass">
            View Credentials
          </a>
        </div>

        <div className="mt-20 flex justify-center gap-12 flex-wrap">
          <div className="glass-heavy px-8 py-4 rounded-2xl">
            <div className="stat-glass">50+</div>
            <div className="text-gray-500 text-sm">CVEs Discovered</div>
          </div>
          <div className="glass-heavy px-8 py-4 rounded-2xl">
            <div className="stat-glass">$85k+</div>
            <div className="text-gray-500 text-sm">Bounties Earned</div>
          </div>
          <div className="glass-heavy px-8 py-4 rounded-2xl">
            <div className="stat-glass">100%</div>
            <div className="text-gray-500 text-sm">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  )
}