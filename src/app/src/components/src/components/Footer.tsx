import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-20 px-6 py-10 bg-gray-100 text-center text-sm text-gray-600">
      <p className="mb-4">© {new Date().getFullYear()} Nimble Chat Pro. All rights reserved.</p>
      <div className="space-x-4">
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </footer>
  );
}
