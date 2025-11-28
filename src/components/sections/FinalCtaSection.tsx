import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function FinalCtaSection() {
  return (
    <section id="final-cta" className="border-b border-zinc-100 bg-white py-20">
      <Container className="space-y-6 rounded-3xl border border-zinc-100 bg-zinc-50 px-8 py-14 text-center text-zinc-900">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500">
          Ready when you are
        </p>
        <h2 className="text-3xl font-semibold">Ship observability that feels built-in</h2>
        <p className="text-lg text-zinc-600">
          Next steps will layer in richer visuals, but you can already wire the CTAs
          thanks to the shared button component.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button>Get API key</Button>
          <Button variant="secondary">View docs</Button>
        </div>
      </Container>
    </section>
  );
}

