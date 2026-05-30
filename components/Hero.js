export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative z-10">
      <div className="text-center px-4">
        <div className="mb-6">
          <span className="text-green-500 font-mono text-sm border border-green-500/50 px-4 py-2 rounded-full hacker-tag inline-block">
            🔒 ROOT ACCESS GRANTED 🔒
          </span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6">
          <span className="neon">$ whoami</span>
        </h1>
        
        <div className="text-xl md:text-2xl text-gray-300 space-y-2 mb-8">
          <p>Ethical Hacker <span className="text-green-500">|</span> Security Researcher <span className="text-green-500">|</span> Bug Bounty Hunter</p>
          <p className="text-green-500 text-lg">{"< red team operator />"}</p>
        </div>

        <p className="text-gray-400 max-w-2xl mx-auto mb-12 font-mono">
          Finding vulnerabilities before the bad guys. 50+ CVEs disclosed | $25k+ in bounties
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#contact" className="btn-primary inline-block">
            🔓 Hire Me
          </a>
          <a href="#hall-of-fame" className="btn-outline inline-block">
            📜 View Hall of Fame
          </a>
        </div>

        <div className="mt-16 text-green-500/50 text-xs font-mono">
          <span className="terminal-cursor">system ready</span>
        </div>
      </div>
    </section>
  )
}