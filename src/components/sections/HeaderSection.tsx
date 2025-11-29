"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { NAV_ITEMS } from "@/content/site";
import { cn } from "@/lib/cn";
import { useEffect, useId, useState } from "react";

export function HeaderSection() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileMenuId = useId();

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  const renderLinks = (className?: string) =>
    NAV_ITEMS.map((item) => (
      <a
        key={item.href}
        href={item.href}
        onClick={closeMenu}
        className={cn(
          "text-base font-semibold text-zinc-900 transition hover:text-zinc-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400",
          className
        )}
      >
        {item.label}
      </a>
    ));

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-zinc-300 transition-colors duration-300",
        isScrolled
          ? "bg-white/30 backdrop-blur-md shadow-[0_10px_25px_rgba(15,23,42,0.08)]"
          : "bg-white"
      )}
      id="top"
    >
      <Container className="flex h-20 items-center gap-4">
        <div className="flex items-center md:flex-1">
          <a
            href="#hero"
            className="text-xl font-semibold tracking-tight text-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400 sm:text-2xl"
          >
            Tracekit
          </a>
        </div>
        <nav className="hidden flex-1 items-center justify-center gap-6 md:flex">{renderLinks()}</nav>
        <div className="hidden flex-1 items-center justify-end gap-3 md:flex">
          <Button variant="secondary">View docs</Button>
          <Button>Get API key</Button>
        </div>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-zinc-200 p-2 text-sm text-zinc-700 transition hover:border-zinc-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls={mobileMenuId}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          <span className="sr-only">Toggle navigation menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </Container>
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm" onClick={closeMenu} />
          <div
            id={mobileMenuId}
            className="fixed inset-x-4 top-4 z-50 rounded-2xl border border-zinc-200 bg-white p-6 shadow-lg"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-base font-semibold text-zinc-900">Menu</span>
                <button
                  type="button"
                  onClick={closeMenu}
                  className="rounded-full border border-zinc-200 p-2 text-zinc-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400"
                  aria-label="Close navigation menu"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col gap-3">{renderLinks("text-base")}</div>
              <div className="flex flex-col gap-3">
                <Button variant="secondary" onClick={closeMenu}>
                  View docs
                </Button>
                <Button onClick={closeMenu}>Get API key</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

