import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import GithubProjects from "@/components/GithubProjects";
import PowerBIProjects from "@/components/PowerBIProjects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// ISR: a página é revalidada a cada 1 hora (combina com o fetch do GitHub).
export const revalidate = 3600;

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <GithubProjects />
        <PowerBIProjects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
