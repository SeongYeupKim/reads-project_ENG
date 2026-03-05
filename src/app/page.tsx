import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-emerald-50/80 to-white">
      <div className="max-w-lg w-full text-center space-y-6">
        <div className="relative w-full aspect-[2/1] max-h-48 rounded-xl overflow-hidden bg-gradient-to-br from-emerald-100 to-teal-100 shadow-sm">
          <img
            src="/img/hero-pier.svg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <h1 className="text-3xl font-bold text-[var(--accent)] tracking-tight">
          READS
        </h1>
        <p className="text-sm text-gray-500">
          Reading for Evidence And Disciplinary Science
        </p>
        <p className="text-gray-700 leading-relaxed">
          Read four short stories set in a town by the sea and build your scientific literacy!
        </p>
        <div className="pt-4 flex flex-col gap-3">
          <Link href="/session/1" className="btn-primary inline-block">
            Episode 1 — The Smell of the Sea (Start)
          </Link>
          <div className="flex gap-2 justify-center flex-wrap text-sm">
            <Link href="/session/2" className="btn-secondary inline-block text-gray-600">
              Episode 2 — The Restaurant Menu
            </Link>
            <Link href="/session/3" className="btn-secondary inline-block text-gray-600">
              Episode 3 — The Ledger
            </Link>
            <Link href="/session/4" className="btn-secondary inline-block text-gray-600">
              Episode 4 — The Order of the Sea
            </Link>
          </div>
        </div>
        <p className="text-xs text-gray-400 pt-4">
          About 25–35 min per session · 4 sessions total
        </p>
      </div>
    </main>
  );
}
