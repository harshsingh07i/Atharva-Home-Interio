"use client";

import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  { name: "Rajesh Kumar", text: "Absolutely stunning work! Our Project Atharva transformed our living room into a magazine-worthy space. The attention to detail exceeded our expectations.", rating: 5 },
  { name: "Priya Sharma", text: "Best interior designers in Varanasi! They understood our vision perfectly and delivered a modern kitchen that is both beautiful and functional.", rating: 5 },
  { name: "Amit Verma", text: "Professional team with incredible creativity. Our office space redesign boosted team morale significantly. Modern, sleek, and perfectly balanced.", rating: 5 },
  { name: "Neha Gupta", text: "From wardrobe design to complete bedroom renovation, everything was handled flawlessly. Responsive, creative, and delivers on time.", rating: 5 },
  { name: "Vikram Singh", text: "We hired them for our restaurant interior and the results were phenomenal. Our customers love the new ambiance!", rating: 4 },
  { name: "Ananya Tiwari", text: "Exceptional bathroom redesign! They turned a simple bathroom into a spa-like retreat. Premium fixtures and beautiful tile work.", rating: 5 },
];

export default function Reviews() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="reviews" className="relative py-24 md:py-32 overflow-hidden" style={{ background: 'var(--background)' }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        <div className="text-center mb-14">
          <p className="text-gold uppercase tracking-[0.3em] text-xs mb-3 font-medium">Testimonials</p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Client <span className="text-gradient">Reviews</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-3">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>4.9</span>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="glass rounded-2xl p-6 md:p-10 text-center box-glow">
            <Quote className="w-8 h-8 text-gold/20 mx-auto mb-5" />
            <p className="text-base md:text-lg leading-relaxed italic mb-6" style={{ color: 'var(--text-secondary)' }}>
              &ldquo;{reviews[current].text}&rdquo;
            </p>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(reviews[current].rating)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
              ))}
            </div>
            <h4 className="font-semibold" style={{ color: 'var(--text-primary)' }}>{reviews[current].name}</h4>
            <p className="text-gold text-xs">Verified Customer</p>
          </div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={() => setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length)}
              className="glass w-10 h-10 rounded-full flex items-center justify-center hover:bg-gold/10 transition-colors border border-gold/15"
            >
              <ChevronLeft className="w-4 h-4 text-gold" />
            </button>
            <div className="flex gap-1.5">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === current ? "bg-gold w-5" : "bg-gray-700 w-1.5 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrent((prev) => (prev + 1) % reviews.length)}
              className="glass w-10 h-10 rounded-full flex items-center justify-center hover:bg-gold/10 transition-colors border border-gold/15"
            >
              <ChevronRight className="w-4 h-4 text-gold" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
