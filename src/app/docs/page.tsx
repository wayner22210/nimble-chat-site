export default function DocsPage() {
  return (
    <div className="px-6 py-20 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
        Help Center
      </h1>
      <p className="text-center text-gray-600 mb-12">
        Find quick answers, setup guides, and tips for getting the most out of Nimble Chat.
      </p>

      <div className="space-y-10">
        <div>
          <h2 className="text-2xl font-semibold mb-2">🛠 How do I install the chat widget?</h2>
          <p className="text-gray-700">
            You can embed the Nimble Chat widget with just a few lines of code on any website. Head to your dashboard, copy the embed script, and paste it before the closing <code>&lt;/body&gt;</code> tag.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">📅 How does the booking system work?</h2>
          <p className="text-gray-700">
            Nimble Chat syncs with your calendar in real time. You can connect Google Calendar or Outlook during setup and customize available time slots.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">💬 Can I train the assistant with my content?</h2>
          <p className="text-gray-700">
            Absolutely! Upload your PDFs, docs, or FAQs, and Nimble Chat will automatically learn from your content to provide smart, on-brand answers.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">⚙️ Is there an API?</h2>
          <p className="text-gray-700">
            Yes — developers can integrate Nimble Chat with custom apps using our REST or GraphQL API. Documentation is available in the developer portal.
          </p>
        </div>
      </div>
    </div>
  );
}
