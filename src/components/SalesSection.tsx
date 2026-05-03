"use client";

import { motion } from "framer-motion";
import { ShoppingCart, BadgeCheck, Truck, Phone } from "lucide-react";
import { trackCallConversion } from "@/utils/gtag";

export default function SalesSection() {
  return (
    <section id="ventas" className="py-24 bg-secondary text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[150px] rounded-full -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 blur-[150px] rounded-full -ml-48 -mb-48"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 text-primary font-bold text-sm mb-6 border border-white/10"
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            VENTA DE EQUIPOS
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-bold font-display mb-6">Equipos Como Nuevos y Usados</h2>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto">
            ¿Busca renovar su hogar? Ofrecemos una selección curada de electrodomésticos con garantía certificada y entrega inmediata.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-[2.5rem] relative group overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <BadgeCheck className="h-32 w-32" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Equipos <span className="text-primary">Como Nuevos</span></h3>
            <p className="text-slate-400 text-lg mb-8">
              Lo último en tecnología de las mejores marcas (Samsung, LG, Whirlpool) con garantía de fábrica y nuestra instalación profesional.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center text-slate-300">
                <BadgeCheck className="text-primary h-5 w-5 mr-3" />
                Garantía oficial completa
              </li>
              <li className="flex items-center text-slate-300">
                <Truck className="text-primary h-5 w-5 mr-3" />
                Entrega el mismo día
              </li>
            </ul>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-[2.5rem] relative group overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <BadgeCheck className="h-32 w-32" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Equipos <span className="text-primary">Reacondicionados</span></h3>
            <p className="text-slate-400 text-lg mb-8">
              Ahorre en grande con equipos de alta calidad inspeccionados por nuestros técnicos. Ideales para presupuestos inteligentes.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center text-slate-300">
                <BadgeCheck className="text-primary h-5 w-5 mr-3" />
                Garantía Caraballo incluída
              </li>
              <li className="flex items-center text-slate-300">
                <BadgeCheck className="text-primary h-5 w-5 mr-3" />
                Precios insuperables
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="text-center">
          <motion.a
            href="tel:+17863264978"
            onClick={() => trackCallConversion()}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex bg-primary hover:bg-primary-hover text-white px-10 py-6 rounded-2xl font-black text-2xl items-center shadow-2xl shadow-primary/40 transition-all"
          >
            <Phone className="mr-4 h-8 w-8" />
            PREGUNTAR POR DISPONIBILIDAD
          </motion.a>
          <p className="mt-6 text-slate-500 font-medium tracking-wide italic">
             Llámenos al 786-326-4978 para conocer el inventario actual.
          </p>
        </div>
      </div>
    </section>
  );
}
