import { motion } from "framer-motion";
import { FaShieldAlt, FaClock, FaMedal, FaTools } from "react-icons/fa";

const reasons = [
  {
    icon: <FaShieldAlt className="text-4xl mb-4" />,
    title: "Warranty on All Repairs",
    desc: "We stand behind our work. Every repair comes with a warranty for your peace of mind.",
  },
  {
    icon: <FaClock className="text-4xl mb-4" />,
    title: "Fast Turnaround",
    desc: "Most devices are fixed the same day, so you can get back to what matters quickly.",
  },
  {
    icon: <FaMedal className="text-4xl mb-4" />,
    title: "Certified Technicians",
    desc: "Our experts are trained to handle all major brands and models with care and precision.",
  },
  {
    icon: <FaTools className="text-4xl mb-4" />,
    title: "High-Quality Parts",
    desc: "We use only premium components to ensure your device performs like new again.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why"
      className="relative py-20 px-6 bg-linear-to-b from-muted to-background"
    >
      {/* Subtle background accent */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Why <span className="text-primary">Choose Us</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-12"
        >
          With years of experience and a passion for technology, we provide the
          best repair service in town — fast, reliable, and transparent.
        </motion.p>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-muted rounded-2xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all ring ring-muted-foreground/25"
            >
              <div className="flex flex-col items-center text-foreground text-center">
                {item.icon}
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative blur shapes */}
      {/* <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.25, scale: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="absolute bottom-10 z-5 right-10 w-44 h-44 bg-blue-300 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.25, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        viewport={{ once: true }}
        className="absolute top-10 left-10 w-56 h-56 bg-cyan-300 rounded-full blur-3xl"
      /> */}
    </section>
  );
}
