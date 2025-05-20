// src/app/contact/page.tsx

import { siteContent } from "@/content/siteContent"

export default function ContactPage() {
  const { heading, intro } = siteContent.contact

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-blue-600 text-center mb-4">{heading}</h1>
      <p className="text-center text-gray-600 max-w-xl mx-auto mb-10">{intro}</p>

      <form className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md space-y-4 border border-gray-100">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
          <input
            type="text"
            placeholder="Your full name"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
          <textarea
            placeholder="How can we help you?"
            rows={5}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}
