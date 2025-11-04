import { motion } from "framer-motion";
import { Wrench, Smartphone, Laptop } from "lucide-react";

const pricingPlans = [
  {
    title: "Phone Repair",
    icon: Smartphone,
    price: "from $49",
    features: [
      "Screen replacement",
      "Battery replacement",
      "Charging port fix",
      "Water damage recovery",
    ],
    accent: "blue",
  },
  {
    title: "Laptop Repair",
    icon: Laptop,
    price: "from $69",
    features: [
      "Keyboard replacement",
      "SSD / HDD upgrade",
      "Motherboard repair",
      "System reinstall",
    ],
    accent: "cyan",
  },
  {
    title: "Diagnostics",
    icon: Wrench,
    price: "Free",
    features: [
      "Full device inspection",
      "Problem report",
      "Repair quote",
      "No obligation to repair",
    ],
    accent: "green",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-6 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Transparent & Fair Pricing
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 max-w-2xl mx-auto"
        >
          We keep things simple — no hidden fees, no surprises. Just expert repair service you can trust.
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className={`border rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
          >
            <div className="flex flex-col items-center mb-6">
              <plan.icon
                className={`w-12 h-12 text-${plan.accent}-500 mb-4`}
              />
              <h3 className="text-xl font-semibold mb-1">{plan.title}</h3>
              <p className={`text-${plan.accent}-500 font-bold text-2xl`}>
                {plan.price}
              </p>
            </div>

            <ul className="text-left space-y-3 mb-8">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-700">
                  <span className="text-green-500">✔</span>
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-3 rounded-xl bg-${plan.accent}-500 hover:bg-${plan.accent}-600 text-white font-semibold transition-colors`}
            >
              Get Quote
            </button>
          </motion.div>
        ))}
      </div>

      {/* Background accent blobs */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.15 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute top-20 left-10 w-64 h-64 bg-blue-300 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.15 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
        className="absolute bottom-10 right-10 w-64 h-64 bg-cyan-300 rounded-full blur-3xl"
      />
    </section>
  );
}
