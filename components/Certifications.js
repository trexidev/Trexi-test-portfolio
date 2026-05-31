export default function Certifications() {
  const certs = [
    { id: 1, name: "OSCP", issuer: "Offensive Security", description: "Offensive Security Certified Professional" },
    { id: 2, name: "OSCE3", issuer: "Offensive Security", description: "Offensive Security Certified Expert 3" },
    { id: 3, name: "CISSP", issuer: "ISC²", description: "Certified Information Systems Security Professional" },
    { id: 4, name: "GPEN", issuer: "SANS", description: "GIAC Penetration Tester" },
  ]

  return (
    <section className="py-24 bg-black/40 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="hacker-badge mb-4">// credentials</span>
          <h2 className="section-title">Certifications & Training</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">Industry-recognized validation of expertise.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-5">
          {certs.map((cert) => (
            <div key={cert.id} className="glass-card p-6 min-w-[220px] text-center">
              <h3 className="text-2xl font-semibold text-white mb-1">{cert.name}</h3>
              <p className="text-green-500 text-sm">{cert.issuer}</p>
              <p className="text-gray-500 text-xs mt-2">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}