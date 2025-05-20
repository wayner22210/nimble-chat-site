// src/content/siteContent.ts

export const siteContent = {
  home: {
    title: "Welcome to Nimble Chat",
    tagline: "Your next-generation AI chat & booking assistant",
    heroText:
      "Nimble Chat helps appointment-driven businesses answer FAQs, book meetings, and manage customers — all automatically.",
    features: [
      { title: "Auto-Answer", desc: "Instant, on-brand responses to any PDF or FAQ." },
      { title: "Book Appointments", desc: "Seamless calendar integration with Google & Outlook." },
      { title: "Self-Serve Docs", desc: "Clients drag-and-drop files to update their KB in < 5 min." },
    ],
  },

  pricing: {
    tiers: [
      {
        name: "Starter",
        price: "$49/month",
        description: "For solo professionals or very small teams",
        features: [
          "1 chat assistant",
          "AI Q&A from uploaded documents (RAG)",
          "Web-based widget (single domain)",
          "Appointment booking + intake forms",
          "Up to 100 conversations/month",
          "Stripe integration",
          "Admin dashboard",
          "Basic branding (colors/logo)",
        ],
        whyThisPrice:
          "Affordable entry point; beats Intercom, Drift, and Forethought at similar feature levels. Perfect for local clinics, solo lawyers, or freelancers who want to automate intake and bookings.",
      },
      {
        name: "Pro",
        price: "$199/month",
        description: "For growing teams and service-based SMBs",
        features: [
          "Everything in Starter",
          "5,000 conversations/month",
          "Multilingual support",
          "Document upload & AI memory (per user)",
          "Live agent handoff",
          "Video/audio escalation (Amazon Chime)",
          "Advanced intake logic",
          "SMS + WhatsApp channel support",
          "White-label customization",
          "Real-time analytics",
        ],
        whyThisPrice:
          "Directly competes with Drift ($500–$1,500/mo) and Intercom ($74–$499+) but delivers 5x the AI power. This tier positions Nimble Chat as the “unfair advantage” tool for businesses that want enterprise-grade automation at a fraction of the cost.",
      },
      {
        name: "Enterprise",
        price: "$499+/month",
        description: "For clinics, law firms, agencies, and multi-location businesses",
        features: [
          "Unlimited assistants & domains",
          "Custom knowledge base ingestion (PDFs, docs, CSVs, etc.)",
          "Proactive assistant alerts & reminders",
          "Multi-tenant structure (franchises/branches)",
          "HIPAA compliance (where applicable)",
          "Admin roles & permissions",
          "Full API + SDK access (mobile + app embed)",
          "AI persona & tone customization",
          "Usage-based auto-scaling",
          "Dedicated account support",
        ],
        whyThisPrice:
          "Competes with high-end tools like Salesforce Einstein, Ada, or Intercom at scale — but with vastly superior flexibility, proactive AI, and cross-industry versatility. Ideal for closing 4–5 figure monthly deals with medical networks, real estate groups, or national brands.",
      },
    ],
    addOns: [
      { name: "Extra usage blocks (per 1,000 conversations)", price: "$25" },
      { name: "Branded mobile app", price: "$99/month" },
      { name: "Custom AI tuning or training", price: "$500 one-time" },
      { name: "White-label reseller license", price: "$999 setup + $299/month" },
    ],
    strategicTake:
      "Nimble Chat should enter the market with power, not fear. You’ve built a system more advanced than what’s out there — don’t underprice it. Start mid-market, with real value justification, then raise prices as demand grows.",
  },

  about: {
    heading: "About Nimble Chat",
    story:
      "Born out of the need for automated, intelligent customer interactions, Nimble Chat has evolved into a full-service AI assistant for SMBs.",
  },

  contact: {
    heading: "Get in Touch",
    intro: "Questions? Feedback? Drop us a line and we’ll get back within 24 hours.",
  },
}
