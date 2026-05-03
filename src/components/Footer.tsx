"use client";

import { MapPin, Clock, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-20 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[120px] rounded-full -mr-32 -mt-32"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-bold font-display mb-6">
              Caraballo <span className="text-primary">Appliances</span>
            </h3>
            <p className="text-slate-400 text-lg mb-8 max-w-md">
              Líderes en reparación de electrodomésticos en el sur de la Florida. Compromiso, calidad y rapidez en cada servicio.
            </p>
            <div className="flex space-x-4">
              <a href="tel:+17863264978" className="bg-white/10 p-3 rounded-xl hover:bg-primary transition-colors">
                <Phone className="h-6 w-6" />
              </a>
              <div className="bg-white/10 p-3 rounded-xl">
                <MapPin className="h-6 w-6" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Cobertura</h4>
            <div className="grid grid-cols-2 gap-x-8">
              <ul className="space-y-3 text-slate-400 text-lg">
                <li className="font-bold text-white mb-2">Miami-Dade</li>
                <li>Miami</li>
                <li>Hialeah</li>
                <li>Doral</li>
                <li>Kendall</li>
              </ul>
              <ul className="space-y-3 text-slate-400 text-lg">
                <li className="font-bold text-white mb-2">Broward</li>
                <li>Miramar</li>
                <li>Hollywood</li>
                <li>Pembroke Pines</li>
                <li>Hallandale</li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Horarios</h4>
            <ul className="space-y-4 text-slate-400 text-lg">
              <li className="flex items-center">
                <Clock className="h-5 w-5 mr-3 text-primary" />
                Lunes - Sábado
              </li>
              <li className="ml-8">7:00 AM - 8:00 PM</li>
              <li className="flex items-center text-primary font-bold">
                <Clock className="h-5 w-5 mr-3" />
                Emergencias 24/7
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-slate-500">
          <p>© {new Date().getFullYear()} Caraballo Appliances. Todos los derechos reservados.</p>
          <p className="mt-2 text-sm">Miami-Dade County, Florida.</p>
        </div>
      </div>
    </footer>
  );
}
