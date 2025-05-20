"use client"

export default function CheckoutPage() {
  const handleCheckout = async () => {
    const res = await fetch("/api/checkout", {
      method: "POST",
      body: JSON.stringify({ priceId: "price_12345" }),
    })

    const data = await res.json()
    window.location.href = data.url
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Subscribe Now</h1>
      <button
        onClick={handleCheckout}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Start Free Trial
      </button>
    </div>
  )
}
