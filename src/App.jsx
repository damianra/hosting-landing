import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Plans from './components/Plans';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFab from './components/WhatsAppFab';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#020503] text-emerald-50 antialiased">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Plans />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
