import { motion } from "framer-motion";
import { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
    <motion.form
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="bg-muted backdrop-blur-md p-8 rounded-2xl shadow-lg flex flex-col"
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
  );
};
export default ContactForm;
