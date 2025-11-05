import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { scrollSpy } from "react-scroll";
import ThemeToggle from "../Theme/ThemeToggle";

import Logo from "./Logo/Logo";
import DesktopNav from "./DesktopNav/DesktopNav";
import MobileMenuToggle from "./MobileMenuToggle/MobileMenuToggle";
import MobileNav from "./MobileNav/MobileNav";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

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
        <div className="flex items-center gap-2">
          <Logo />
          <ThemeToggle />
        </div>
        <DesktopNav />
        <MobileMenuToggle menuOpen={menuOpen} toggleMenu={toggleMenu} />
      </div>
      {menuOpen && <MobileNav closeMenu={closeMenu} />}
    </motion.header>
  );
}
