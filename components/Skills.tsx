import SectionHeading from "./SectionHeading";

/**
 * Skills agrupadas por área.
 * 👉 Para editar suas habilidades, altere os arrays abaixo.
 */
const GRUPOS: { area: string; skills: string[] }[] = [
  {
    area: "Dados & BI",
    skills: ["Power BI", "DAX", "SQL", "PostgreSQL / Supabase", "Modelagem (Star Schema)"],
  },
  {
    area: "Automação",
    skills: ["Python", "Selenium", "Web Scraping", "Pandas"],
  },
  {
    area: "Web",
    skills: ["Next.js", "TypeScript", "HTML", "CSS / Tailwind", "JavaScript"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-y border-preto-700 bg-preto-900/40">
      <div className="container-base scroll-mt-20 py-24">
        <SectionHeading
          eyebrow="02 · Skills"
          titulo="Tecnologias que uso"
          descricao="Ferramentas com as quais trabalho no dia a dia, agrupadas por área de atuação."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {GRUPOS.map((g) => (
            <div
              key={g.area}
              className="rounded-xl border border-preto-700 bg-preto-800 p-6 transition-colors hover:border-vermelho"
            >
              <h3 className="font-display text-lg font-semibold text-branco">
                {g.area}
              </h3>
              <span className="mt-1 block h-0.5 w-10 bg-vermelho" aria-hidden />
              <ul className="mt-5 flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <li
                    key={s}
                    className="rounded-md border border-preto-700 bg-preto-900 px-3 py-1.5 text-sm text-branco-200"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
