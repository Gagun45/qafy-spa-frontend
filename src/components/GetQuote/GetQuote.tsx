import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission (replace with email API / backend action)
    console.log(form);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-20 px-6 bg-gray-900 text-white">
      {/* Glow background */}
      <div className="absolute inset-0 bg-[url('/contact-bg.jpg')] bg-cover bg-center opacity-10" />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 z-10">
        {/* Text section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get a Free Quote</h2>
          <p className="text-gray-300 mb-6">
            Need a repair or want to know the price? Fill out the form and we’ll get back to you shortly.
          </p>

          <ul className="space-y-4 text-gray-300">
            <li className="flex items-center gap-3">
              <Phone className="text-blue-400" /> +380 (00) 123 4567
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-blue-400" /> support@qafymobile.com
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="text-blue-400" /> 123 Main St, Kyiv, Ukraine
            </li>
          </ul>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg flex flex-col"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm mb-1 font-medium">
              Name
            </label>
            <input
              required
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-gray-700 focus:outline-none focus:border-blue-400"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm mb-1 font-medium">
              Email
            </label>
            <input
              required
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-gray-700 focus:outline-none focus:border-blue-400"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm mb-1 font-medium">
              Message
            </label>
            <textarea
              required
              id="message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-gray-700 focus:outline-none focus:border-blue-400"
            />
          </div>

          <motion.button
            type="submit"
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 hover:bg-blue-600 transition-colors text-white font-semibold py-3 rounded-xl shadow-md"
          >
            Send Message
          </motion.button>

          {submitted && (
            <p className="mt-4 text-green-400 font-medium">
              ✅ Message sent! We'll get back to you soon.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
