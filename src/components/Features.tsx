"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, Award } from "lucide-react";

const features = [
  {
    title: "Servicio Rápido",
    description: "Entendemos la urgencia. Ofrecemos servicio el mismo día para que su vida no se detenga.",
    icon: Zap,
    color: "bg-blue-500",
  },
  {
    title: "Garantía Total",
    description: "90 días de garantía en piezas y mano de obra. Trabajamos con repuestos originales.",
    icon: ShieldCheck,
    color: "bg-green-500",
  },
  {
    title: "Técnicos Certificados",
    description: "Personal experto con años de experiencia y certificación en las principales marcas.",
    icon: Award,
    color: "bg-amber-500",
  },
];

export default function Features() {
  return (
    <section id="nosotros" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary font-display mb-4">¿Por qué elegirnos?</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Combinamos rapidez, honestidad y conocimiento técnico para brindarle la mejor experiencia en reparación.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow group"
            >
              <div className={`${feature.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform`}>
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-4">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
