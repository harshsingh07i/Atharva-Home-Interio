"use client";

import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden" style={{ background: 'var(--background)' }}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        <div className="text-center mb-14">
          <p className="text-gold uppercase tracking-[0.3em] text-xs mb-3 font-medium">Get In Touch</p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
            Start Your <span className="text-gradient">Dream Project</span>
          </h2>
          <p className="max-w-lg mx-auto text-base" style={{ color: 'var(--text-secondary)' }}>
            Ready to transform your space? Reach out to us today.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {/* CTA Buttons */}
          <div className="grid sm:grid-cols-2 gap-4">
            <a
              href="tel:+919140394734"
              className="glass rounded-2xl p-5 flex items-center gap-4 box-glow border border-gold/10 hover:border-gold/30 transition-all block"
            >
              <div className="w-11 h-11 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-gold" />
              </div>
              <div className="min-w-0">
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Call Now</p>
                <p className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>+91 91403 94734</p>
              </div>
            </a>

            <a
              href="https://wa.me/919140394734"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-2xl p-5 flex items-center gap-4 box-glow border border-green-500/10 hover:border-green-500/30 transition-all block"
            >
              <div className="w-11 h-11 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5 text-green-400" />
              </div>
              <div className="min-w-0">
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>WhatsApp Inquiry</p>
                <p className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>Chat with us on WhatsApp</p>
              </div>
            </a>
          </div>

          {/* Address & Hours */}
          <div className="glass rounded-2xl p-5 space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
              <div className="min-w-0">
                <p className="text-xs mb-0.5" style={{ color: 'var(--text-muted)' }}>Address</p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                  Panchkoshi Rd, Keshav Vihar Colony, Pandeypur, Paharia,
                  Varanasi, Uttar Pradesh – 221002
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-gold mt-0.5 shrink-0" />
              <div className="min-w-0">
                <p className="text-xs mb-0.5" style={{ color: 'var(--text-muted)' }}>Business Hours</p>
                <p className="text-sm" style={{ color: 'var(--text-primary)' }}>Open 24 Hours — Every Day</p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-white/5 h-[280px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.646244965569!2d83.0019926!3d25.349649099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2e7c91b17849%3A0x258f2d118ac85fc3!2sAtharva%20Home%20Interio!5e0!3m2!1sen!2sin!4v1777481778917!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'var(--map-filter)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Atharva Home Interio Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
