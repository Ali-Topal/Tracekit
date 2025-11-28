import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PRICING_TIERS } from "@/content/site";
import { cn } from "@/lib/cn";

export function PricingSection() {
  return (
    <section id="pricing" className="border-b border-zinc-100 bg-white py-20">
      <Container className="space-y-10 text-zinc-900">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500">
            Pricing
          </p>
          <h2 className="text-3xl font-semibold">Pick the plan that matches your ingest</h2>
          <p className="text-zinc-600">
            Pro tier is tuned for most startups. Team unlocks enterprise SSO and dedicated support.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {PRICING_TIERS.map((tier) => (
            <article
              key={tier.name}
              className={cn(
                "flex h-full flex-col rounded-3xl border border-zinc-200 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl",
                tier.highlighted && "border-emerald-500 bg-emerald-50 shadow-emerald-100/80"
              )}
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  {tier.name}
                </p>
                {tier.highlighted && (
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                    Most popular
                  </span>
                )}
              </div>
              <p className="mt-4 text-4xl font-semibold">{tier.price}</p>
              <p className="text-sm text-zinc-600">{tier.tagline}</p>
              <ul className="mt-6 space-y-3 text-sm text-zinc-700">
                {tier.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <Button
                className="mt-8 w-full"
                variant={tier.highlighted ? "primary" : "ghost"}
              >
                {tier.highlighted ? "Start Pro trial" : "Talk to us"}
              </Button>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

