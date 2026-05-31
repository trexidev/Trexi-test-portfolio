export default function Services() {
  const services = [
    { id: 1, title: "Penetration Testing", description: "Full-scope adversarial simulation to identify critical vulnerabilities before exploitation." },
    { id: 2, title: "Red Teaming", description: "Objective-driven attack simulation measuring your entire security posture." },
    { id: 3, title: "Security Architecture", description: "Designing resilient systems that withstand sophisticated threats." },
    { id: 4, title: "Incident Response", description: "Rapid containment, eradication, and recovery from active breaches." },
    { id: 5, title: "Compliance Auditing", description: "PCI-DSS, SOC2, ISO 27001 readiness and certification support." },
    { id: 6, title: "Advisory & Strategy", description: "C-suite security roadmap development for enterprise scale." },
  ]

  return (
    <section id="services" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="hacker-badge mb-4">// offensive security suite</span>
          <h2 className="section-title">Service Arsenal</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">Enterprise-grade security offerings trusted by Fortune 500.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} className="glass-card p-8">
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}