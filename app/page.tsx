import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 py-20 text-zinc-900">
      <Container className="space-y-6 rounded-3xl border border-zinc-200 bg-white/90 p-10 shadow-sm">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500">
            Step 01
          </p>
          <h1 className="text-3xl font-semibold text-zinc-900">
            Foundation primitives in place
          </h1>
          <p className="text-lg text-zinc-600">
            The shared Container and Button components now enforce consistent
            spacing, typography, and CTA styling. We will replace this stub once
            the actual sections land in later steps.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button>Primary CTA</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </Container>
    </main>
  );
}
