import SectionHeading from "./SectionHeading";
import PowerBICard from "./PowerBICard";
import { powerbiProjects } from "@/data/powerbi-projects";

/**
 * Seção de Projetos Power BI — alimentada pelo arquivo local
 * data/powerbi-projects.ts (editável por você).
 */
export default function PowerBIProjects() {
  return (
    <section
      id="projetos-powerbi"
      className="border-y border-preto-700 bg-preto-900/40"
    >
      <div className="container-base scroll-mt-20 py-24">
        <SectionHeading
          eyebrow="04 · Power BI"
          titulo="Projetos Power BI"
          descricao="Dashboards e relatórios de análise de dados. Clique no card para abrir."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {powerbiProjects.map((projeto) => (
            <PowerBICard key={projeto.titulo} projeto={projeto} />
          ))}
        </div>
      </div>
    </section>
  );
}
