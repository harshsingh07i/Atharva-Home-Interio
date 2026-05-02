"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const projects = [
  { src: "/portfolio/living-room.png", title: "Luxury Living Room", category: "Living Room" },
  { src: "/portfolio/bedroom.png", title: "Premium Bedroom Suite", category: "Bedroom" },
  { src: "/portfolio/kitchen.png", title: "Modern Kitchen", category: "Kitchen" },
  { src: "/portfolio/bathroom.png", title: "Spa Bathroom", category: "Bathroom" },
  { src: "/portfolio/office.png", title: "Executive Office", category: "Office" },
  { src: "/portfolio/dining.png", title: "Elegant Dining Room", category: "Dining" },
];

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="portfolio" className="relative py-24 md:py-32 overflow-hidden" style={{ background: 'var(--background)' }}>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-gold uppercase tracking-[0.3em] text-xs mb-3 font-medium">Our Work</p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
            Featured <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="max-w-lg mx-auto text-base" style={{ color: 'var(--text-secondary)' }}>
            Every project is a masterpiece. Explore our latest creations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {projects.map((project) => (
            <div
              key={project.title}
              onClick={() => setSelectedImage(projects.indexOf(project))}
              className="relative group cursor-pointer rounded-xl overflow-hidden aspect-[4/3] hover:-translate-y-1 transition-transform duration-300"
            >
              <Image
                src={project.src}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-gold text-[10px] uppercase tracking-widest mb-0.5">{project.category}</span>
                <h3 className="text-white text-base font-serif font-bold">{project.title}</h3>
              </div>
              <div className="absolute inset-0 border border-white/0 group-hover:border-gold/20 rounded-xl transition-colors duration-300" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white/60 hover:text-white z-10"
          >
            <X size={28} />
          </button>
          <div className="relative max-w-4xl max-h-[85vh] w-full">
            <Image
              src={projects[selectedImage].src}
              alt={projects[selectedImage].title}
              width={1200}
              height={900}
              className="rounded-xl object-contain w-full h-auto max-h-[85vh]"
            />
            <div className="absolute bottom-4 left-4 text-white">
              <span className="text-gold text-xs uppercase tracking-widest">{projects[selectedImage].category}</span>
              <h3 className="text-xl font-serif font-bold">{projects[selectedImage].title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
