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
