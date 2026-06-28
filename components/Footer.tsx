import { site } from "@/lib/site";

export default function Footer() {
  // Ano dinâmico no rodapé.
  const ano = new Date().getFullYear();

  return (
    <footer className="border-t border-preto-700">
      <div className="container-base flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <p className="text-sm text-branco-400">
          © {ano} {site.nome} ·{" "}
          <span className="text-branco-200">{site.apelido}</span>
        </p>
        <p className="text-sm text-branco-400">
          Feito com <span className="text-vermelho">Next.js</span> &amp; Tailwind
          CSS
        </p>
      </div>
    </footer>
  );
}
