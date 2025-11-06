import type { JSX } from "react";
import type { IconType } from "react-icons";

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

export interface Review {
  name: string;
  rating: number;
  originalText?: { text: string; languageCode: string };
  relativePublishTimeDescription: string;
  authorAttribution: {
    displayName: string;
    photoUri?: string;
  };
}

export interface Contact {
  href: string;
  icon: IconType;
  label: string;
}
