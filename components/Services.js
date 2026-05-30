export default function Services() {
  const services = [
    { id: 1, title: "Penetration Testing", description: "Simulate real-world attacks to identify vulnerabilities before malicious actors do.", icon: "🔍" },
    { id: 2, title: "Vulnerability Assessment", description: "Systematic review of security weaknesses in your infrastructure.", icon: "📊" },
    { id: 3, title: "Social Engineering Testing", description: "Test your team's security awareness through simulated attacks.", icon: "🎣" },
    { id: 4, title: "Security Auditing", description: "Comprehensive code and configuration review for compliance.", icon: "📝" },
    { id: 5, title: "Incident Response", description: "Rapid containment and remediation when a breach occurs.", icon: "🚨" },
    { id: 6, title: "Red Teaming", description: "Full-scope adversarial simulation to test your entire security posture.", icon: "🎯" },
  ]

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-500 mb-4">
            # services
          </h2>
          <p className="text-gray-400">What I can do to protect your organization</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} className="bg-black p-6 rounded-lg border border-gray-800 hover:border-green-500/50 transition-all hover:scale-105">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}