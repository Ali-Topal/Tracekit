import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="border-b border-zinc-100 bg-zinc-50 py-20 text-zinc-900"
    >
      <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500">
            Built for developers
          </p>
          <h1 className="text-4xl font-semibold leading-tight">
            Trace every request, inspect each webhook, replay failures instantly.
          </h1>
          <p className="text-lg text-zinc-600">
            This placeholder hero will be replaced with a richer layout in later
            steps. For now it gives us the single H1 required by the spec.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button>Get API key</Button>
            <Button variant="ghost">View docs</Button>
          </div>
        </div>
        <div className="rounded-2xl border border-dashed border-zinc-200 bg-white/70 p-8 text-sm text-zinc-500">
          Product preview placeholder
        </div>
      </Container>
    </section>
  );
}

