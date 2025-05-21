export default function PricingPage() {
  return (
    <div className="px-6 py-20 max-w-6xl mx-auto text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Simple, Transparent Pricing
      </h1>
      <p className="text-lg text-gray-600 mb-12">
        Start for free — upgrade as you grow. No contracts. Cancel anytime.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Starter Plan */}
        <div className="border rounded-xl p-6 shadow hover:shadow-md transition">
          <h2 className="text-2xl font-semibold mb-2">Starter</h2>
          <p className="text-gray-600 mb-4">Perfect for solo creators & freelancers</p>
          <div className="text-3xl font-bold mb-4">$49/mo</div>
          <ul className="text-left text-sm text-gray-700 space-y-2 mb-6">
            <li>✔️ 1 AI Chat Assistant</li>
            <li>✔️ FAQ + Document Uploads</li>
            <li>✔️ Booking & Form Integration</li>
            <li>✔️ 100 Conversations / mo</li>
          </ul>
          <a
            href="/signup"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full transition inline-block"
          >
            Get Started
          </a>
        </div>

        {/* Growth Plan */}
        <div className="border-2 border-blue-600 rounded-xl p-6 shadow-lg transform scale-105">
          <h2 className="text-2xl font-semibold mb-2">Growth</h2>
          <p className="text-gray-600 mb-4">Great for small teams & agencies</p>
          <div className="text-3xl font-bold mb-4">$99/mo</div>
          <ul className="text-left text-sm text-gray-700 space-y-2 mb-6">
            <li>✔️ 3 AI Chat Assistants</li>
            <li>✔️ Calendar & Payment Integration</li>
            <li>✔️ 500 Conversations / mo</li>
            <li>✔️ Multi-site Widget Support</li>
          </ul>
          <a
            href="/signup"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full transition inline-block"
          >
            Start Free Trial
          </a>
        </div>

        {/* Enterprise Plan */}
        <div className="border rounded-xl p-6 shadow hover:shadow-md transition">
          <h2 className="text-2xl font-semibold mb-2">Enterprise</h2>
          <p className="text-gray-600 mb-4">Built for high-volume & custom needs</p>
          <div className="text-3xl font-bold mb-4">Custom</div>
          <ul className="text-left text-sm text-gray-700 space-y-2 mb-6">
            <li>✔️ Unlimited Assistants*</li>
            <li>✔️ API + Webhooks + Embeds</li>
            <li>✔️ Onboarding Support</li>
            <li>✔️ SLA & Compliance Options</li>
          </ul>
          <a
            href="/contact"
            className="bg-gray-800 hover:bg-black text-white py-2 px-4 rounded-full transition inline-block"
          >
            Contact Sales
          </a>
        </div>
      </div>
    </div>
  );
}
