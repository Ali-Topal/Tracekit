import { Container } from "@/components/ui/container";

const PLACEHOLDER_LOGOS = ["SynthCo", "LambdaOps", "Pulse.dev", "Northwind"];

export function SocialProofSection() {
  return (
    <section
      id="social-proof"
      className="border-b border-zinc-100 bg-white py-16 text-zinc-900"
    >
      <Container className="space-y-6">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500">
            Placeholder logos
          </p>
          <h2 className="text-2xl font-semibold">Teams rely on Tracekit to debug fast</h2>
        </div>
        <div className="flex flex-wrap items-center gap-x-10 gap-y-4 text-sm font-semibold text-zinc-500">
          {PLACEHOLDER_LOGOS.map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>
      </Container>
    </section>
  );
}

