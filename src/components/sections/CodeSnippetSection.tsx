"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { CODE_SNIPPET } from "@/content/site";
import { useEffect, useState } from "react";

export function CodeSnippetSection() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timeout = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timeout);
  }, [copied]);

  const handleCopy = async () => {
    if (typeof navigator === "undefined" || !navigator.clipboard) return;
    try {
      await navigator.clipboard.writeText(CODE_SNIPPET);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="code" className="border-b border-zinc-100 bg-zinc-950 py-20 text-white">
      <Container className="space-y-6">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500">
            Example
          </p>
          <h2 className="text-3xl font-semibold">Replay the exact payload</h2>
          <p className="text-sm text-zinc-400">
            This curl call is what your teammate receives when you hit “Copy” inside Tracekit.
            It ships with the headers, signer key, and payload diff baked in.
          </p>
        </div>
        <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black shadow-2xl">
          <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-3 text-xs uppercase tracking-[0.2em] text-zinc-500">
            <span>curl sample</span>
            <div className="flex items-center gap-3">
              <span className="sr-only" aria-live="polite">
                {copied ? "Snippet copied" : ""}
              </span>
              <Button
                variant={copied ? "secondary" : "ghost"}
                onClick={handleCopy}
                className="h-8 px-4 text-xs font-semibold text-white"
              >
                {copied ? "Copied" : "Copy snippet"}
              </Button>
            </div>
          </div>
          <pre className="max-h-[360px] overflow-auto px-6 py-6 text-sm leading-relaxed text-zinc-100">
            <code>
              {CODE_SNIPPET.split("\n").map((line, index) => (
                <span key={index} className="block">
                  <span className="select-none text-zinc-500">{String(index + 1).padStart(2, "0")} </span>
                  <span className={line.trim().startsWith("-") ? "text-rose-300" : line.trim().startsWith("+") ? "text-emerald-300" : "text-zinc-100"}>
                    {line}
                  </span>
                </span>
              ))}
            </code>
          </pre>
        </div>
      </Container>
    </section>
  );
}

