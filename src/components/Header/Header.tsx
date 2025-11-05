import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { scrollSpy } from "react-scroll";
import ThemeToggle from "../Theme/ThemeToggle";
import SmoothLink from "../SmoothLink/SmoothLink";
import { buttonVariants } from "../ui/button";

const navLinks = [
  { href: "home", label: "Home" },
  { href: "services", label: "Services" },
  { href: "why", label: "Why Us" },
  { href: "about", label: "About" },
  { href: "pricing", label: "Pricing" },
  { href: "contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // add shadow when scrolling
  useEffect(() => {
    scrollSpy.update();
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
      className={`sticky bg-muted top-0 left-0 w-full z-50 h-24 flex items-center  ${
        scrolled && "backdrop-blur-md shadow-md"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6 w-full">
        {/* Logo / Brand */}
        <div className="flex items-center gap-2">
          <SmoothLink to="home" spy={false} className="font-bold text-2xl">
            Qafy Mobile
          </SmoothLink>
          <ThemeToggle />
        </div>

        {/* Desktop nav */}
        <nav className="hidden lg:flex space-x-8">
          {navLinks.map((link) => (
            <SmoothLink to={link.href} key={link.href}>
              {link.label}
            </SmoothLink>
          ))}
        </nav>

        {/* CTA button (right corner) */}
        <SmoothLink
          to="contact"
          spy={false}
          className={`${buttonVariants()} hidden! lg:flex! bg-foreground! text-background! font-semibold`}
        >
          Get Quote
        </SmoothLink>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen((p) => !p)}
          className="lg:hidden cursor-pointer"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="lg:hidden bg-muted border-t border-b border-foreground backdrop-blur-md px-6 pb-6 absolute top-24 w-full -z-10!"
          >
            <ul className="flex flex-col space-y-4 tracking-wider mt-4 items-center">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <SmoothLink
                    onClick={() => setMenuOpen(false)}
                    spy={false}
                    to={link.href}
                  >
                    {link.label}
                  </SmoothLink>
                </li>
              ))}
              <li>
                <SmoothLink
                  to="contact"
                  spy={false}
                  onClick={() => setMenuOpen(false)}
                  className={`${buttonVariants()}`}
                >
                  Get Quote
                </SmoothLink>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
