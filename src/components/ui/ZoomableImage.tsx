"use client";
import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ZoomableImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ZoomableImage({ src, alt, className }: ZoomableImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Imagen Pequeña (Thumbnail) */}
      <div 
        className={`relative group cursor-zoom-in overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-900 ${className}`}
        onClick={() => setIsOpen(true)}
      >
        <Image 
          src={src} 
          alt={alt} 
          width={1920} 
          height={1080} 
          className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
          <span className="bg-white/90 text-slate-900 px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
            <ZoomIn size={14} /> Ver Detalle
          </span>
        </div>
      </div>

      {/* Modal Pantalla Completa */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
          >
            <button className="absolute top-4 right-4 p-2 bg-white/10 text-white rounded-full hover:bg-white/20">
              <X size={24} />
            </button>
            <motion.div 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="relative w-full max-w-7xl h-full max-h-[90vh]"
            >
              <Image 
                src={src} 
                alt={alt} 
                fill 
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}