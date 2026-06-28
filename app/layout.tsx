import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

// Fontes via next/font (sem requisições externas em runtime).
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  // ✏️ Edite aqui os textos que aparecem na aba do navegador e no Google.
  title: "DevDreew · Endrew Faisca — Analista de Dados",
  description:
    "Portfólio de Endrew Marques Lourenço Faisca (DevDreew), Analista de Dados em Barueri/SP. Power BI, SQL, automação em Python e desenvolvimento web.",
  keywords: [
    "Analista de Dados",
    "Power BI",
    "SQL",
    "Python",
    "Selenium",
    "Next.js",
    "DevDreew",
  ],
  authors: [{ name: "Endrew Marques Lourenço Faisca" }],
  openGraph: {
    title: "DevDreew · Analista de Dados",
    description:
      "Power BI, SQL, automação em Python e desenvolvimento web. Veja meus projetos.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
