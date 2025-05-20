// src/app/page.tsx

import { siteContent } from "@/content/siteContent"

export default function HomePage() {
  const { title, tagline, heroText, features } = siteContent.home

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-4">{title}</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">{tagline}</p>
        <p className="mt-6 text-gray-700 max-w-3xl mx-auto">{heroText}</p>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 text-center"
          >
            <h3 className="text-xl font-semibold text-blue-600 mb-2">{feature.title}</h3>
            <p className="text-gray-700 text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
