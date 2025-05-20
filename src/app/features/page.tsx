// File Structure:
// src/data/faqs.json
// src/app/
// ├─ layout.tsx
// ├─ globals.css
// ├─ page.tsx
// ├─ features/page.tsx
// ├─ pricing/page.tsx
// ├─ about/page.tsx
// ├─ contact/page.tsx
// ├─ docs/page.tsx
// ├─ blog/page.tsx
// └─ login/page.tsx
// public/favicon.ico
// next.config.js
// package.json

// src/data/faqs.json
[
  {
    "question": "What is Nimble Chat?",
    "answer": "An AI-powered chat and appointment booking assistant that integrates seamlessly into your website."
  },
  {
    "question": "How do I integrate Nimble Chat?",
    "answer": "Copy the embed snippet into your page or call our REST API—no server setup required."
  },
  {
    "question": "Is there a free tier?",
    "answer": "Yes! Our Free plan includes basic chat support for up to 5,000 monthly messages."
  }
]

// src/app/layout.tsx
import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Nimble Chat</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-sans text-gray-800 bg-white">
        <header className="p-4 shadow-md flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">Nimble Chat</h1>
          <nav className="space-x-4">
            <Link href="/">Home</Link>
            <Link href="/features">Features</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        <main className="p-6">{children}</main>
        <footer className="p-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Nimble Chat
        </footer>
      </body>
    </html>
  );
}

// src/app/globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;

// src/app/page.tsx
export default function HomePage() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Welcome to Nimble Chat</h2>
      <p>Your next-generation assistant for intelligent chat and appointment booking.</p>
    </section>
  );
}

// src/app/features/page.tsx
import faqs from '../../data/faqs.json';

interface FAQ { question: string; answer: string; }

export default function FeaturesPage() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Features</h2>
      <ul className="list-disc ml-6">
        {faqs.map((faq: FAQ, i: number) => (
          <li key={i} className="mb-2">
            <strong>{faq.question}</strong>
            <p>{faq.answer}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

// src/app/pricing/page.tsx
export default function PricingPage() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Pricing Plans</h2>
      <ul className="list-disc ml-6">
        <li>Free tier: basic chat support</li>
        <li>Pro tier: advanced AI routing & analytics</li>
        <li>Enterprise: fully managed custom integrations</li>
      </ul>
    </section>
  );
}

// src/app/about/page.tsx
export default function AboutPage() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">About Nimble Chat</h2>
      <p>Learn about our mission to empower businesses with intelligent chat solutions.</p>
    </section>
  );
}

// src/app/contact/page.tsx
export default function ContactPage() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <p>Have questions? Reach out to our support team.</p>
    </section>
  );
}

// src/app/docs/page.tsx
export default function DocsPage() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Documentation</h2>
      <p>Browse our developer guides, API references, and tutorials here.</p>
    </section>
  );
}

// src/app/blog/page.tsx
export default function BlogPage() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Blog</h2>
      <p>Read the latest updates, case studies, and industry insights.</p>
    </section>
  );
}

// src/app/login/page.tsx
export default function LoginPage() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <p>Please sign in to access your Nimble Chat dashboard and settings.</p>
    </section>
  );
}
