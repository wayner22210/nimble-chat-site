// src/app/blog/page.tsx

const posts = [
  {
    title: "5 Ways AI Chat is Revolutionizing Client Communication",
    date: "May 2025",
    tag: "AI Chat",
    summary:
      "Discover how AI-driven chat tools like Nimble Chat are helping businesses automate, scale, and deliver faster, smarter client service.",
  },
  {
    title: "Nimble Chat Launch Recap: What’s Live & What’s Coming",
    date: "April 2025",
    tag: "Product Update",
    summary:
      "Here’s what’s already shipped in v1.0 — and what’s on the roadmap for smarter automation, better integrations, and global rollout.",
  },
  {
    title: "HIPAA & AI: What Nimble Chat Is Doing to Stay Compliant",
    date: "March 2025",
    tag: "Security",
    summary:
      "If you run a clinic or law office, compliance matters. Here’s how Nimble Chat handles sensitive data the right way.",
  },
]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-blue-600 text-center mb-10">Nimble Blog</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post, i) => (
          <div
            key={i}
            className="bg-white border border-gray-100 rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <p className="text-sm text-gray-400">{post.date} • {post.tag}</p>
            <h2 className="text-xl font-semibold text-blue-600 mt-2 mb-2">{post.title}</h2>
            <p className="text-sm text-gray-700">{post.summary}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
