import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { getRepos, GITHUB_USER } from "@/lib/github";

/**
 * Seção de Projetos do GitHub — Server Component.
 * Os repositórios são lidos da API pública com ISR (revalida a cada 1h),
 * então novos repos aparecem sozinhos quando você publicar.
 */
export default async function GithubProjects() {
  const { repos, error } = await getRepos();

  return (
    <section id="projetos-github" className="container-base scroll-mt-20 py-24">
      <SectionHeading
        eyebrow="03 · GitHub"
        titulo="Projetos no GitHub"
        descricao="Atualizado automaticamente direto da API pública do GitHub."
      />

      {error ? (
        // Fallback de rate limit / rede indisponível.
        <div className="rounded-xl border border-preto-700 bg-preto-800 p-8 text-center">
          <p className="text-branco-200">
            Não foi possível carregar os repositórios agora (limite da API do
            GitHub ou rede indisponível).
          </p>
          <a
            href={`https://github.com/${GITHUB_USER}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block rounded-md bg-vermelho px-5 py-2.5 font-medium text-branco transition-colors hover:bg-vermelho-600"
          >
            Ver no GitHub
          </a>
        </div>
      ) : repos.length === 0 ? (
        <p className="text-suave">Nenhum repositório público encontrado ainda.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo) => (
            <ProjectCard key={repo.id} repo={repo} />
          ))}
        </div>
      )}
    </section>
  );
}
