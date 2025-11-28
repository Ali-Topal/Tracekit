import { Container } from "@/components/ui/container";
import { FEATURES } from "@/content/site";

export function FeaturesSection() {
  return (
    <section id="features" className="border-b border-zinc-100 bg-zinc-50 py-20">
      <Container className="space-y-10">
        <div className="space-y-2 text-zinc-900">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500">
            Capabilities
          </p>
          <h2 className="text-2xl font-semibold">What Tracekit unlocks</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {FEATURES.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-dashed border-zinc-200 bg-white/80 p-6 text-zinc-700"
            >
              <h3 className="text-lg font-semibold text-zinc-900">{feature.title}</h3>
              <p className="mt-2 text-sm">{feature.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

