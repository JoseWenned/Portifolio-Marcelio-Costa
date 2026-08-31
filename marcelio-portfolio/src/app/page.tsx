import { About } from "@/components/About/about.component";
import { Header } from "../components/Header/header.component";
import { Hero } from '../components/Hero/hero.component';
import { Experience } from "@/components/Experience/experience.component";
import { Skills } from "@/components/Skills/skills.component";
import { Formation } from "@/components/Formation/formation.component";
import { Contact } from "@/components/Contact/contact.component";
import { Footer } from "@/components/Footer/footer.component";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About/>
        <Experience/>
        <Skills/>
        <Formation/>
        <Contact />
        <Footer />
      </main>
    </>
  );
}