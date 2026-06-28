import { GithubRepo, formatarData } from "@/lib/github";

/** Card de um repositório do GitHub. */
export default function ProjectCard({ repo }: { repo: GithubRepo }) {
  // Fallback elegante para descrição vazia.
  const descricao = repo.description?.trim() || "Sem descrição ainda.";

  return (
    <article className="group flex h-full flex-col rounded-xl border border-preto-700 bg-preto-800 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-vermelho hover:shadow-glow-vermelho">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-lg font-semibold text-branco transition-colors group-hover:text-vermelho">
          {repo.name}
        </h3>
        <span
          className="flex shrink-0 items-center gap-1 text-sm text-branco-400"
          title={`${repo.stargazers_count} estrelas`}
        >
          <span aria-hidden className="text-vermelho">
            ★
          </span>
          {repo.stargazers_count}
        </span>
      </div>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-suave">{descricao}</p>

      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-branco-400">
        {repo.language && (
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-vermelho" aria-hidden />
            {repo.language}
          </span>
        )}
        <span>Atualizado em {formatarData(repo.updated_at)}</span>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border border-preto-700 px-4 py-2 text-sm font-medium text-branco transition-colors hover:border-vermelho hover:text-vermelho"
        >
          Ver Código
        </a>
        {/* "Ver Projeto"/Demo só aparece quando o repo tem homepage definida. */}
        {repo.homepage && repo.homepage.trim() !== "" && (
          <a
            href={repo.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-vermelho px-4 py-2 text-sm font-medium text-branco transition-colors hover:bg-vermelho-600"
          >
            Ver Projeto
          </a>
        )}
      </div>
    </article>
  );
}
