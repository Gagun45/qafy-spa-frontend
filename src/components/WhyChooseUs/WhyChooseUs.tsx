import { motion } from "framer-motion";
import FeaturesGrid from "./FeaturesGrid/FeaturesGrid";

export default function WhyChooseUs() {
  return (
    <section id="why" className="relative py-20 px-6">
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Why <span className="text-primary">Choose Us</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="sectionSubtitle"
        >
          With years of experience and a passion for technology, we provide the
          best repair service in town — fast, reliable, and transparent.
        </motion.p>

        <FeaturesGrid />
      </div>
    </section>
  );
}
