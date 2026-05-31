export default function HallOfFame() {
  const hallOfFame = [
    { id: 1, platform: "HackerOne", target: "Google VRP", reward: "$15,000", year: "2024", severity: "Critical" },
    { id: 2, platform: "Bugcrowd", target: "Microsoft", reward: "$10,000", year: "2024", severity: "High" },
    { id: 3, platform: "Intigriti", target: "Atlassian", reward: "$7,500", year: "2023", severity: "Critical" },
    { id: 4, platform: "YesWeHack", target: "NASA", reward: "$5,000", year: "2023", severity: "High" },
  ]

  return (
    <section id="hall-of-fame" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="hacker-badge mb-4">// acknowledged vulnerabilities</span>
          <h2 className="section-title">Hall of Fame</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">Recognized by global enterprises for critical discoveries.</p>
        </div>

        <div className="glass overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-green-500/30">
                <th className="text-left py-4 px-6 text-green-500 font-medium">Platform</th>
                <th className="text-left py-4 px-6 text-green-500 font-medium">Target</th>
                <th className="text-left py-4 px-6 text-green-500 font-medium">Severity</th>
                <th className="text-left py-4 px-6 text-green-500 font-medium">Reward</th>
                <th className="text-left py-4 px-6 text-green-500 font-medium">Year</th>
              </tr>
            </thead>
            <tbody>
              {hallOfFame.map((entry) => (
                <tr key={entry.id} className="border-b border-gray-800 hover:bg-green-500/5">
                  <td className="py-4 px-6 text-white font-mono text-sm">{entry.platform}</td>
                  <td className="py-4 px-6 text-gray-300">{entry.target}</td>
                  <td className="py-4 px-6">
                    <span className="text-green-500 text-sm font-mono">{entry.severity}</span>
                  </td>
                  <td className="py-4 px-6 text-green-500 font-mono">{entry.reward}</td>
                  <td className="py-4 px-6 text-gray-500 text-sm">{entry.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm font-mono">+18 confidential disclosures under NDA</p>
        </div>
      </div>
    </section>
  )
}