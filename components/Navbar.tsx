"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#skills", label: "Skills" },
  { href: "#projetos-github", label: "GitHub" },
  { href: "#projetos-powerbi", label: "Power BI" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-preto-700 bg-preto/85 backdrop-blur"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        className="container-base flex h-16 items-center justify-between"
        aria-label="Navegação principal"
      >
        <a
          href="#topo"
          className="font-display text-lg font-bold tracking-tight text-branco"
        >
          Dev<span className="text-vermelho">Dreew</span>
        </a>

        {/* Links — desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-branco-400 transition-colors hover:text-vermelho"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-vermelho px-4 py-2 text-sm font-medium text-branco transition-colors hover:bg-vermelho"
            >
              GitHub
            </a>
          </li>
        </ul>

        {/* Botão — mobile */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-preto-700 text-branco md:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label="Abrir menu"
        >
          <span aria-hidden className="text-xl">
            {open ? "✕" : "☰"}
          </span>
        </button>
      </nav>

      {/* Menu — mobile */}
      {open && (
        <div
          id="menu-mobile"
          className="border-t border-preto-700 bg-preto md:hidden"
        >
          <ul className="container-base flex flex-col py-3">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-branco-200 transition-colors hover:text-vermelho"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
