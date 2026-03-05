import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-emerald-50/80 to-white">
      <div className="max-w-md text-center space-y-4">
        <h1 className="text-2xl font-bold text-[var(--accent)]">404</h1>
        <p className="text-gray-600">Page not found.</p>
        <Link href="/" className="btn-primary inline-block">
          Home
        </Link>
      </div>
    </main>
  );
}
