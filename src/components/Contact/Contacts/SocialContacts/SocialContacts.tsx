import { SOCIALS_LINKS } from "@/lib/constants";
// import { FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa6";
import ContactCard from "../ContactCard/ContactCard";

const SocialContacts = () => {
  return (
    <ul className="flex gap-6 flex-wrap flex-col md:flex-row">
      {/* <li className="w-fit text-left hover:underline underline-offset-2">
        <a
          href={"tg://resolve?domain=Qafy_mobile"}
          target="_blank"
          className="flex items-center gap-2"
        >
          <FaTelegram className={`text-telegram size-6`} /> Telegram
        </a>
      </li>
      <li className="w-fit text-left hover:underline underline-offset-2">
        <a
          href={"https://www.instagram.com/qafy.mobile"}
          target="_blank"
          className="flex items-center gap-2"
        >
          <FaInstagram className={`text-instagram size-6`} /> Instagram
        </a>
      </li>
      <li className="w-fit text-left hover:underline underline-offset-2">
        <a
          href={"tg://resolve?domain=Qafy_mobile"}
          target="_blank"
          className="flex items-center gap-2"
        >
          <FaWhatsapp className={`text-whatsapp size-6`} /> WhatsApp
        </a>
      </li> */}
      {SOCIALS_LINKS.map((contact) => (
        <ContactCard
          contact={contact}
          iconColor={`text-${contact.label.toLowerCase()}`}
        />
      ))}
    </ul>
  );
};
export default SocialContacts;
