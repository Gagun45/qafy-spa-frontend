import { motion } from "framer-motion";
import PlansGrid from "./PlansGrid/PlansGrid";

export default function Pricing() {
  return (
    <section id="pricing">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Transparent & Fair Pricing
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="sectionSubtitle"
        >
          We keep things simple — no hidden fees, no surprises. Just expert
          repair service you can trust.
        </motion.p>
      </div>

      <PlansGrid />
    </section>
  );
}
