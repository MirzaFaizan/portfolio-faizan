import { Hero } from "@/components/Hero";
import { Thesis } from "@/components/Thesis";
import { Brands } from "@/components/Brands";
import { Eras } from "@/components/Eras";
import { Capabilities } from "@/components/Capabilities";
import { Graveyard } from "@/components/Graveyard";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <main id="main">
        <Thesis />
        <Brands />
        <Eras />
        <Capabilities />
        <Graveyard />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
