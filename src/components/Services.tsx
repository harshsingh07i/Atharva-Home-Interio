"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Sofa, PaintBucket, Building2, LayoutGrid, DoorOpen, Lamp,
  BedDouble, ChefHat, UtensilsCrossed, Droplets, Palette,
  Armchair, FlameKindling, AppWindow, Boxes, Home, Hotel,
  Layers, PenTool, Hammer, Frame, Gem, Store, Compass,
} from "lucide-react";

const services = [
  { icon: Sofa, title: "Interior Design", desc: "Complete interior transformation with premium finishes" },
  { icon: DoorOpen, title: "Wardrobe Design", desc: "Custom wardrobes that maximize space and style" },
  { icon: Building2, title: "Interior Architectural Design", desc: "Structural beauty meets functional brilliance" },
  { icon: Palette, title: "Interior Decorating", desc: "Curated decor for a polished, magazine-worthy look" },
  { icon: Building2, title: "Office Space Design", desc: "Productive and inspiring workspaces" },
  { icon: LayoutGrid, title: "Room Planning", desc: "Smart layouts that optimize every square foot" },
  { icon: Boxes, title: "Cabinetry & Hardware", desc: "Premium cabinetry crafted with precision" },
  { icon: AppWindow, title: "Window Design", desc: "Elegant windows that frame your world" },
  { icon: Home, title: "Home Decor Selection", desc: "Hand-picked decor pieces for a cohesive look" },
  { icon: Frame, title: "Custom Art Selection", desc: "Art that speaks to your space and soul" },
  { icon: PaintBucket, title: "Interior Painting", desc: "Color palettes that set the perfect mood" },
  { icon: FlameKindling, title: "Appliance Selection", desc: "Top-tier appliances for modern living" },
  { icon: Hammer, title: "Refurbishment", desc: "Breathe new life into existing spaces" },
  { icon: UtensilsCrossed, title: "Dining Room Design", desc: "Spaces where every meal feels special" },
  { icon: DoorOpen, title: "Door Design", desc: "Grand entrances and elegant passages" },
  { icon: Layers, title: "Stone, Brick & Stucco", desc: "Textured walls with character and depth" },
  { icon: Droplets, title: "Bathroom Design", desc: "Spa-inspired bathrooms for daily luxury" },
  { icon: BedDouble, title: "Bedroom Design", desc: "Serene sanctuaries for rest and rejuvenation" },
  { icon: ChefHat, title: "Kitchen Design", desc: "Culinary spaces designed for joy and efficiency" },
  { icon: Store, title: "Restaurant Design", desc: "Unforgettable dining atmospheres" },
  { icon: Lamp, title: "Lighting Design", desc: "Ambient lighting that transforms the mood" },
  { icon: Armchair, title: "Living Room Design", desc: "Living spaces that radiate warmth and style" },
  { icon: Gem, title: "Commercial Interior Design", desc: "Professional spaces that make a statement" },
  { icon: Layers, title: "Flooring Selection", desc: "Premium floors that anchor your design" },
  { icon: Compass, title: "Space Planning", desc: "Intelligent spatial flow and optimization" },
  { icon: Hotel, title: "Hospitality Design", desc: "Welcoming interiors for hotels and resorts" },
  { icon: BedDouble, title: "Hall Interior", desc: "Grand hall designs that leave lasting impressions" },
  { icon: ChefHat, title: "Kitchen Interior", desc: "Functional and beautiful kitchen spaces" },
  { icon: PenTool, title: "Kitchen Interior Design", desc: "Complete kitchen makeovers with modern aesthetics" },
  { icon: Building2, title: "Office Interior", desc: "Offices that boost morale and productivity" },
];

export default function Services() {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? services : services.slice(0, 12);

  return (
    <section id="services" className="relative py-24 md:py-32 overflow-hidden" style={{ background: 'var(--background)' }}>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-gold uppercase tracking-[0.3em] text-xs mb-3 font-medium">What We Offer</p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="max-w-lg mx-auto text-base" style={{ color: 'var(--text-secondary)' }}>
            From concept to completion, we deliver a comprehensive suite of interior design services.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {displayed.map((service) => (
            <div
              key={service.title}
              className="glass rounded-xl p-4 md:p-5 group cursor-default hover:-translate-y-1 hover:border-gold/20 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-3 group-hover:bg-gold/20 transition-colors">
                <service.icon className="w-5 h-5 text-gold" />
              </div>
              <h3 className="text-sm font-semibold mb-1 group-hover:text-gold transition-colors leading-tight" style={{ color: 'var(--text-primary)' }}>
                {service.title}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>{service.desc}</p>
            </div>
          ))}
        </motion.div>

        {services.length > 12 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="glass border border-gold/20 text-gold px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gold/10 transition-all"
            >
              {showAll ? "Show Less" : `View All ${services.length} Services`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
