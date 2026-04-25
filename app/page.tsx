import Navbar from '../components/Navbar';
import Hero from './Hero';
import Features from './Features';
import HowItWorks from './HowItWorks';
import Pricing from './Pricing';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#e9f2f5]">
      <Navbar />
      <Hero />
      <hr className="border-slate-100" />
      <Features />
      <HowItWorks />
      <Pricing />
      <CTA />
      <Footer /> 
    </main>
  );
}