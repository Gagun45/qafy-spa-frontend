import SmoothLink from "@/components/SmoothLink/SmoothLink";
import { buttonVariants } from "@/components/ui/button";
import WidgetTrigger from "@/components/Widget/WidgetTrigger";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="flex flex-col sm:flex-row gap-4 items-center justify-center"
    >
      <WidgetTrigger className="bg-primary hover:bg-primary/95 ctaBtn" />

      <SmoothLink
        to="contact"
        className={`${buttonVariants()} bg-foreground! text-background! ctaBtn`}
      >
        Get a Free Quote
      </SmoothLink>
    </motion.div>
  );
};
export default CTA;
