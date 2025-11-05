import { Button, buttonVariants } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const CTA = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="flex flex-col sm:flex-row gap-4 items-center justify-center"
    >
      <Button className="bg-primary hover:bg-primary/95 ctaBtn">
        Check Repair Status
      </Button>

      <Link
        to="contact"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        className={`${buttonVariants()} bg-foreground! text-background! ctaBtn`}
      >
        Get a Free Quote
      </Link>
    </motion.div>
  );
};
export default CTA;
