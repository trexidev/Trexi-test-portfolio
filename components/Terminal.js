import { useState, useRef, useEffect } from 'react'

export default function Terminal() {
  const [input, setInput] = useState('')
  const [history, setHistory] = useState([
    { type: 'output', content: '┌─────────────────────────────────────────────────┐' },
    { type: 'output', content: '│  Interactive Terminal v1.0                       │' },
    { type: 'output', content: '│  Type "help" to see available commands          │' },
    { type: 'output', content: '└─────────────────────────────────────────────────┘' },
    { type: 'output', content: '' },
    { type: 'prompt', content: 'root@portfolio:~$ ' },
  ])
  
  const terminalRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  const handleCommand = (cmd) => {
    const command = cmd.toLowerCase().trim()
    let response = []
    
    switch(command) {
      case 'help':
        response = [
          { type: 'output', content: 'Available commands:' },
          { type: 'output', content: '  whoami     - Display user information' },
          { type: 'output', content: '  skills     - List technical expertise' },
          { type: 'output', content: '  contact    - Show contact information' },
          { type: 'output', content: '  stats      - Display achievements' },
          { type: 'output', content: '  clear      - Clear terminal screen' },
          { type: 'output', content: '  help       - Show this message' },
        ]
        break
        
      case 'whoami':
        response = [
          { type: 'output', content: 'Name: Alex Trexi' },
          { type: 'output', content: 'Role: Red Team Operator | Security Researcher' },
          { type: 'output', content: 'Experience: 8+ years in offensive security' },
          { type: 'output', content: 'Specialization: Enterprise penetration testing' },
        ]
        break
        
      case 'skills':
        response = [
          { type: 'output', content: 'Technical Skills:' },
          { type: 'output', content: '  • Penetration Testing (Web, Mobile, Network)' },
          { type: 'output', content: '  • Red Teaming & Adversary Simulation' },
          { type: 'output', content: '  • Security Architecture Review' },
          { type: 'output', content: '  • Incident Response & Forensics' },
          { type: 'output', content: '  • Python, Bash, PowerShell, C' },
          { type: 'output', content: '  • Metasploit, Burp Suite, Cobalt Strike' },
        ]
        break
        
      case 'contact':
        response = [
          { type: 'output', content: 'Email: alex.trexi@protonmail.com' },
          { type: 'output', content: 'PGP Key: 4A3F 9E2C 8B1D 7F5A' },
          { type: 'output', content: 'Signal: +1 (555) 123-4567' },
          { type: 'output', content: 'GitHub: github.com/trexidev' },
        ]
        break
        
      case 'stats':
        response = [
          { type: 'output', content: 'Achievements:' },
          { type: 'output', content: '  • 50+ CVEs Discovered' },
          { type: 'output', content: '  • $85,000+ Bug Bounty Rewards' },
          { type: 'output', content: '  • Top 100 HackerOne Rank' },
          { type: 'output', content: '  • OSCP, OSCE3, CISSP, GPEN' },
        ]
        break
        
      case 'clear':
        setHistory([])
        return
        
      case '':
        response = []
        break
        
      default:
        response = [
          { type: 'output', content: `Command not found: ${command}` },
          { type: 'output', content: 'Type "help" for available commands' },
        ]
    }
    
    const newHistory = [
      ...history,
      { type: 'command', content: cmd },
      ...response,
      { type: 'prompt', content: 'root@portfolio:~$ ' },
    ]
    
    setHistory(newHistory)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim()) {
      handleCommand(input)
      setInput('')
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e)
    }
  }

  return (
    <section className="py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="hacker-badge">$ interactive_terminal --live</span>
          <h2 className="text-3xl md:text-4xl font-bold text-green-500 mt-4 mb-4">Live Terminal</h2>
          <p className="text-gray-400 font-mono text-sm">Try typing "help" to get started</p>
        </div>

        <div className="terminal-panel overflow-hidden">
          <div className="bg-black/50 px-4 py-2 border-b border-green-500 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-green-500 text-xs ml-2 font-mono">terminal@portfolio:~</span>
          </div>
          
          <div 
            ref={terminalRef}
            className="h-96 overflow-y-auto p-4 font-mono text-sm"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            {history.map((item, index) => (
              <div key={index} className="mb-1">
                {item.type === 'prompt' && (
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">{item.content}</span>
                    <span className="animate-pulse">█</span>
                  </div>
                )}
                {item.type === 'command' && (
                  <div className="text-green-500">
                    <span>root@portfolio:~$ </span>
                    <span>{item.content}</span>
                  </div>
                )}
                {item.type === 'output' && (
                  <div className="text-gray-300 ml-4 whitespace-pre-wrap">{item.content}</div>
                )}
              </div>
            ))}
            
            <form onSubmit={handleSubmit} className="mt-2">
              <div className="flex items-center gap-2">
                <span className="text-green-500">root@portfolio:~$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent border-none outline-none text-green-500 font-mono text-sm"
                  autoFocus
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}