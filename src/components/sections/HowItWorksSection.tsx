import { Container } from "@/components/ui/container";
import { STEPS } from "@/content/site";

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="border-b border-zinc-100 bg-white py-20">
      <Container className="space-y-10 text-zinc-900">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500">
            Flow
          </p>
          <h2 className="text-3xl font-semibold">Three steps from chaos to clarity</h2>
          <p className="text-zinc-600">
            Every step is backed by the same observability primitives so your team can
            wire Tracekit in over lunch.
          </p>
        </div>
        <ol className="relative grid gap-6 md:grid-cols-3 md:gap-8">
          <div className="pointer-events-none absolute inset-x-12 top-10 hidden h-0.5 bg-gradient-to-r from-emerald-200 via-emerald-200 to-transparent md:block" />
          {STEPS.map((step, index) => (
            <li
              key={step.title}
              className="group relative rounded-3xl border border-zinc-200 bg-zinc-50/80 p-6 transition hover:-translate-y-1 hover:border-emerald-200 hover:bg-white"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-sm font-semibold text-emerald-700 shadow">
                  0{index + 1}
                </span>
                <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  Step {index + 1}
                </p>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900">{step.title}</h3>
              <p className="mt-2 text-sm text-zinc-600">{step.description}</p>
              <div className="mt-4 rounded-2xl border border-dashed border-zinc-200 bg-white/80 p-4 text-xs text-zinc-500">
                <p className="font-semibold text-zinc-700">What you get</p>
                <p className="mt-1">
                  {index === 0 && "Plug-in snippets + sig verification"}
                  {index === 1 && "Realtime search + payload diffing"}
                  {index === 2 && "Replay hooks + curl export"}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

