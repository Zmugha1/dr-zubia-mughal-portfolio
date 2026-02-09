import Hero from '@/sections/Hero';
import TheoryAdvantage from '@/components/TheoryAdvantage';
import SmallDataMethodology from '@/components/SmallDataMethodology';
import ValueProposition from '@/sections/ValueProposition';
import AgentsShowcase from '@/sections/AgentsShowcase';
import Philosophy from '@/sections/Philosophy';
import Publications from '@/sections/Publications';
import About from '@/sections/About';
import Footer from '@/sections/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <TheoryAdvantage />
      <SmallDataMethodology />
      <ValueProposition />
      <AgentsShowcase />
      <Philosophy />
      <Publications />
      <About />
      <Footer />
    </>
  );
}
