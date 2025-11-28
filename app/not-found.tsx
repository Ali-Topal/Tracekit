import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-zinc-50 px-6 py-24 text-center text-zinc-900">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500">
        Tracekit
      </p>
      <div className="space-y-3">
        <p className="text-3xl font-semibold">Page not found</p>
        <p className="text-lg text-zinc-600">
          The page you’re after doesn’t exist yet. Head back to the latest
          landing preview.
        </p>
      </div>
      <Link
        href="/"
        className="inline-flex h-11 items-center justify-center rounded-full bg-black px-6 text-sm font-semibold text-white transition-colors hover:bg-zinc-900"
      >
        Return home
      </Link>
    </main>
  );
}

