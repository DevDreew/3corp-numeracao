import Image from "next/image";
import { site } from "@/lib/site";
import { getUser } from "@/lib/github";

/**
 * Hero — Server Component. Busca o avatar do GitHub para exibir com next/image.
 * Se a API falhar, mostra um monograma como fallback (sem quebrar o build).
 */
export default async function Hero() {
  const user = await getUser();

  return (
    <section
      id="topo"
      className="relative overflow-hidden border-b border-preto-700"
    >
      {/* Brilho vermelho sutil de fundo (decorativo). */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-vermelho/20 blur-[120px]"
      />

      <div className="container-base relative grid items-center gap-12 py-28 md:grid-cols-[1.4fr_1fr] md:py-36">
        <div className="animate-fade-up">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-preto-700 bg-preto-800 px-4 py-1.5 text-sm text-branco-400">
            <span className="h-2 w-2 rounded-full bg-vermelho" aria-hidden />
            {site.cargo} · {site.localizacao}
          </span>

          <h1 className="font-display text-5xl font-bold leading-tight tracking-tight text-branco sm:text-6xl">
            Olá, sou <span className="text-vermelho">{site.apelido}</span>
          </h1>
          <p className="mt-3 text-lg text-branco-200">{site.nome}</p>

          <p className="mt-6 max-w-xl text-lg text-suave">{site.tagline}</p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projetos-github"
              className="rounded-md bg-vermelho px-6 py-3 font-medium text-branco transition-colors hover:bg-vermelho-600"
            >
              Ver Projetos
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-preto-700 px-6 py-3 font-medium text-branco transition-colors hover:border-vermelho hover:text-vermelho"
            >
              GitHub
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-preto-700 px-6 py-3 font-medium text-branco transition-colors hover:border-vermelho hover:text-vermelho"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Avatar */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div
              aria-hidden
              className="absolute inset-0 -z-10 translate-x-3 translate-y-3 rounded-2xl border border-vermelho"
            />
            {user?.avatar_url ? (
              <Image
                src={user.avatar_url}
                alt={`Foto de perfil de ${site.nome}`}
                width={280}
                height={280}
                priority
                className="h-56 w-56 rounded-2xl border border-preto-700 object-cover sm:h-72 sm:w-72"
              />
            ) : (
              // Fallback: monograma quando a API do GitHub não responde.
              <div
                className="flex h-56 w-56 items-center justify-center rounded-2xl border border-preto-700 bg-preto-800 font-display text-7xl font-bold text-vermelho sm:h-72 sm:w-72"
                aria-label={`Iniciais de ${site.nome}`}
              >
                DD
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
