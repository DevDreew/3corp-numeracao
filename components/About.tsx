import SectionHeading from "./SectionHeading";
import { site } from "@/lib/site";

const DESTAQUES = [
  { titulo: "Dados & BI", texto: "Power BI, DAX e SQL para transformar dados em decisão." },
  { titulo: "Automação", texto: "Python e Selenium para eliminar tarefas repetitivas." },
  { titulo: "Web", texto: "Criação de sites modernos com Next.js, HTML, CSS e JS." },
];

export default function About() {
  return (
    <section id="sobre" className="container-base scroll-mt-20 py-24">
      <SectionHeading eyebrow="01 · Sobre" titulo="Quem é o DevDreew" />

      <div className="grid gap-10 md:grid-cols-[1.3fr_1fr]">
        <p className="text-lg leading-relaxed text-branco-200">{site.sobre}</p>

        <ul className="grid gap-4">
          {DESTAQUES.map((d) => (
            <li
              key={d.titulo}
              className="rounded-xl border border-preto-700 bg-preto-800 p-5"
            >
              <h3 className="font-display font-semibold text-vermelho">
                {d.titulo}
              </h3>
              <p className="mt-1 text-sm text-suave">{d.texto}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
