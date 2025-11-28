"use client";

import { Container } from "@/components/ui/container";
import { FAQ_ITEMS } from "@/content/site";
import { useId, useState } from "react";

export function FaqSection() {
  const baseId = useId();
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (question: string) =>
    setOpenItems((prev) => ({ ...prev, [question]: !prev[question] }));

  return (
    <section id="faq" className="border-b border-zinc-100 bg-zinc-50 py-20">
      <Container className="space-y-8 text-zinc-900">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500">
            FAQ
          </p>
          <h2 className="text-3xl font-semibold">Questions engineers actually ask</h2>
          <p className="text-zinc-600">
            No fluff—just the answers teams want before wiring Tracekit into their stack.
          </p>
        </div>
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const contentId = `${baseId}-faq-${index}`;
            const isOpen = openItems[item.question];

            return (
              <article
                key={item.question}
                className="rounded-3xl border border-zinc-200 bg-white/80 px-4 py-1 shadow-sm transition hover:border-emerald-200"
              >
                <button
                  type="button"
                  className="group flex w-full items-center justify-between gap-6 py-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => toggleItem(item.question)}
                >
                  <span className="text-base font-semibold text-zinc-900">{item.question}</span>
                  <span
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 text-sm text-zinc-600 transition group-hover:border-zinc-400"
                    aria-hidden="true"
                  >
                    <svg
                      className={`h-4 w-4 transition-transform ${isOpen ? "rotate-45" : ""}`}
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    >
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>
                <div
                  id={contentId}
                  className={`grid overflow-hidden text-sm text-zinc-600 transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] py-2" : "grid-rows-[0fr]"
                  }`}
                >
                  <p className="min-h-0">{item.answer}</p>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

