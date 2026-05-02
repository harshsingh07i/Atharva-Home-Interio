"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center" style={{ background: 'var(--background)' }}>
      {/* Animated Background - Performant CSS-only */}
      <div className="absolute inset-0 z-0">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
        <div className="hero-orb hero-orb-4" />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(212,175,55,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.3) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-[1] pointer-events-none" style={{ background: 'linear-gradient(to top, var(--background), transparent, transparent)' }} />
      <div className="absolute inset-0 z-[1] pointer-events-none" style={{ background: 'linear-gradient(to bottom, var(--background), transparent, transparent)', opacity: 0.7 }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-gold uppercase tracking-[0.4em] text-xs md:text-sm mb-6 font-medium"
          >
            Premium Interior Design • Varanasi
          </motion.p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold leading-[1.1] mb-6 text-glow" style={{ color: 'var(--text-primary)' }}>
            Design Your Dream<br />Space with{" "}
            <span className="text-gradient">Luxury<br className="sm:hidden" /> & Precision</span>
          </h1>

          <p className="text-base md:text-lg mb-10 max-w-xl mx-auto font-light leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            We craft premium, glamorous, and perfectly balanced interiors in Varanasi.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="tel:+919628616168"
              className="flex items-center justify-center gap-2 bg-gold text-black px-8 py-4 rounded-full font-semibold text-base w-full sm:w-auto transition-all"
              style={{ boxShadow: '0 0 30px rgba(212,175,55,0.3)' }}
            >
              <Phone size={18} />
              Call Now
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="https://wa.me/919628616168"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 glass border border-gold/30 px-8 py-4 rounded-full font-semibold text-base w-full sm:w-auto hover:bg-gold/10 transition-all"
              style={{ color: 'var(--text-primary)' }}
            >
              <MessageCircle size={18} className="text-green-400" />
              WhatsApp Inquiry
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] mb-2" style={{ color: 'var(--text-muted)' }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-10 bg-gradient-to-b from-gold/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
