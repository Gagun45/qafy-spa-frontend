import { motion } from "framer-motion";
import { buttonVariants } from "../ui/button";

export default function About() {
  return (
    <section id="about" className="relative py-20 px-6">
      {/* Subtle background gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/about-us.jpg"
              alt="Our repair team at work"
              className="object-cover w-full h-[380px]"
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About <span className="text-primary">Qafy Mobile</span>
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            At Qafy Mobile, we’re passionate about bringing your devices back to
            life. Since our start in <strong>2018</strong>, we’ve repaired
            thousands of smartphones, tablets, and computers — always focusing
            on quality, transparency, and customer satisfaction.
          </p>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Our team of certified technicians combines years of hands-on
            experience with the latest diagnostic tools to ensure every repair
            meets the highest standards. Whether it’s a simple battery swap or a
            complex motherboard issue, we’ve got you covered.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className={`${buttonVariants()} w-full`}
          >
            Contact Us
          </motion.a>
        </motion.div>
      </div>

      {/* Decorative glow shapes */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.25, scale: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="absolute bottom-10 right-10 w-48 h-48 bg-blue-300 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.25, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        viewport={{ once: true }}
        className="absolute top-10 left-10 w-56 h-56 bg-cyan-300 rounded-full blur-3xl"
      />
    </section>
  );
}
