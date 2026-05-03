"use client";

import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { trackCallConversion } from "@/utils/gtag";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const phone = "786-326-4978";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-secondary font-display tracking-tight">
              Caraballo <span className="text-primary tracking-wide">Appliances</span>
            </span>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#servicios" className="text-foreground hover:text-primary transition-colors font-medium">Servicios</a>
            <a href="#ventas" className="text-foreground hover:text-primary transition-colors font-medium">Equipos</a>
            <a href="#cobertura" className="text-foreground hover:text-primary transition-colors font-medium">Cobertura</a>
            <a href="#nosotros" className="text-foreground hover:text-primary transition-colors font-medium">¿Por qué nosotros?</a>
          </div>

          <div className="hidden md:flex items-center">
            <motion.a
              href={`tel:+1${phone.replace(/-/g, "")}`}
              onClick={() => trackCallConversion()}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-full font-bold flex items-center shadow-lg shadow-primary/30 transition-shadow"
            >
              <Phone className="mr-2 h-5 w-5" />
              LLAMAR AHORA: {phone}
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-secondary p-2 rounded-lg hover:bg-slate-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              <a 
                href="#servicios" 
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-lg font-medium text-secondary border-b border-slate-50"
              >
                Servicios
              </a>
              <a 
                href="#ventas" 
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-lg font-medium text-secondary border-b border-slate-50"
              >
                Equipos
              </a>
              <a 
                href="#cobertura" 
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-lg font-medium text-secondary border-b border-slate-50"
              >
                Cobertura
              </a>
              <a 
                href="tel:+17863264978"
                onClick={() => trackCallConversion()}
                className="mt-6 w-full bg-primary text-white py-4 rounded-xl flex items-center justify-center font-bold text-xl shadow-lg shadow-primary/20"
              >
                <Phone className="mr-3 h-6 w-6" />
                Llamar: {phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
