import { Wrench, Smartphone, Laptop } from "lucide-react";
import type { PricingPlan } from "@/lib/types";
import PlanCard from "./PlanCard/PlanCard";

const pricingPlans: PricingPlan[] = [
  {
    title: "Diagnostics",
    Icon: <Wrench className="size-12 mb-4" />,
    price: "Free",
    features: [
      "Full device inspection",
      "Problem report",
      "Repair quote",
      "No obligation to repair",
    ],
    bgColor: "bg-green-500",
    ringColor: "ring-green-500",
    textColor: "text-green-500",
  },
  {
    title: "Phone Repair",
    Icon: <Smartphone className="size-12 mb-4" />,
    price: "from $49",
    features: [
      "Screen replacement",
      "Battery replacement",
      "Charging port fix",
      "Water damage recovery",
    ],

    bgColor: "bg-primary",
    ringColor: "ring-primary",
    textColor: "text-primary",
  },
  {
    title: "Laptop Repair",
    Icon: <Laptop className="size-12 mb-4" />,
    price: "from $69",
    features: [
      "Keyboard replacement",
      "SSD / HDD upgrade",
      "Motherboard repair",
      "System reinstall",
    ],
    bgColor: "bg-chart-3",
    ringColor: "ring-chart-3",
    textColor: "text-chart-3",
  },
];

const PlansGrid = () => {
  return (
    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-4">
      {pricingPlans.map((plan, index) => (
        <PlanCard index={index} plan={plan} key={plan.title} />
      ))}
    </div>
  );
};
export default PlansGrid;
