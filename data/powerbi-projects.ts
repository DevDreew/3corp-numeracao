/**
 * PROJETOS DE POWER BI — arquivo editável por você.
 * ----------------------------------------------------------------------------
 * Esta lista alimenta a seção "Projetos Power BI" do site.
 *
 * 👉 COMO ADICIONAR UM NOVO PROJETO
 *    Copie um dos objetos abaixo (de "{" até "},") e cole no fim da lista,
 *    trocando os valores. Os campos são:
 *      - titulo:    nome do projeto (texto)
 *      - descricao: do que se trata e qual problema de negócio ele resolve
 *      - tags:      tecnologias/conceitos, ex.: ["DAX", "Star Schema", "Supabase"]
 *      - link:      URL do relatório publicado OU de uma pasta (Drive, OneDrive...)
 *      - tipo:      "dashboard" | "relatorio" | "pasta"
 *
 * 👉 COMO TROCAR UM LINK POR UMA PASTA
 *    Basta colocar a URL da pasta no campo "link" e mudar o "tipo" para "pasta".
 *    Exemplo:
 *      link: "https://drive.google.com/drive/folders/SEU_ID_AQUI",
 *      tipo: "pasta",
 *
 * 👉 COMO TROCAR POR UM RELATÓRIO PUBLICADO DO POWER BI
 *      link: "https://app.powerbi.com/view?r=SEU_TOKEN_AQUI",
 *      tipo: "dashboard",  (ou "relatorio")
 *
 * Dica: para "publicar na web" no Power BI Service use
 *   Arquivo → Inserir relatório → Publicar na Web (público) e copie o link.
 * ----------------------------------------------------------------------------
 */

export type TipoProjeto = "dashboard" | "relatorio" | "pasta";

export interface PowerBIProject {
  titulo: string;
  descricao: string;
  tags: string[];
  link: string;
  tipo: TipoProjeto;
}

export const powerbiProjects: PowerBIProject[] = [
  {
    titulo: "Inteligência de Numeração Telecom",
    descricao:
      "Dashboard de gestão do parque de números (CLI) de uma operadora: acompanha ocupação, números ativos x em estoque, status de portabilidade e concentração por cliente e cidade. Resolve o problema de visibilidade do estoque ocioso, ajudando a equipe comercial a remanejar números disponíveis e reduzir custo de numeração parada.",
    tags: ["DAX", "Star Schema", "Supabase", "Power Query"],
    // ✏️ Troque pelo link do seu relatório publicado. Aqui aponto para a demo já hospedada neste site.
    link: "/projetos/3corp/index.html",
    tipo: "dashboard",
  },
  {
    titulo: "Churn & Retenção de Clientes",
    descricao:
      "Relatório analítico de cancelamento (churn) da base de clientes de telecom, cruzando perfil de plano, tempo de casa e chamados de suporte. Identifica os segmentos com maior risco de saída e mensura o impacto financeiro, permitindo ações de retenção direcionadas antes do cancelamento.",
    tags: ["DAX", "Modelagem Tabular", "SQL", "KPIs"],
    // ✏️ Substitua pela URL do seu relatório (app.powerbi.com/view?r=...).
    link: "https://app.powerbi.com/view?r=SEU_TOKEN_AQUI",
    tipo: "relatorio",
  },
  {
    titulo: "Operação & SLA de Atendimento",
    descricao:
      "Pasta com os artefatos de um painel de operação (NOC/atendimento): tempo médio de resolução, cumprimento de SLA por categoria de chamado e backlog diário. Dá ao gestor uma visão única do desempenho operacional para priorizar filas e antecipar estouros de SLA.",
    tags: ["Power BI Service", "Gateway", "PostgreSQL", "RLS"],
    // ✏️ Exemplo de tipo "pasta": troque pela URL da sua pasta no Drive/OneDrive.
    link: "https://drive.google.com/drive/folders/SEU_ID_AQUI",
    tipo: "pasta",
  },
];
