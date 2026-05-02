"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const lastScrollY = useRef(0);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setAtTop(currentY < 20);

      if (currentY < 20) {
        setVisible(true);
      } else if (currentY > lastScrollY.current && currentY > 80) {
        // Scrolling down
        setVisible(false);
        setIsOpen(false);
      } else if (currentY < lastScrollY.current) {
        // Scrolling up
        setVisible(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
          visible ? "translate-y-0" : "-translate-y-full"
        } ${
          atTop ? "py-5 bg-transparent" : "py-3 nav-glass"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex justify-between items-center">
          {/* Brand */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="text-xl md:text-2xl font-serif font-bold text-gradient shrink-0"
          >
            Atharva Home Interio
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs uppercase tracking-[0.15em] nav-link-text hover:text-gold transition-colors whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-8 h-8 rounded-full flex items-center justify-center nav-glass-btn transition-all"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun size={14} className="text-gold" />
              ) : (
                <Moon size={14} className="text-gold" />
              )}
            </button>

            <a
              href="tel:+919140394734"
              className="flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold px-4 py-2 rounded-full text-xs font-medium hover:bg-gold hover:text-black transition-all whitespace-nowrap"
            >
              <Phone size={14} />
              Call Now
            </a>
          </div>

          {/* Mobile: Theme toggle + Hamburger */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={toggleTheme}
              className="w-8 h-8 rounded-full flex items-center justify-center nav-glass-btn transition-all"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun size={14} className="text-gold" />
              ) : (
                <Moon size={14} className="text-gold" />
              )}
            </button>
            <button
              className="nav-link-text p-1"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Full screen dark overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 mobile-menu-bg flex flex-col items-center justify-center gap-6 lg:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                className="text-2xl font-serif font-medium nav-link-text hover:text-gold transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              href="tel:+919140394734"
              className="flex items-center gap-2 bg-gold text-black px-6 py-3 rounded-full font-medium text-sm mt-4"
            >
              <Phone size={16} />
              +91 91403 94734
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
