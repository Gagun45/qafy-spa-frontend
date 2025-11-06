import { FaPhone } from "react-icons/fa6";
import type { Contact, LINK } from "./types";
import { FaInstagram, FaMapMarkerAlt, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { MdMail } from "react-icons/md";

export const LINKS: LINK[] = [
  { href: "home", label: "Home" },
  { href: "services", label: "Services" },
  { href: "why", label: "Why us" },
  { href: "about", label: "About" },
  { href: "testimonials", label: "Testimonials" },
  { href: "pricing", label: "Pricing" },
  { href: "contact", label: "Contact" },
];

export const BACKEND_BASE_URL = 'https://qafy-spa-backend.onrender.com'

export const reviewLinkUrl =
  "https://www.google.com/maps/place/Qafy-Mobile/@48.9885294,12.0243309,17z/data=!4m8!3m7!1s0x479fc16245fd3555:0x37f531228e11ac2!8m2!3d48.9885294!4d12.0243309!9m1!1b1!16s%2Fg%2F11x73d1q8d?entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D";

export const SOCIALS_LINKS: Contact[] = [
  {
    href: "tg://resolve?domain=Qafy_mobile",
    icon: FaTelegram,
    label: "Telegram",
  },
  {
    href: "https://www.instagram.com/qafy.mobile",
    icon: FaInstagram,
    label: "Instagram",
  },
  {
    href: "https://wa.me/+4915140164020",
    icon: FaWhatsapp,
    label: "WhatsApp",
  },
];

export const CONTACT_INFO: Contact[] = [
  {
    href: "tel:+4915140164020",
    icon: FaPhone,
    label: "+49 1514 0164020",
  },
  {
    href: "mailto:qafy42@gmail.com",
    icon: MdMail,
    label: "qafy42@gmail.com",
  },
  {
    href: "https://maps.app.goo.gl/oPaqjkQNkuh8KHMo8?g_st=atm",
    icon: FaMapMarkerAlt,
    label: "Waldstraße 37, Sinzing, Deutschland",
  },
];
