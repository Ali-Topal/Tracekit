 "use client";

import { Container } from "@/components/ui/container";
import { SOCIAL_PROOF_LOGOS } from "@/content/site";

const marqueeLogos = [...SOCIAL_PROOF_LOGOS, ...SOCIAL_PROOF_LOGOS];

export function SocialProofSection() {
  return (
    <section
      id="social-proof"
      className="border-b border-zinc-300 bg-white py-16 text-zinc-900"
    >
      <Container className="space-y-6">
        <div className="space-y-2 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500">
            Placeholder logos
          </p>
          <h2 className="text-2xl font-semibold">Example teams building with Tracekit</h2>
          <p className="text-sm text-zinc-500">
            Fictional wordmarks below help visualize the logo strip until real partners plug in.
          </p>
        </div>
        <div className="relative overflow-hidden">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent"
            aria-hidden="true"
          />
          <div className="flex min-w-full items-center gap-12 py-6 text-sm font-semibold uppercase tracking-[0.4em] text-zinc-400 will-change-transform animate-marquee">
            {marqueeLogos.map((logo, index) => (
              <span
                key={`${logo.name}-${index}`}
                className="flex min-w-[180px] items-center justify-center text-zinc-500"
                aria-hidden={index >= SOCIAL_PROOF_LOGOS.length}
              >
                <span className="sr-only">{logo.name}</span>
                <span aria-hidden="true">{logo.name}</span>
              </span>
            ))}
          </div>
        </div>
      </Container>
      <style jsx>{`
        .animate-marquee {
          animation: marquee 45s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}

