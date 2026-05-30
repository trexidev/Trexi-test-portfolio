export default function HallOfFame() {
  const hallOfFame = [
    { id: 1, platform: "HackerOne", company: "Google", reward: "$5,000", year: "2024" },
    { id: 2, platform: "Bugcrowd", company: "Microsoft", reward: "$3,500", year: "2024" },
    { id: 3, platform: "YesWeHack", company: "NASA", reward: "$2,000", year: "2023" },
    { id: 4, platform: "Intigriti", company: "Atlassian", reward: "$1,500", year: "2023" },
  ]

  return (
    <section id="hall-of-fame" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-500 mb-4">
            # hall of fame
          </h2>
          <p className="text-gray-400">Recognized by top companies for finding critical vulnerabilities</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-green-500/30">
                <th className="text-left py-3 px-4 text-green-500">Platform</th>
                <th className="text-left py-3 px-4 text-green-500">Company</th>
                <th className="text-left py-3 px-4 text-green-500">Reward</th>
                <th className="text-left py-3 px-4 text-green-500">Year</th>
              </tr>
            </thead>
            <tbody>
              {hallOfFame.map((entry) => (
                <tr key={entry.id} className="border-b border-gray-800 hover:bg-green-500/5">
                  <td className="py-3 px-4 text-white">{entry.platform}</td>
                  <td className="py-3 px-4 text-gray-300">{entry.company}</td>
                  <td className="py-3 px-4 text-green-500">{entry.reward}</td>
                  <td className="py-3 px-4 text-gray-500">{entry.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-8">
          <span className="text-sm text-gray-500">+ 20 more private disclosures</span>
        </div>
      </div>
    </section>
  )
}