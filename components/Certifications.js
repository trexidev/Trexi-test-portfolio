export default function Certifications() {
  const certs = [
    { id: 1, name: "OSCP", issuer: "Offensive Security", year: "2024", icon: "🔴" },
    { id: 2, name: "CEH", issuer: "EC-Council", year: "2023", icon: "🟢" },
    { id: 3, name: "CISSP", issuer: "ISC2", year: "2024", icon: "🔵" },
    { id: 4, name: "PNPT", issuer: "TCM Security", year: "2024", icon: "🟣" },
  ]

  return (
    <section id="certifications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-500 mb-4">
            # certifications
          </h2>
          <p className="text-gray-400">Validated expertise, recognized globally</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {certs.map((cert) => (
            <div key={cert.id} className="bg-gray-900 p-6 rounded-lg border border-gray-800 min-w-[200px] text-center hover:border-green-500/50 transition-all">
              <div className="text-3xl mb-2">{cert.icon}</div>
              <h3 className="text-xl font-bold text-white">{cert.name}</h3>
              <p className="text-green-500 text-sm">{cert.issuer}</p>
              <p className="text-gray-500 text-xs mt-1">{cert.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}