import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import SalesSection from "@/components/SalesSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <SalesSection />
      <Services />
      
      {/* Coverage Section (Simplified in Page) */}
      <section id="cobertura" className="py-20 bg-slate-50 overflow-hidden relative border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold font-display mb-8 text-secondary tracking-tight">Cobertura en todo Miami-Dade y Broward</h2>
          <div className="flex flex-wrap justify-center gap-3 text-lg">
            {["Miami", "Hialeah", "Doral", "Kendall", "Miramar", "Hollywood", "Pines"].map(city => (
              <span key={city} className="px-5 py-2 bg-white text-slate-600 rounded-full border border-slate-200 font-medium">
                {city}
              </span>
            ))}
          </div>
          <p className="mt-10 text-slate-500 max-w-2xl mx-auto italic font-medium">
            "Atención inmediata en los condados de Miami-Dade y Broward. Servicio garantizado el mismo día."
          </p>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </main>
  );
}
