import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    
    // Your Web3Forms access key - REPLACE THIS WITH YOUR REAL KEY
    const accessKey = '82d7c736-32ee-4635-865d-74dabc3d40ce'
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New message from ${formData.name} - Hacker Portfolio`,
          from_name: 'Hacker Portfolio Contact Form',
        })
      })
      
      const result = await response.json()
      
      if (result.success) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="hacker-badge">$ send_message --secure</span>
          <h2 className="text-3xl md:text-4xl font-bold text-green-500 mt-4 mb-4">Secure Channel</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4 font-mono text-sm">[root@kali:~]$ echo "Let's talk about your security" | netcat -nv</p>
        </div>

        <div className="terminal-panel p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-green-500 text-sm font-mono mb-2">$ name</label>
              <input 
                type="text" 
                required 
                value={formData.name} 
                onChange={(e) => setFormData({...formData, name: e.target.value})} 
                className="w-full bg-black/50 border border-green-500 rounded-md px-4 py-2 text-green-500 font-mono focus:outline-none focus:ring-1 focus:ring-green-500"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label className="block text-green-500 text-sm font-mono mb-2">$ email</label>
              <input 
                type="email" 
                required 
                value={formData.email} 
                onChange={(e) => setFormData({...formData, email: e.target.value})} 
                className="w-full bg-black/50 border border-green-500 rounded-md px-4 py-2 text-green-500 font-mono focus:outline-none focus:ring-1 focus:ring-green-500"
                placeholder="john@example.com"
              />
            </div>
            
            <div>
              <label className="block text-green-500 text-sm font-mono mb-2">$ message</label>
              <textarea 
                required 
                rows={5} 
                value={formData.message} 
                onChange={(e) => setFormData({...formData, message: e.target.value})} 
                className="w-full bg-black/50 border border-green-500 rounded-md px-4 py-2 text-green-500 font-mono focus:outline-none focus:ring-1 focus:ring-green-500"
                placeholder="Describe your security needs..."
              />
            </div>
            
            <button 
              type="submit" 
              disabled={status === 'sending'} 
              className="btn-terminal-primary w-full py-3 text-lg font-bold"
            >
              {status === 'sending' ? '[ encrypting & sending... ]' : '$ send_message()'}
            </button>
            
            {status === 'success' && (
              <div className="text-green-500 text-center mt-4 p-3 border border-green-500/30 rounded-md bg-green-500/10 font-mono text-sm">
                ✓ Message delivered securely. I'll respond within 24 hours.
              </div>
            )}
            
            {status === 'error' && (
              <div className="text-red-500 text-center mt-4 p-3 border border-red-500/30 rounded-md bg-red-500/10 font-mono text-sm">
                ✗ Transmission failed. Please email me directly at alex.trexi@protonmail.com
              </div>
            )}
          </form>

          <div className="mt-8 pt-8 border-t border-green-500/20 text-center">
            <p className="text-gray-400 text-sm font-mono">$ cat alternative_contact.txt</p>
            <p className="text-green-500 font-mono mt-2">alex.trexi@protonmail.com</p>
            <p className="text-gray-600 text-xs mt-2">PGP Key: 4A3F 9E2C 8B1D 7F5A</p>
          </div>
        </div>
      </div>
    </section>
  )
}