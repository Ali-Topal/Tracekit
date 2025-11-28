import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PRICING_TIERS } from "@/content/site";
import { cn } from "@/lib/cn";

export function PricingSection() {
  return (
    <section id="pricing" className="border-b border-zinc-100 bg-white py-20">
      <Container className="space-y-10 text-zinc-900">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500">
            Pricing
          </p>
          <h2 className="text-2xl font-semibold">Pick the plan that matches your ingest</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {PRICING_TIERS.map((tier) => (
            <article
              key={tier.name}
              className={cn(
                "rounded-2xl border border-dashed border-zinc-200 p-6",
                tier.highlighted && "border-zinc-900 bg-zinc-50 shadow-lg"
              )}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                {tier.name}
              </p>
              <p className="mt-3 text-3xl font-semibold">{tier.price}</p>
              <p className="text-sm text-zinc-600">{tier.tagline}</p>
              <ul className="mt-6 space-y-2 text-sm text-zinc-700">
                {tier.bullets.map((bullet) => (
                  <li key={bullet}>• {bullet}</li>
                ))}
              </ul>
              <Button className="mt-6 w-full" variant={tier.highlighted ? "primary" : "ghost"}>
                Select
              </Button>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

