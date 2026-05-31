
export default function HallOfFame() {
  const hallOfFame = [
    { id: 1, platform: "HackerOne", target: "Google VRP", reward: "$15,000", year: "2024", severity: "Critical" },
    { id: 2, platform: "Bugcrowd", target: "Microsoft", reward: "$10,000", year: "2024", severity: "High" },
    { id: 3, platform: "Intigriti", target: "Atlassian", reward: "$7,500", year: "2023", severity: "Critical" },
    { id: 4, platform: "YesWeHack", target: "NASA", reward: "$5,000", year: "2023", severity: "High" }
  ]

  return (
    <section id="hall-of-fame" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="badge-glass mb-4 inline-block"> acknowledged vulnerabilities</span>
          <h2 className="section-title">Hall of Fame</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">Recognized by global enterprises for critical discoveries.</p>
        </div>

        <div className="glass-700m overflow-hidden">
          <div className="p-6">
            {hallOfFame.map((entry) => (
              <div key={entry.id} className="flex justify-between items-center py-4 border-b border-gray-700 hover:bg-green-500/5 px-4 rounded-lg">
                <div className="w-1/5">
                  <span className="text-white font-mono text-sm">{entry.platform}</span>
                </div>
                <div className="w-1/5">
                  <span className="text-gray-300">{entry.target}</span>
                </div>
                <div className="w-1/5">
                  <span className="text-green-500 text-sm font-mono">{entry.severity}</span>
                </div>
                <div className="w-1/5">
                  <span className="text-green-500 font-mono">{entry.reward}</span>
                </div>
                <div className="w-1/5">
                  <span className="text-gray-500 text-sm">{entry.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm font-mono">plus 18 confidential disclosures under NDA</p>
        </div>
      </div>
    </section>
  )
}