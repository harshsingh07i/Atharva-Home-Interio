"use client";

import { motion } from "framer-motion";
import { Award, Clock, Users, Sparkles } from "lucide-react";

const stats = [
  { icon: Award, label: "Years of Excellence", value: "10+" },
  { icon: Users, label: "Happy Clients", value: "500+" },
  { icon: Sparkles, label: "Projects Delivered", value: "1000+" },
  { icon: Clock, label: "Available", value: "24/7" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden" style={{ background: 'var(--background)' }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gold uppercase tracking-[0.3em] text-xs mb-3 font-medium">About Us</p>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-5 leading-tight" style={{ color: 'var(--text-primary)' }}>
              Crafting Spaces That <span className="text-gradient">Define Elegance</span>
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
              At Our Project Atharva, we believe every space tells a story. Based in the heart of Varanasi,
              we bring together traditional artistry and modern design sensibilities to create interiors
              that are both timeless and contemporary.
            </p>
            <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
              From luxurious living rooms to functional office spaces, our team of expert designers
              transforms your vision into reality with precision, creativity, and an unwavering
              commitment to quality.
            </p>
            <div className="flex items-center gap-3">
              <div className="h-[1px] w-10 bg-gold" />
              <span className="text-gold text-xs font-medium tracking-wide">
                Panchkoshi Rd, Pandeypur, Varanasi
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass rounded-2xl p-5 text-center box-glow hover:-translate-y-1 transition-transform duration-300 cursor-default"
              >
                <stat.icon className="w-7 h-7 text-gold mx-auto mb-2" />
                <h3 className="text-2xl md:text-3xl font-bold mb-0.5" style={{ color: 'var(--text-primary)' }}>{stat.value}</h3>
                <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
