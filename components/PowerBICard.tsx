import { PowerBIProject, TipoProjeto } from "@/data/powerbi-projects";

// Rótulo amigável para cada tipo de projeto.
const ROTULO_TIPO: Record<TipoProjeto, string> = {
  dashboard: "Dashboard",
  relatorio: "Relatório",
  pasta: "Pasta",
};

/** Card clicável de um projeto de Power BI (abre o link em nova aba). */
export default function PowerBICard({ projeto }: { projeto: PowerBIProject }) {
  return (
    <a
      href={projeto.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col rounded-xl border border-preto-700 bg-preto-800 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-vermelho hover:shadow-glow-vermelho"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-md border border-vermelho/40 bg-vermelho/10 px-2.5 py-1 text-xs font-medium text-vermelho">
          {ROTULO_TIPO[projeto.tipo]}
        </span>
        <span
          aria-hidden
          className="text-branco-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-vermelho"
        >
          ↗
        </span>
      </div>

      <h3 className="mt-4 font-display text-lg font-semibold text-branco transition-colors group-hover:text-vermelho">
        {projeto.titulo}
      </h3>

      <p className="mt-2 flex-1 text-sm leading-relaxed text-suave">
        {projeto.descricao}
      </p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {projeto.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-md border border-preto-700 bg-preto-900 px-2.5 py-1 text-xs text-branco-200"
          >
            {tag}
          </li>
        ))}
      </ul>
    </a>
  );
}
