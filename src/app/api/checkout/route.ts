// src/app/api/checkout/route.ts

import { NextResponse } from "next/server"
import Stripe from "stripe"
})

export async function POST(req: Request) {
  const { priceId } = await req.json()

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout`,
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error("Stripe error:", error)
    return NextResponse.json({ error: "Checkout session creation failed" }, { status: 500 })
  }
}
