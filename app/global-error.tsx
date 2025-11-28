"use client";

import Link from "next/link";
import { useEffect } from "react";

type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-zinc-50 px-6 py-24 text-center text-zinc-900">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500">
        Tracekit
      </p>
      <div className="space-y-3">
        <p className="text-3xl font-semibold">Something went wrong</p>
        <p className="text-lg text-zinc-600">
          We logged the issue. You can retry the last action or head back to the
          hero preview.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={reset}
          className="inline-flex h-11 items-center justify-center rounded-full bg-black px-6 text-sm font-semibold text-white transition-colors hover:bg-zinc-900"
        >
          Try again
        </button>
        <Link
          href="/"
          className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-300 px-6 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-100"
        >
          Return home
        </Link>
      </div>
    </main>
  );
}

