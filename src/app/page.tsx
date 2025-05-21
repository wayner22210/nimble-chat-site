export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-20 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
        Meet <span className="text-blue-600">Nimble Chat Pro</span>
      </h1>
      <p className="text-lg md:text-xl max-w-2xl text-gray-600 mb-8">
        The AI chat assistant that boosts sales, handles bookings, and supports your customers 24/7.
      </p>
      <a
        href="/pricing"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition"
      >
        View Pricing
      </a>
    </div>
  );
}
