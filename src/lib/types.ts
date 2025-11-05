import type { JSX } from "react";

export interface LINK {
  href: string;
  label: string;
}

export interface Service {
  icon: JSX.Element;
  title: string;
  desc: string;
}

export interface Feature {
  icon: JSX.Element;
  title: string;
  desc: string;
}

export interface PricingPlan {
  title: string;
  Icon: JSX.Element;
  price: string;
  features: string[];
  bgColor: string;
  ringColor: string;
  textColor: string;
}
