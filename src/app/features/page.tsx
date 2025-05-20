"use client"
import { siteContent } from "@/content/siteContent"

export default function FeaturesPage() {
  const { features } = siteContent.home

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-blue-600 text-center mb-10">Features</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white border border-gray-100 rounded-2xl shadow-md p-6 text-center"
          >
            <h2 className="text-xl font-semibold text-blue-600 mb-2">{feature.title}</h2>
            <p className="text-gray-700 text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
