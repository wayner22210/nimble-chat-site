export default function FeaturesPage() {
  return (
    <div className="px-6 py-20 max-w-5xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Features Built to Grow Your Business
      </h1>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-2">AI-Powered Conversations</h2>
          <p className="text-gray-600">
            Engage visitors with natural, intelligent chats. Nimble Chat understands questions, books appointments, and answers FAQs automatically.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Smart Booking System</h2>
          <p className="text-gray-600">
            Integrated calendar scheduling allows users to book services or consultations directly from the chat widget — 24/7.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Drag-and-Drop File Uploads</h2>
          <p className="text-gray-600">
            Let your customers upload documents, photos, or intake forms with ease — right inside the conversation.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Multi-Device, Multi-Channel</h2>
          <p className="text-gray-600">
            Seamless performance on desktop, mobile, and tablet. Embed on websites or use as a full-screen assistant.
          </p>
        </div>
      </div>
    </div>
  );
}
