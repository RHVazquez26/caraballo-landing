"use client";

import { motion } from "framer-motion";
import { Phone, CheckCircle } from "lucide-react";
import { trackCallConversion } from "@/utils/gtag";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-bold rounded-full text-sm mb-6 tracking-wide">
              DISPONIBILIDAD INMEDIATA 24/7
            </span>
            <h1 className="text-5xl sm:text-6xl font-bold text-secondary font-display mb-6 leading-[1.1]">
              Reparación de Appliances en <span className="text-primary italic">Miami</span> - ¡Llegamos hoy mismo!
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Servicio técnico experto para sus equipos de línea blanca. Reparamos refrigeradores, lavadoras y secadoras con garantía certificada en todo <span className="font-bold text-secondary">Miami-Dade y Broward</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <motion.a
                href="tel:+17863264978"
                onClick={() => trackCallConversion()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary hover:bg-primary-hover text-white px-8 py-5 rounded-2xl font-black text-xl flex items-center justify-center shadow-xl shadow-primary/40 transition-all border-b-4 border-primary-hover active:border-b-0"
              >
                <Phone className="mr-3 h-6 w-6" />
                LLAMAR AHORA: 786-326-4978
              </motion.a>
              
              <div className="flex items-center space-x-4 px-4 bg-white/50 backdrop-blur rounded-2xl border border-white/40">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/150?u=${i}`} alt="Client" />
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <div className="flex text-amber-500 font-bold">★★★★★</div>
                  <div className="text-slate-500 font-medium">+10 años de experiencia</div>
                </div>
              </div>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Presupuesto Gratis con reparación",
                "Garantía de 90 días por escrito",
                "Técnicos Certificados y con Seguro",
                "Repuestos originales garantizados"
              ].map((text, i) => (
                <li key={i} className="flex items-center text-slate-700 font-medium">
                  <CheckCircle className="text-primary h-5 w-5 mr-3 flex-shrink-0" />
                  {text}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative side element */}
      <div className="absolute right-0 bottom-0 top-0 w-1/3 hidden lg:block overflow-hidden">
        <div className="h-full w-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
}
