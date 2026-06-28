import type { Config } from "tailwindcss";

/**
 * PALETA DO SITE — só existem 3 cores: preto, vermelho e branco.
 *
 * 👉 Para mudar os TONS do site inteiro, edite SOMENTE os valores abaixo.
 *    Todo o código usa estes tokens (ex.: bg-preto, text-branco, bg-vermelho),
 *    então alterar aqui muda o portfólio inteiro de uma vez.
 */
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // PRETO — fundo principal do site (dark mode por padrão).
        preto: {
          DEFAULT: "#0A0A0A", // fundo base
          puro: "#000000", // preto absoluto (use quando quiser ainda mais escuro)
          900: "#0A0A0A",
          800: "#121212", // cards / superfícies elevadas
          700: "#1A1A1A", // bordas suaves / superfícies sobre cards
        },
        // BRANCO — texto principal e neutros (cinzas derivados do branco).
        branco: {
          DEFAULT: "#FFFFFF", // texto principal
          200: "#E5E5E5", // texto levemente suave
          400: "#A3A3A3", // texto secundário
          600: "#6B6B6B", // texto desabilitado / legendas
        },
        // VERMELHO — único accent: botões, hover, bordas de destaque, indicadores.
        vermelho: {
          DEFAULT: "#E11D2A", // accent principal
          600: "#DC2626", // hover / estados ativos
          700: "#B91C1C", // pressionado
        },
      },
      fontFamily: {
        // As fontes são injetadas via next/font em app/layout.tsx (variáveis CSS).
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
      },
      boxShadow: {
        // Brilho vermelho usado no hover dos cards.
        "glow-vermelho": "0 0 0 1px rgba(225,29,42,0.6), 0 10px 30px -10px rgba(225,29,42,0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
