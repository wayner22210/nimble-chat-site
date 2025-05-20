// src/app/about/page.tsx

import { siteContent } from "@/content/siteContent"

export default function AboutPage() {
  const { heading, story } = siteContent.about

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">{heading}</h1>
      <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">{story}</p>
    </div>
  )
}
