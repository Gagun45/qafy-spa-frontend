import { motion } from "framer-motion";
import { FaTools } from "react-icons/fa";
import CTA from "./CTA/CTA";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center 
      min-h-[calc(100vh-96px)] bg-linear-to-b from-muted to-background
      text-center"
    >
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 max-w-3xl"
      >
        {/* Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <FaTools className="text-5xl text-primary" />
        </motion.div>

        {/* Title */}
        <h1 className="text-4xl sm:text-6xl font-bold leading-tight mb-4">
          Fast & Reliable <br />
          <span className="text-primary">PC & Phone Repair</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl mb-8">
          We fix all major brands — same day service available. Trusted by
          hundreds of happy customers.
        </p>

        {/* Call to action buttons */}
        <CTA />
      </motion.div>
    </section>
  );
};
export default Hero;
