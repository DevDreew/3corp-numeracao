interface SectionHeadingProps {
  /** Número/etiqueta pequena exibida acima do título (ex.: "01"). */
  eyebrow?: string;
  titulo: string;
  descricao?: string;
}

/** Cabeçalho padrão das seções, mantendo o ritmo visual do site. */
export default function SectionHeading({
  eyebrow,
  titulo,
  descricao,
}: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-2xl">
      {eyebrow && (
        <span className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-vermelho">
          <span className="h-px w-6 bg-vermelho" aria-hidden />
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight text-branco sm:text-4xl">
        {titulo}
      </h2>
      {descricao && <p className="mt-3 text-suave">{descricao}</p>}
    </div>
  );
}
