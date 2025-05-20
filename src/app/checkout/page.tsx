// src/app/checkout/page.tsx

const pricingOptions = [
  {
    name: "Starter",
    price: "$49/month",
    features: [
      "1 chat assistant",
      "100 conversations/month",
      "Stripe integration",
      "Appointment booking",
    ],
    stripePriceId: "price_123_starter", // Replace with real Stripe Price ID
  },
  {
    name: "Pro",
    price: "$199/month",
    features: [
      "Everything in Starter",
      "5,000 conversations/month",
      "White-label widget",
      "Video/audio escalation",
    ],
    stripePriceId: "price_123_pro", // Replace with real Stripe Price ID
  },
  {
    name: "Enterprise",
    price: "$499+/month",
    features: [
      "Unlimited everything",
      "Multi-domain & multi-tenant",
      "HIPAA-ready setup",
      "Custom integrations",
    ],
    stripePriceId: "price_123_enterprise", // Replace with real Stripe Price ID
  },
]

export default function CheckoutPage() {
  const handleCheckout = async (priceId: string) => {
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ priceId }),
    })

    const { url } = await res.json()
    window.location.href = url
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">Choose Your Plan</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {pricingOptions.map((option) => (
          <div key={option.name} className="bg-white border border-gray-100 p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">{option.name}</h2>
            <p className="text-lg font-bold text-gray-800 mb-4">{option.price}</p>

            <ul className="text-sm text-gray-700 list-disc ml-5 mb-6 space-y-1">
              {option.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>

            <button
              onClick={() => handleCheckout(option.stripePriceId)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow"
            >
              Subscribe
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
