'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Features', href: '/features' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
  { name: 'Docs', href: '/docs' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="w-full px-6 py-4 shadow-md flex justify-between items-center bg-white sticky top-0 z-50">
      <Link href="/" className="text-2xl font-bold text-blue-600">
        Nimble Chat Pro
      </Link>
      <nav className="hidden md:flex space-x-6 text-sm font-medium">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`hover:text-blue-600 transition ${
              pathname === link.href ? 'text-blue-600 font-semibold' : 'text-gray-700'
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
      <Link
        href="/login"
        className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full text-sm font-medium"
      >
        Login
      </Link>
    </header>
  );
}
