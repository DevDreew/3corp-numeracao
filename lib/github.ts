/**
 * Integração com a API pública do GitHub.
 *
 * 👉 Para trocar o usuário do GitHub, altere a constante GITHUB_USER abaixo.
 */
export const GITHUB_USER = "DevDreew";

/** Formato (parcial) de um repositório retornado pela API do GitHub. */
export interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  fork: boolean;
  archived: boolean;
  topics?: string[];
}

/** Perfil público do usuário (usado no Hero para o avatar). */
export interface GithubUser {
  login: string;
  name: string | null;
  avatar_url: string;
  html_url: string;
  bio: string | null;
}

/** Resultado da busca de repositórios, com tratamento de erro/rate limit. */
export interface ReposResult {
  repos: GithubRepo[];
  /** true quando a API falhou (ex.: rate limit, rede offline). */
  error: boolean;
}

const REPOS_ENDPOINT = `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=100`;
const USER_ENDPOINT = `https://api.github.com/users/${GITHUB_USER}`;

const COMMON_HEADERS: HeadersInit = {
  Accept: "application/vnd.github+json",
  // O GitHub recomenda enviar um User-Agent identificável.
  "User-Agent": "DevDreew-Portfolio",
};

/**
 * Busca os repositórios públicos.
 * ISR: revalida a cada 1 hora, então novos repositórios aparecem sozinhos
 * sem precisar de rebuild manual.
 */
export async function getRepos(): Promise<ReposResult> {
  try {
    const res = await fetch(REPOS_ENDPOINT, {
      headers: COMMON_HEADERS,
      next: { revalidate: 3600 }, // 1 hora
    });

    // Trata rate limit (403) e qualquer outra resposta não-OK.
    if (!res.ok) {
      return { repos: [], error: true };
    }

    const data = (await res.json()) as GithubRepo[];

    // Esconde forks e repositórios arquivados, e ordena destacando os com estrelas.
    const repos = data
      .filter((r) => !r.fork && !r.archived)
      .sort((a, b) => {
        if (b.stargazers_count !== a.stargazers_count) {
          return b.stargazers_count - a.stargazers_count;
        }
        return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
      });

    return { repos, error: false };
  } catch {
    // Rede indisponível durante o build / runtime → fallback elegante.
    return { repos: [], error: true };
  }
}

/** Busca o perfil público (para avatar e bio). Retorna null em caso de erro. */
export async function getUser(): Promise<GithubUser | null> {
  try {
    const res = await fetch(USER_ENDPOINT, {
      headers: COMMON_HEADERS,
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    return (await res.json()) as GithubUser;
  } catch {
    return null;
  }
}

/** Formata a data de atualização no padrão brasileiro (ex.: "28 jun 2026"). */
export function formatarData(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch {
    return "";
  }
}
