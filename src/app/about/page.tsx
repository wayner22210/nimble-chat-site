export default function AboutPage() {
  return (
    <div className="px-6 py-20 max-w-4xl mx-auto text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">About Nimble Chat</h1>
      <p className="text-lg text-gray-600 mb-12">
        Nimble Chat Pro is more than just a chatbot. It's your AI-powered assistant for boosting sales, booking appointments, and answering customer questions — all day, every day.
      </p>

      <div className="grid md:grid-cols-2 gap-10 text-left">
        <div>
          <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
          <p className="text-gray-600">
            We’re here to empower small businesses with the same automation power used by billion-dollar companies — without the complexity or cost.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Why We Built This</h2>
          <p className="text-gray-600">
            After years of working with service-based businesses, we saw the need for a simple, smart, always-on assistant that actually works. Nimble Chat fills that gap.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Who It's For</h2>
          <p className="text-gray-600">
            If you're a dentist, salon owner, med-spa, consultant, or service pro — Nimble Chat helps you grow while saving time and energy.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
          <p className="text-gray-600">
            To become the go-to AI assistant for local businesses worldwide, automating millions of conversations without losing the human touch.
          </p>
        </div>
      </div>
    </div>
  );
}
