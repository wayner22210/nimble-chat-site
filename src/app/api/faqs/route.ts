import { siteContent } from "@/content/siteContent"
import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({ faqs: siteContent.home.features })
}
