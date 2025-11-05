import { motion } from "framer-motion";
import { FaTools } from "react-icons/fa";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center 
      min-h-screen bg-linear-to-b from-primary to-background
      text-center px-6"
    >

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <FaTools className="text-5xl text-primary" />
        </motion.div>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Fast & Reliable <br />
          <span className="text-primary">PC & Phone Repair</span>
        </h1>

        <p className="text-gray-300 text-lg md:text-xl mb-8">
          We fix all major brands — same day service available. Trusted by
          hundreds of happy customers.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="bg-blue-500 hover:bg-blue-600 transition-colors px-8 py-3 rounded-xl font-semibold shadow-lg shadow-blue-500/30">
            Check Repair Status
          </button>

          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="border border-gray-400 hover:border-blue-400 hover:text-blue-400 transition-colors px-8 py-3 rounded-xl font-semibold"
          >
            Get a Free Quote
          </Link>
        </motion.div>
      </motion.div>

      {/* Decorative shapes */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.25, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.8 }}
        className="absolute bottom-10 right-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.25, scale: 1 }}
        transition={{ duration: 1.2, delay: 1 }}
        className="absolute top-10 left-10 w-40 h-40 bg-cyan-500 rounded-full blur-3xl"
      />
    </section>
  );
};
export default Hero;
