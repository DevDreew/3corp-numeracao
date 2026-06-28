import SectionHeading from "./SectionHeading";
import { site } from "@/lib/site";

export default function Contact() {
  const CONTATOS = [
    { label: "GitHub", valor: "@DevDreew", href: site.github, externo: true },
    {
      label: "LinkedIn",
      valor: "Endrew Faisca",
      href: site.linkedin,
      externo: true,
    },
    // ✏️ O e-mail é definido em lib/site.ts — troque o placeholder por lá.
    { label: "E-mail", valor: site.email, href: `mailto:${site.email}`, externo: false },
  ];

  return (
    <section id="contato" className="container-base scroll-mt-20 py-24">
      <SectionHeading
        eyebrow="05 · Contato"
        titulo="Vamos conversar"
        descricao="Aberto a oportunidades em Análise de Dados, BI e automação. É só chamar."
      />

      <div className="grid gap-4 sm:grid-cols-3">
        {CONTATOS.map((c) => (
          <a
            key={c.label}
            href={c.href}
            {...(c.externo
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="group rounded-xl border border-preto-700 bg-preto-800 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-vermelho hover:shadow-glow-vermelho"
          >
            <p className="text-sm text-branco-400">{c.label}</p>
            <p className="mt-1 break-words font-medium text-branco transition-colors group-hover:text-vermelho">
              {c.valor}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
