import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Olena K.",
    text: "Super fast and friendly service! My iPhone screen was replaced in under an hour. Highly recommend Qafy Mobile 💙",
    rating: 5,
    photo: "/avatars/olena.jpg",
  },
  {
    name: "Andrii M.",
    text: "Great prices and honest staff. They explained the issue with my laptop clearly and fixed it the same day.",
    rating: 5,
    photo: "/avatars/andrii.jpg",
  },
  {
    name: "Sofiia R.",
    text: "I’ve tried other repair shops before, but this one is on another level. Professional and trustworthy team!",
    rating: 5,
    photo: "/avatars/sofiia.jpg",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-6 bg-gray-50 text-gray-900">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          What Our Clients Say
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 max-w-2xl mx-auto"
        >
          Real feedback from people who trusted us with their devices.
        </motion.p>
      </div>

      {/* Testimonials grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={t.photo}
                alt={t.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div className="text-left">
                <p className="font-semibold">{t.name}</p>
                <div className="flex">
                  {[...Array(t.rating)].map((_, idx) => (
                    <Star key={idx} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-700 text-left leading-relaxed">{t.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Decorative gradient shapes */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute top-20 left-10 w-60 h-60 bg-blue-300 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
        className="absolute bottom-10 right-10 w-56 h-56 bg-cyan-300 rounded-full blur-3xl"
      />
    </section>
  );
}
