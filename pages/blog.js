import Link from 'next/link'
import CodeRain from '../components/CodeRain'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// Hardcoded posts (no JSON file needed)
const posts = [
  {
    id: 1,
    slug: "how-i-found-15000-rce-in-google",
    title: "How I Found a $15,000 RCE in Google",
    date: "2024-03-15",
    excerpt: "A deep dive into discovering a critical remote code execution vulnerability in Google's infrastructure.",
    readTime: "8 min read",
    tags: ["Bug Bounty", "RCE", "Google"]
  },
  {
    id: 2,
    slug: "sql-injection-modern-bypass-techniques",
    title: "SQL Injection: Modern Bypass Techniques",
    date: "2024-02-10",
    excerpt: "How to bypass WAFs and filters in 2024 using advanced SQL injection techniques.",
    readTime: "12 min read",
    tags: ["SQLi", "Web Security", "WAF Bypass"]
  },
  {
    id: 3,
    slug: "linux-privilege-escalation-for-red-teamers",
    title: "Linux Privilege Escalation for Red Teamers",
    date: "2024-01-20",
    excerpt: "A comprehensive guide to finding and exploiting Linux misconfigurations.",
    readTime: "15 min read",
    tags: ["Linux", "Privilege Escalation", "Red Team"]
  }
]

export default function Blog() {
  return (
    <>
      <CodeRain />
      <div className="relative z-10">
        <Navbar />
        <section className="min-h-screen pt-32 pb-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="hacker-badge">$ blog --technical --research</span>
              <h1 className="text-4xl md:text-5xl font-bold text-green-500 mt-4 mb-4">Security Research</h1>
              <p className="text-gray-400 font-mono text-sm">Deep dives into vulnerabilities, techniques, and tools</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {posts.map((post) => (
                <Link href={`/blog/${post.slug}`} key={post.id}>
                  <div className="glass-card p-6 cursor-pointer hover:border-green-500 transition-all">
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-green-500 font-mono text-xs">{post.date}</span>
                      <span className="text-gray-500 text-xs">{post.readTime}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-3">{post.title}</h2>
                    <p className="text-gray-400 mb-4">{post.excerpt}</p>
                    <div className="flex gap-2">
                      {post.tags.map((tag, idx) => (
                        <span key={idx} className="text-green-500 text-xs border border-green-500/30 px-2 py-1 rounded">#{tag}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}