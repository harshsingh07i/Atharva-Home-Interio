"use client";

import { Phone, MessageCircle, MapPin, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative pt-16 pb-6 border-t" style={{ background: 'var(--background)', borderColor: 'var(--glass-border)' }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="sm:col-span-2">
            <h3 className="text-2xl font-serif font-bold text-gradient mb-3">Our Project Atharva</h3>
            <p className="text-sm leading-relaxed max-w-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
              Transforming spaces into luxurious experiences. Premium interior design services in
              Varanasi, crafted with passion and precision.
            </p>
            <div className="flex gap-2">
              <a href="tel:+919628616168" className="glass px-3.5 py-1.5 rounded-full flex items-center gap-1.5 text-xs border border-gold/15 hover:border-gold/30 transition-colors">
                <Phone size={12} className="text-gold" />
                <span style={{ color: 'var(--text-secondary)' }}>Call</span>
              </a>
              <a href="https://wa.me/919628616168" target="_blank" rel="noopener noreferrer" className="glass px-3.5 py-1.5 rounded-full flex items-center gap-1.5 text-xs border border-green-500/15 hover:border-green-500/30 transition-colors">
                <MessageCircle size={12} className="text-green-400" />
                <span style={{ color: 'var(--text-secondary)' }}>WhatsApp</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-xs uppercase tracking-wider" style={{ color: 'var(--text-primary)' }}>Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Portfolio", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="hover:text-gold transition-colors text-sm" style={{ color: 'var(--text-secondary)' }}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-xs uppercase tracking-wider" style={{ color: 'var(--text-primary)' }}>Top Services</h4>
            <ul className="space-y-2">
              {["Interior Design", "Kitchen Design", "Bedroom Design", "Office Interior", "Wardrobe Design"].map((service) => (
                <li key={service}>
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t gap-2" style={{ borderColor: 'var(--glass-border)' }}>
          <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--text-muted)' }}>
            <MapPin size={12} className="text-gold" />
            <span>Panchkoshi Rd, Pandeypur, Varanasi – 221002</span>
          </div>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} Our Project Atharva. All rights reserved.
          </p>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 glass w-10 h-10 rounded-full flex items-center justify-center border border-gold/15 hover:border-gold/40 hover:bg-gold/10 transition-all"
      >
        <ArrowUp className="w-4 h-4 text-gold" />
      </button>
    </footer>
  );
}
