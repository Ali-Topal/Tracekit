import { Container } from "@/components/ui/container";
import { FEATURES } from "@/content/site";

const ICON_MAP: Record<
  NonNullable<(typeof FEATURES)[number]["icon"]>,
  JSX.Element
> = {
  trace: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 12h4l2 8 4-16 2 8h4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  webhooks: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path
        d="M8 16a4 4 0 1 1 0-8h1M16 8a4 4 0 1 1 0 8h-1M9 12h6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  replay: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path
        d="M4 12a8 8 0 0 0 13.856 5M20 12A8 8 0 0 0 6.144 7M4 12l-2-2m2 2l-2 2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  alerts: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path
        d="M12 9v4m0 4h.01M4 17h16l-2-8H6l-2 8Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  audit: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path
        d="M7 7h10v10H7z M7 7l5-4 5 4M9 11h6m-6 4h6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

export function FeaturesSection() {
  return (
    <section id="features" className="border-b border-zinc-100 bg-zinc-50 py-20">
      <Container className="space-y-10">
        <div className="space-y-3 text-zinc-900">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500">
            Capabilities
          </p>
          <h2 className="text-3xl font-semibold">Ship faster with trace-level context</h2>
          <p className="text-zinc-600">
            Every feature card mirrors a real workflow so the dev skimming this page knows
            exactly what they get on day one.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {FEATURES.map((feature) => (
            <article
              key={feature.title}
              className="group rounded-3xl border border-zinc-200 bg-white/70 p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl"
            >
              <div className="flex items-center gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                  {feature.icon ? ICON_MAP[feature.icon] : null}
                </span>
                <h3 className="text-lg font-semibold text-zinc-900">{feature.title}</h3>
              </div>
              <p className="mt-4 text-sm text-zinc-600">{feature.description}</p>
              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-emerald-700">
                Learn more
                <svg
                  className="h-4 w-4 transition group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

