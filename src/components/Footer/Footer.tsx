// import { motion } from "framer-motion";
import { Facebook, Instagram, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative py-12 px-6 bg-accent">
      {/* background glow */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.15 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 aspect-square h-full bg-primary rounded-full blur-3xl"
      /> */}

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Column 1: Brand */}
        <div>
          <h3 className="text-2xl font-bold mb-3">Qafy Mobile</h3>
          <p className="text-muted-foreground">
            Fast and reliable repair service for phones, PCs, and laptops.  
            Your tech, restored to life ⚡
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {[
              { href: "#home", label: "Home" },
              { href: "#services", label: "Services" },
              { href: "#about", label: "About" },
              { href: "#pricing", label: "Pricing" },
              { href: "#contact", label: "Contact" },
            ].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact / Social */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
          <ul className="space-y-3">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Phone size={18} className="text-primary" />
              +380 (00) 123 4567
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Mail size={18} className="text-primary" />
              support@qafymobile.com
            </li>
          </ul>

          <div className="flex justify-center md:justify-start gap-4 mt-5">
            <a
              href="#"
              target="_blank"
              className="p-2 rounded-lg bg-white/10 hover:bg-blue-500 hover:text-white transition-colors"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              target="_blank"
              className="p-2 rounded-lg bg-white/10 hover:bg-pink-500 hover:text-white transition-colors"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Qafy Mobile. All rights reserved.
      </div>
    </footer>
  );
}
