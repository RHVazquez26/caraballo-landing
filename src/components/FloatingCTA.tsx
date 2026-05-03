"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { trackCallConversion } from "@/utils/gtag";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          className="fixed bottom-6 right-6 z-50 md:hidden"
        >
          <a
            href="tel:+17863264978"
            onClick={() => trackCallConversion()}
            className="flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full shadow-2xl shadow-primary/60 border-2 border-white animate-bounce"
          >
            <Phone className="h-8 w-8" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
