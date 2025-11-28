import { Container } from "@/components/ui/container";
import { FAQ_ITEMS } from "@/content/site";

export function FaqSection() {
  return (
    <section id="faq" className="border-b border-zinc-100 bg-zinc-50 py-20">
      <Container className="space-y-8 text-zinc-900">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500">
            FAQ
          </p>
          <h2 className="text-2xl font-semibold">Questions engineers actually ask</h2>
        </div>
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <details
              key={item.question}
              className="rounded-2xl border border-dashed border-zinc-200 bg-white/80 p-4"
            >
              <summary className="cursor-pointer text-base font-semibold text-zinc-900">
                {item.question}
              </summary>
              <p className="mt-2 text-sm text-zinc-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

