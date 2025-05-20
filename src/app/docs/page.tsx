// src/app/docs/page.tsx

export default function DocsPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">Help Center & Documentation</h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
        Browse guides, walkthroughs, and setup documentation to get the most out of Nimble Chat.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Getting Started</h2>
          <ul className="text-sm text-gray-700 list-disc ml-4 space-y-1">
            <li>How to install Nimble Chat</li>
            <li>Adding the widget to your website</li>
            <li>Setting up your first assistant</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Account & Billing</h2>
          <ul className="text-sm text-gray-700 list-disc ml-4 space-y-1">
            <li>Managing your subscription</li>
            <li>Understanding usage limits</li>
            <li>How to upgrade or cancel</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">AI & Automation</h2>
          <ul className="text-sm text-gray-700 list-disc ml-4 space-y-1">
            <li>Training the AI with documents</li>
            <li>Booking logic & smart routing</li>
            <li>Customizing tone & persona</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Security & Compliance</h2>
          <ul className="text-sm text-gray-700 list-disc ml-4 space-y-1">
            <li>HIPAA overview</li>
            <li>Data privacy policies</li>
            <li>Admin roles and access control</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
