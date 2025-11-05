// import { motion } from "framer-motion";
import { LINKS } from "@/lib/constants";
import { Facebook, Instagram, Phone, Mail } from "lucide-react";
import SmoothLink from "../SmoothLink/SmoothLink";

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-background">
      <div className="z-10 max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Column 1: Brand */}
        <div>
          <h3 className="text-2xl font-bold mb-3">Qafy Mobile</h3>
          <p className="text-muted-foreground">
            Fast and reliable repair service for phones, PCs, and laptops. Your
            tech, restored to life ⚡
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {LINKS.map((link) => (
              <li key={link.href}>
                <SmoothLink className="text-muted-foreground underline" spy={false} to={link.href}>
                  {link.label}
                </SmoothLink>
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
