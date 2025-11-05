import { motion } from "framer-motion";
import { FaMobileAlt, FaLaptop, FaBatteryHalf, FaDatabase } from "react-icons/fa";

const services = [
  {
    icon: <FaMobileAlt className="text-4xl text-blue-400 mb-4" />,
    title: "Smartphone Repair",
    desc: "Screens, cameras, charging ports, and more. We fix all major brands.",
  },
  {
    icon: <FaLaptop className="text-4xl text-blue-400 mb-4" />,
    title: "Laptop & PC Repair",
    desc: "Hardware and software diagnostics, upgrades, and cleaning.",
  },
  {
    icon: <FaBatteryHalf className="text-4xl text-blue-400 mb-4" />,
    title: "Battery Replacement",
    desc: "Fast and reliable replacements with high-quality batteries.",
  },
  {
    icon: <FaDatabase className="text-4xl text-blue-400 mb-4" />,
    title: "Data Recovery",
    desc: "Recover your lost data safely and securely from any device.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-20 px-6 text-center"
    >
      {/* Background accent */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Our <span className="text-primary">Repair Services</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-muted-foreground max-w-2xl mx-auto mb-12"
        >
          Whether it's a cracked screen, slow laptop, or battery issue — we’ll
          bring your device back to life quickly and professionally.
        </motion.p>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all border border-gray-100"
            >
              <div className="flex flex-col items-center">
                {service.icon}
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative gradient shapes */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="absolute -top-10 -left-10 w-40 h-40 bg-blue-300 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        viewport={{ once: true }}
        className="absolute bottom-0 right-0 w-56 h-56 bg-cyan-300 rounded-full blur-3xl"
      />
    </section>
  );
}
