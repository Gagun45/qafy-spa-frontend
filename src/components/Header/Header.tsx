import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Us" },
  { href: "#about", label: "About" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // add shadow when scrolling
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolled ? "bg-gray-900/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo / Brand */}
        <a href="#home" className="text-white font-bold text-2xl">
          Qafy<span className="text-blue-400">Mobile</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA button (right corner) */}
        <a
          href="#contact"
          className="hidden md:inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-5 py-2 rounded-xl transition-colors"
        >
          Get Quote
        </a>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen((p) => !p)}
          className="md:hidden text-gray-200"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-900/95 backdrop-blur-md px-6 pb-6"
          >
            <ul className="flex flex-col space-y-4 mt-4 text-gray-200">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block w-full hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="inline-block w-full bg-blue-500 hover:bg-blue-600 text-center text-white py-2 rounded-xl font-semibold transition-colors"
                >
                  Get Quote
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
