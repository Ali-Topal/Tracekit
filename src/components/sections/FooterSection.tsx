import { Container } from "@/components/ui/container";
import { NAV_ITEMS } from "@/content/site";

const FOOTER_LINKS = [
  { label: "Docs", href: "#" },
  { label: "Status", href: "#" },
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Contact", href: "#" },
];

export function FooterSection() {
  return (
    <footer className="bg-zinc-900 py-16 text-zinc-100">
      <Container className="space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="text-lg font-semibold">Tracekit</div>
          <div className="flex flex-wrap gap-4 text-sm text-zinc-400">
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-4 text-xs text-zinc-500">
          {FOOTER_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-white">
              {link.label}
            </a>
          ))}
        </div>
        <p className="text-xs text-zinc-500">© {new Date().getFullYear()} Tracekit</p>
      </Container>
    </footer>
  );
}

