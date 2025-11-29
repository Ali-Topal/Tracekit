import { Container } from "@/components/ui/container";
import { FOOTER_LINK_GROUPS } from "@/content/site";

const socialLinks = [
  { label: "GitHub", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "Email", href: "mailto:hello@tracekit.dev" },
];

export function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 py-16 text-zinc-100">
      <Container className="space-y-10">
        <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-3">
          <div className="space-y-2">
            <p className="text-xl font-semibold tracking-tight">Tracekit</p>
            <p className="text-sm text-zinc-400">
              Inspect payloads, sync retries, and replay incidents without leaving your editor.
            </p>
          </div>
          {FOOTER_LINK_GROUPS.map((group) => (
            <div key={group.title}>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500">
                {group.title}
              </p>
              <nav
                aria-label={`${group.title} links`}
                className="mt-4 space-y-2 text-sm text-zinc-400"
              >
                {group.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block transition hover:text-white focus-visible:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} Tracekit · Placeholder project for developer experience demos.
          </p>
          <div className="flex flex-wrap gap-4" aria-label="Social links">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-zinc-400 transition hover:text-white focus-visible:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}

