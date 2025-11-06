import { motion } from "framer-motion";
import { buttonVariants } from "../ui/button";
import SmoothLink from "../SmoothLink/SmoothLink";

export default function About() {
  return (
    <section id="about">

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
              src="/pngegg.png"
              alt="Our repair team at work"
              className="object-contain w-full h-[380px]"
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
          <h2>
            About <span className="text-primary">Qafy Mobile</span>
          </h2>
          <p className="mb-6 leading-relaxed tracking-wide text-justify">
            At Qafy Mobile, we’re passionate about bringing your devices back to
            life. Since our start in <strong>2018</strong>, we’ve repaired
            thousands of smartphones, tablets, and computers — always focusing
            on quality, transparency, and customer satisfaction.
          </p>
          <p className="mb-8 leading-relaxed tracking-wide text-justify">
            Our team of certified technicians combines years of hands-on
            experience with the latest diagnostic tools to ensure every repair
            meets the highest standards. Whether it’s a simple battery swap or a
            complex motherboard issue, we’ve got you covered.
          </p>
          <SmoothLink
            to="contact"
            className={buttonVariants({
              className:
                "w-full text-lg! font-bold! tracking-widest",
            })}
          >
            Contact Us
          </SmoothLink>
        </motion.div>
      </div>
    </section>
  );
}
