# DevDreew · Portfólio

Portfólio pessoal de **Endrew Marques Lourenço Faisca (DevDreew)**, Analista de Dados em Barueri/SP.
Construído com **Next.js (App Router) + TypeScript + Tailwind CSS** e pronto para deploy na **Vercel**.

Paleta restrita a **preto, vermelho e branco** (definida como tokens no `tailwind.config.ts`).

## ✨ Recursos

- **Projetos do GitHub automáticos** — lê a API pública (`/users/DevDreew/repos`) em um Server Component com ISR (revalida a cada 1h). Novos repositórios aparecem sozinhos, sem rebuild.
- **Seção Power BI editável** — alimentada por `data/powerbi-projects.ts`, já com 3 exemplos.
- Hero, Sobre, Skills, Contato e Footer com ano dinâmico.
- Responsivo (mobile-first), navegação por teclado e foco visível.

## 🚀 Rodar localmente

```bash
npm install      # instala as dependências
npm run dev      # ambiente de desenvolvimento em http://localhost:3000
```

Para testar a versão de produção:

```bash
npm run build    # gera o build
npm run start    # serve o build em http://localhost:3000
```

## ☁️ Deploy na Vercel

1. Suba este repositório para o GitHub.
2. Acesse [vercel.com](https://vercel.com) → **Add New… → Project** e importe o repositório.
3. A Vercel detecta o **Next.js** automaticamente — não precisa configurar nada.
   (Build: `next build` · Output: `.next` · sem variáveis de ambiente.)
4. Clique em **Deploy**. Pronto. 🎉

## ✏️ O que editar (seus dados)

| O quê | Onde |
|---|---|
| Nome, cargo, frase, sobre, **e-mail** e links (GitHub/LinkedIn) | `lib/site.ts` |
| Usuário do GitHub que abastece os cards | `lib/github.ts` (`GITHUB_USER`) |
| Projetos de Power BI (adicionar/editar/trocar link por pasta) | `data/powerbi-projects.ts` |
| Skills por área | `components/Skills.tsx` |
| **Tons das cores** (preto/vermelho/branco) | `tailwind.config.ts` |

A demo do dashboard "3CORP" fica preservada em `public/projetos/3corp/`.
