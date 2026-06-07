export default function Resume() {
  const handleDownload = () => {
    // Create a link to download the PDF
    const link = document.createElement('a')
    link.href = '/resume.pdf'  // Points to public/resume.pdf
    link.download = 'Alex_Trexi_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="resume" className="py-16 sm:py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <span className="badge-glass mb-4 inline-block">$ download_resume --pdf</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-500 mt-4 mb-4">Download My Resume</h2>
          <p className="text-gray-400 font-mono text-sm">Get my complete professional profile in PDF format</p>
        </div>
        
        <div className="terminal-panel p-4 sm:p-8">
          {/* Resume Preview */}
          <div className="text-left space-y-4 mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-green-500/20 pb-3">
              <span className="text-green-500 font-mono text-sm sm:text-base">Alex Trexi - Red Team Operator</span>
              <span className="text-gray-500 text-xs sm:text-sm">2025 Edition</span>
            </div>
            
            {/* Experience */}
            <div>
              <p className="text-green-500 font-mono text-sm mb-3">▶ Professional Experience</p>
              <div className="space-y-3 ml-2 sm:ml-4">
                <div>
                  <p className="text-white text-sm sm:text-base font-semibold">Senior Penetration Tester</p>
                  <p className="text-green-500 text-xs sm:text-sm">CyberGuard Security | 2022 - Present</p>
                  <p className="text-gray-400 text-xs sm:text-sm mt-1">Lead red team operations for Fortune 500 clients. Discovered 25+ critical vulnerabilities.</p>
                </div>
                <div>
                  <p className="text-white text-sm sm:text-base font-semibold">Red Team Lead</p>
                  <p className="text-green-500 text-xs sm:text-sm">SecureStack Inc. | 2019 - 2022</p>
                  <p className="text-gray-400 text-xs sm:text-sm mt-1">Managed team of 5 security researchers. Developed automated pentesting frameworks.</p>
                </div>
                <div>
                  <p className="text-white text-sm sm:text-base font-semibold">Security Analyst</p>
                  <p className="text-green-500 text-xs sm:text-sm">InfoDefend | 2017 - 2019</p>
                  <p className="text-gray-400 text-xs sm:text-sm mt-1">Performed vulnerability assessments and incident response.</p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <p className="text-green-500 font-mono text-sm mb-3">▶ Certifications</p>
              <div className="flex flex-wrap gap-2 ml-2 sm:ml-4">
                <span className="text-green-500 text-xs border border-green-500/30 px-2 py-1 rounded">OSCP</span>
                <span className="text-green-500 text-xs border border-green-500/30 px-2 py-1 rounded">OSCE3</span>
                <span className="text-green-500 text-xs border border-green-500/30 px-2 py-1 rounded">CISSP</span>
                <span className="text-green-500 text-xs border border-green-500/30 px-2 py-1 rounded">GPEN</span>
                <span className="text-green-500 text-xs border border-green-500/30 px-2 py-1 rounded">CEH</span>
              </div>
            </div>

            {/* Skills */}
            <div>
              <p className="text-green-500 font-mono text-sm mb-3">▶ Technical Skills</p>
              <div className="flex flex-wrap gap-2 ml-2 sm:ml-4">
                <span className="text-gray-300 text-xs border border-gray-700 px-2 py-1 rounded">Penetration Testing</span>
                <span className="text-gray-300 text-xs border border-gray-700 px-2 py-1 rounded">Red Teaming</span>
                <span className="text-gray-300 text-xs border border-gray-700 px-2 py-1 rounded">Python/Bash</span>
                <span className="text-gray-300 text-xs border border-gray-700 px-2 py-1 rounded">Metasploit</span>
                <span className="text-gray-300 text-xs border border-gray-700 px-2 py-1 rounded">Burp Suite</span>
                <span className="text-gray-300 text-xs border border-gray-700 px-2 py-1 rounded">Cobalt Strike</span>
              </div>
            </div>

            {/* Achievements */}
            <div>
              <p className="text-green-500 font-mono text-sm mb-3">▶ Key Achievements</p>
              <div className="space-y-1 ml-2 sm:ml-4">
                <p className="text-gray-400 text-xs sm:text-sm">• 50+ CVEs Discovered</p>
                <p className="text-gray-400 text-xs sm:text-sm">• $85,000+ Bug Bounty Rewards</p>
                <p className="text-gray-400 text-xs sm:text-sm">• Top 100 HackerOne Rank</p>
                <p className="text-gray-400 text-xs sm:text-sm">• Speaker at DEF CON 2023</p>
              </div>
            </div>
          </div>
          
          {/* Download Button */}
          <button 
            onClick={handleDownload}
            className="btn-terminal-primary w-full text-center py-3 text-sm sm:text-base"
          >
            $ wget resume.pdf --save
          </button>
          
          <p className="text-gray-500 text-xs mt-4 font-mono text-center">
            PGP Signed | SHA256: 4a3f9e2c8b1d7f5a...
          </p>
          
          <p className="text-green-500/70 text-xs mt-4 text-center">
            ✅ Your actual resume PDF will download when you click the button
          </p>
        </div>
      </div>
    </section>
  )
}