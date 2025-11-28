import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { CODE_SNIPPET } from "@/content/site";

export function CodeSnippetSection() {
  return (
    <section id="code" className="border-b border-zinc-100 bg-zinc-900 py-20 text-white">
      <Container className="space-y-6">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-400">
            Example
          </p>
          <h2 className="text-2xl font-semibold">Replay the exact payload</h2>
          <p className="text-sm text-zinc-300">
            Later we will add copy-to-clipboard + syntax highlight. For now this
            block ensures the section renders and the code data is wired.
          </p>
        </div>
        <pre className="overflow-auto rounded-2xl border border-zinc-800 bg-black/40 p-6 text-sm leading-relaxed text-zinc-100">
          <code>{CODE_SNIPPET}</code>
        </pre>
        <Button variant="secondary">Copy snippet</Button>
      </Container>
    </section>
  );
}

