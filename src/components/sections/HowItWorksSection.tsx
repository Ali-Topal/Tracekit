import { Container } from "@/components/ui/container";
import { STEPS } from "@/content/site";

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="border-b border-zinc-100 bg-white py-20">
      <Container className="space-y-10 text-zinc-900">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500">
            Flow
          </p>
          <h2 className="text-2xl font-semibold">How Tracekit fits your stack</h2>
        </div>
        <ol className="grid gap-6 md:grid-cols-3">
          {STEPS.map((step, index) => (
            <li
              key={step.title}
              className="rounded-2xl border border-dashed border-zinc-200 bg-zinc-50/60 p-6"
            >
              <p className="text-sm font-semibold text-zinc-500">Step {index + 1}</p>
              <h3 className="mt-2 font-semibold text-zinc-900">{step.title}</h3>
              <p className="mt-2 text-sm text-zinc-600">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

