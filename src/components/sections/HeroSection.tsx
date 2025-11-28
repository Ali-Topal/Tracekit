import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const MOCK_REQUESTS = [
  { id: "req_82f0b1", status: 200, source: "Stripe", latency: "182ms" },
  { id: "req_92aa31", status: 500, source: "Shopify", latency: "712ms" },
  { id: "req_75dc02", status: 202, source: "GitHub", latency: "241ms" },
];

export function HeroSection() {
  return (
    <section
      id="hero"
      className="border-b border-zinc-100 bg-gradient-to-b from-zinc-50 to-white py-20 text-zinc-900"
    >
      <Container className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
            Live observability
          </span>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Trace every request. Inspect each webhook. Replay failures without guesswork.
            </h1>
            <p className="text-lg text-zinc-600 sm:text-xl">
              Tracekit stitches logs, retries, and payloads into one timeline so you can
              debug production issues in minutes instead of waiting on repro steps.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button>Get API key</Button>
            <Button variant="secondary">View docs</Button>
          </div>
          <p className="flex items-center gap-3 text-sm font-medium text-zinc-500">
            <span className="inline-flex h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-500" />
            Built for developers • Works with Stripe / GitHub / Shopify webhooks
          </p>
        </div>
        <article className="relative rounded-3xl border border-zinc-100 bg-white p-6 shadow-2xl shadow-emerald-200/30">
          <header className="flex items-center justify-between border-b border-zinc-100 pb-4">
            <div className="space-y-1">
              <p className="text-sm font-medium text-zinc-500">Workspace</p>
              <p className="text-lg font-semibold text-zinc-900">Prod ingest</p>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
              <span className="inline-flex h-2 w-2 animate-ping rounded-full bg-emerald-500" />
              Streaming
            </span>
          </header>
          <div className="mt-4 grid gap-4 lg:grid-cols-[160px_minmax(0,1fr)]">
            <div className="space-y-2 rounded-2xl border border-zinc-100 bg-zinc-50/80 p-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Requests
              </p>
              <ul className="space-y-2 text-sm">
                {MOCK_REQUESTS.map((request) => (
                  <li
                    key={request.id}
                    className="rounded-xl border border-transparent bg-white/70 px-3 py-2 text-zinc-700"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-zinc-900">{request.source}</span>
                      <span
                        className="text-xs font-semibold"
                        aria-label={`Status ${request.status}`}
                      >
                        {request.status}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-500">{request.id}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3 rounded-2xl border border-zinc-100 bg-white/80 p-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  Delivery timeline
                </p>
                <div className="mt-2 h-2 rounded-full bg-zinc-100">
                  <div className="h-full w-3/4 rounded-full bg-emerald-500" />
                </div>
              </div>
              <div className="rounded-xl border border-zinc-100 bg-zinc-50/80 p-3 text-sm text-zinc-600">
                <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  Payload diff
                </p>
                <pre className="mt-2 overflow-x-auto text-xs text-zinc-800">
{`- "status": "failed"
+ "status": "delivered"
  "latency": "${MOCK_REQUESTS[1].latency}"`}
                </pre>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-zinc-100 bg-white/70 px-3 py-2 text-sm text-zinc-600">
                <span>Replay ready</span>
                <Button className="h-9 px-4 text-sm">Replay</Button>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute -bottom-6 left-1/2 h-12 w-32 -translate-x-1/2 rounded-full bg-emerald-400/20 blur-3xl" />
        </article>
      </Container>
    </section>
  );
}

