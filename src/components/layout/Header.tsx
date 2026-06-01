"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { IconMenu, IconClose } from "@/components/ui/icons";
import { mainNav } from "@/lib/navigation";
import { cn } from "@/lib/cn";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="rounded-md"
            aria-label="EnviLabs — naar de homepage"
          >
            <Logo />
          </Link>

          {/* Desktop-navigatie */}
          <nav aria-label="Hoofdnavigatie" className="hidden items-center gap-8 md:flex">
            <ul className="flex items-center gap-6">
              {mainNav.map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "text-ui font-medium transition-colors hover:text-navy",
                        active ? "text-navy" : "text-slate-600"
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Button href="/contact" size="md">
              Neem contact op
            </Button>
          </nav>

          {/* Mobiele menuknop */}
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-navy md:hidden"
            aria-expanded={open}
            aria-controls="mobiel-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Menu sluiten" : "Menu openen"}</span>
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </Container>

      {/* Mobiel uitklapmenu */}
      {open && (
        <div id="mobiel-menu" className="border-t border-line bg-paper md:hidden">
          <Container>
            <nav aria-label="Mobiele navigatie" className="py-4">
              <ul className="flex flex-col gap-1">
                {mainNav.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "flex min-h-[44px] items-center rounded-md px-3 text-body font-medium",
                          active ? "bg-slate-50 text-navy" : "text-slate-700"
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
                <li className="mt-2">
                  <Button href="/contact" size="lg" className="w-full" onClick={() => setOpen(false)}>
                    Neem contact op
                  </Button>
                </li>
              </ul>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
