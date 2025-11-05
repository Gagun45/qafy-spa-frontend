import { Button } from "@/components/ui/button";
import type { PricingPlan } from "@/lib/types";
import { motion } from "framer-motion";

interface Props {
  plan: PricingPlan;
  index: number;
}

const PlanCard = ({ index, plan }: Props) => {
  const { Icon, features, price, title, bgColor, ringColor, textColor } = plan;

  return (
    <motion.div
      key={title}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className={`border bg-transparent rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ring ${ringColor}`}
    >
      <div className="flex flex-col items-center mb-6">
        {Icon}
        <h3 className="text-xl font-semibold mb-1">{title}</h3>
        <p className={`${textColor} font-bold text-2xl`}>{price}</p>
      </div>

      <ul className="text-left space-y-3 mb-8">
        {features.map((feature, idx) => (
          <li
            key={idx}
            className="flex items-center gap-2 text-muted-foreground"
          >
            <span className={textColor}>✔</span>
            {feature}
          </li>
        ))}
        <li className="italic text-muted-foreground">And more...</li>
      </ul>
      <Button className={`w-full ${bgColor} font-semibold text-lg hover:${bgColor}`}>
        Get Quote
      </Button>
    </motion.div>
  );
};
export default PlanCard;
