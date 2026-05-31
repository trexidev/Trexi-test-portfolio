import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    }, 1000)
  }

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="badge-glass mb-4 inline-block">// initiate communication</span>
          <h2 className="section-title">Secure Channel</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">Ready to secure your infrastructure? Let's talk.</p>
        </div>

        <div className="glass-700m p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-green-500 text-sm font-mono mb-2">Name</label>
              <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full" />
            </div>
            <div>
              <label className="block text-green-500 text-sm font-mono mb-2">Email</label>
              <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full" />
            </div>
            <div>
              <label className="block text-green-500 text-sm font-mono mb-2">Message</label>
              <textarea required rows={5} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full"></textarea>
            </div>
            <button type="submit" disabled={status === 'sending'} className="btn-primary-glass w-full">
              {status === 'sending' ? 'Encrypting...' : 'Send Encrypted Message'}
            </button>
            {status === 'success' && <p className="text-green-500 text-center mt-4">Message delivered securely. I'll respond within 24 hours.</p>}
          </form>

          <div className="mt-8 pt-8 border-t border-green-500/20 text-center">
            <p className="text-gray-400 text-sm">Or reach me directly:</p>
            <p className="text-green-500 font-mono mt-2">alex.trexi@protonmail.com</p>
            <p className="text-gray-600 text-xs mt-2">PGP Key: 4A3F 9E2C 8B1D 7F5A</p>
          </div>
        </div>
      </div>
    </section>
  )
}