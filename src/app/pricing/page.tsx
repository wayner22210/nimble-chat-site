// src/app/pricing/page.tsx
"use client"

import { siteContent } from "@/content/siteContent"

export default function PricingPage() {
  const { tiers, addOns, strategicTake } = siteContent.pricing

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">Nimble Chat Pricing</h1>
      <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        Choose a plan that fits your business. Start simple, scale without limits.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between border border-gray-100"
          >
            <div>
              <h2 className="text-2xl font-bold text-blue-600 mb-1">{tier.name}</h2>
              <p className="text-gray-700 font-semibold mb-4">{tier.price}</p>
              <p className="text-sm text-gray-500 mb-4">{tier.description}</p>

              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">✔</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-xs text-gray-400 italic">{tier.whyThisPrice}</p>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h3 className="text-2xl font-bold text-blue-600 mb-2 text-center">Optional Add-ons</h3>
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-4 mt-4">
          {addOns.map((addOn, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm w-full sm:w-[300px]"
            >
              <p className="font-semibold text-gray-800">{addOn.name}</p>
              <p className="text-sm text-gray-500">{addOn.price}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 max-w-4xl mx-auto text-center">
        <h4 className="text-xl font-bold text-blue-600 mb-2">Strategic Take</h4>
        <p className="text-gray-600 text-sm">{strategicTake}</p>
      </div>
    </div>
  )
}
