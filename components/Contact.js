import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    // Form submission - replace with your endpoint
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    }, 1000)
  }

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-500 mb-4">
            # contact
          </h2>
          <p className="text-gray-400">Ready to secure your infrastructure? Let's talk.</p>
        </div>
        <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-green-500 text-sm font-mono mb-2">Name</label>
              <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-black border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-green-500 focus:outline-none" />
            </div>
            <div>
              <label className="block text-green-500 text-sm font-mono mb-2">Email</label>
              <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-black border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-green-500 focus:outline-none" />
            </div>
            <div>
              <label className="block text-green-500 text-sm font-mono mb-2">Message</label>
              <textarea required rows={5} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full bg-black border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-green-500 focus:outline-none"></textarea>
            </div>
            <button type="submit" disabled={status === 'sending'} className="w-full bg-green-500 text-black font-mono font-bold py-3 rounded-lg hover:bg-green-400 transition-all disabled:opacity-50">
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'success' && <p className="text-green-500 text-center">Message sent! I'll respond within 24 hours.</p>}
          </form>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400 text-sm">Or reach me directly:</p>
            <p className="text-green-500 font-mono mt-2">your.email@protonmail.com</p>
          </div>
        </div>
      </div>
    </section>
  )
}