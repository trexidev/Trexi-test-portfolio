import { useRouter } from 'next/router'
import CodeRain from '../../components/CodeRain'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Link from 'next/link'

// Hardcoded posts (same as blog.js)
const posts = [
  {
    id: 1,
    slug: "how-i-found-15000-rce-in-google",
    title: "How I Found a $15,000 RCE in Google",
    date: "2024-03-15",
    excerpt: "A deep dive into discovering a critical remote code execution vulnerability in Google's infrastructure.",
    readTime: "8 min read",
    tags: ["Bug Bounty", "RCE", "Google"],
    content: "Full article content goes here. This is where you would write your detailed blog post about finding the RCE vulnerability in Google."
  },
  {
    id: 2,
    slug: "sql-injection-modern-bypass-techniques",
    title: "SQL Injection: Modern Bypass Techniques",
    date: "2024-02-10",
    excerpt: "How to bypass WAFs and filters in 2024 using advanced SQL injection techniques.",
    readTime: "12 min read",
    tags: ["SQLi", "Web Security", "WAF Bypass"],
    content: "Full article content goes here. This is where you would write your detailed SQL injection techniques."
  },
  {
    id: 3,
    slug: "linux-privilege-escalation-for-red-teamers",
    title: "Linux Privilege Escalation for Red Teamers",
    date: "2024-01-20",
    excerpt: "A comprehensive guide to finding and exploiting Linux misconfigurations.",
    readTime: "15 min read",
    tags: ["Linux", "Privilege Escalation", "Red Team"],
    content: "Full article content goes here. This is where you would write your detailed Linux privilege escalation guide."
  }
]

export default function BlogPost() {
  const router = useRouter()
  const { slug } = router.query
  
  const post = posts.find(p => p.slug === slug)
  
  if (!post) {
    return (
      <>
        <CodeRain />
        <div className="relative z-10">
          <Navbar />
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl text-red-500 mb-4">404</h1>
              <p className="text-gray-400">Post not found</p>
              <Link href="/blog" className="btn-terminal mt-6 inline-block">Back to Blog</Link>
            </div>
          </div>
          <Footer />
        </div>
      </>
    )
  }

  return (
    <>
      <CodeRain />
      <div className="relative z-10">
        <Navbar />
        <article className="min-h-screen pt-32 pb-24">
          <div className="max-w-4xl mx-auto px-6">
            <Link href="/blog" className="text-green-500 hover:text-green-400 mb-8 inline-block font-mono text-sm">
              ← Back to all posts
            </Link>
            
            <div className="mb-8">
              <div className="flex gap-2 mb-4">
                {post.tags.map((tag, idx) => (
                  <span key={idx} className="text-green-500 text-xs border border-green-500/30 px-2 py-1 rounded">#{tag}</span>
                ))}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{post.title}</h1>
              <div className="flex gap-4 text-gray-400 font-mono text-sm">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <div className="terminal-panel p-8">
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p className="text-green-500 font-mono text-sm mb-6">{">"} {post.content}</p>
                <p className="mt-4">This is a demo. Replace the content with your actual article.</p>
              </div>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  )
}