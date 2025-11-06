import { motion } from "framer-motion";
import ContactsContainer from "./Contacts/Contacts";
import ContactForm from "./Contacts/ContactForm/ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="bg-linear-to-b from-background to-muted">
      {/* Glow background */}

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 z-10">
        {/* Text section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <h2>Get a Free Quote</h2>
          <p className="sectionSubtitle">
            Need a repair or want to know the price? Fill out the form and we’ll
            get back to you shortly.
          </p>

          <ContactsContainer />
        </motion.div>
        <ContactForm />
      </div>
    </section>
  );
}
