"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Refrigeradores",
    description: "Reparamos todas las marcas y modelos, desde problemas de enfriamiento hasta fugas de gas.",
    image: "/refrigerator.png",
  },
  {
    title: "Lavadoras",
    description: "Soluciones para ruidos extraños, fallas en el centrifugado o problemas de llenado.",
    image: "/washer.png",
  },
  {
    title: "Secadoras",
    description: "Mantenimiento y reparación para evitar riesgos de incendio y asegurar un secado óptimo.",
    image: "/dryer.png",
  },
];

const brands = [
  { label: "Samsung", logo: "https://www.logo.wine/a/logo/Samsung/Samsung-Logo.wine.svg" },
  { label: "LG", logo: "https://www.logo.wine/a/logo/LG_Electronics/LG_Electronics-Logo.wine.svg" },
  { label: "Whirlpool", logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Whirlpool_Corporation_Logo_%28as_of_2017%29.svg" },
  { label: "GE", logo: "https://www.logo.wine/a/logo/General_Electric/General_Electric-Logo.wine.svg" },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-secondary font-display mb-4">Servicios Profesionales</h2>
            <p className="text-slate-500 text-lg">
              Especialistas en la reparación de los electrodomésticos más importantes de su hogar con repuestos originales.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
            {brands.map(brand => (
              <img 
                key={brand.label} 
                src={brand.logo} 
                alt={brand.label} 
                className="h-6 md:h-8 w-auto object-contain"
                loading="lazy"
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-64 mb-6 overflow-hidden rounded-3xl">
                <Image 
                  src={service.image} 
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-2 flex items-center">
                {service.title}
                <div className="ml-2 w-0 h-0.5 bg-primary group-hover:w-8 transition-all duration-300"></div>
              </h3>
              <p className="text-slate-600">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
