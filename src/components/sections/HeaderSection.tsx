import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { NAV_ITEMS } from "@/content/site";

export function HeaderSection() {
  return (
    <header className="border-b border-zinc-100 bg-white/70 backdrop-blur" id="top">
      <Container className="flex h-20 items-center justify-between gap-6">
        <div className="text-lg font-semibold tracking-tight text-zinc-900">
          Tracekit
        </div>
        <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-600 md:flex">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-zinc-900">
              {item.label}
            </a>
          ))}
        </nav>
        <Button className="hidden md:inline-flex">Get API key</Button>
      </Container>
    </header>
  );
}

