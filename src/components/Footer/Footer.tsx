// import { motion } from "framer-motion";

import GetInTouch from "./GetInTouch/GetInTouch";
import QuickLinks from "./QuickLinks/QuickLinks";

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
        <QuickLinks />

        {/* Column 3: Contact / Social */}
        <GetInTouch />
      </div>

      <div className="relative z-10 border-t border-accent-foreground mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Qafy Mobile. All rights reserved.
      </div>
    </footer>
  );
}
