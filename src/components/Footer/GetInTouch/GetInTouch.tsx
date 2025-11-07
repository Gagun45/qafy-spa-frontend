import { CONTACT_INFO, SOCIALS_LINKS } from "@/lib/constants";
// import { FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa6";

const GetInTouch = () => {
  return (
    <div className="space-y-4">
      <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
      <ul className="space-y-4">
        {CONTACT_INFO.map((contact) => (
          <li
            key={contact.label}
            className="flex justify-center hover:underline underline-offset-2 md:justify-start"
          >
            <a
              href={contact.href}
              target="_blank"
              className="flex items-center justify-center gap-2"
            >
              <contact.icon className="text-primary size-6" />
              <span>{contact.label}</span>
            </a>
          </li>
        ))}
      </ul>

      <ul className="flex justify-center items-center md:justify-start gap-8 flex-wrap">
        {/* <li className={`cursor-pointer text-telegram`}>
          <a href={"tg://resolve?domain=Qafy_mobile"} target="_blank">
            <FaTelegram className="size-8" />
          </a>
        </li>
        <li className={`cursor-pointer text-instagram`}>
          <a href={"https://www.instagram.com/qafy.mobile"} target="_blank">
            <FaInstagram className="size-8" />
          </a>
        </li>
        <li className={`cursor-pointer text-whatsapp`}>
          <a href={"https://wa.me/+4915140164020"} target="_blank">
            <FaWhatsapp className="size-8" />
          </a>
        </li> */}
        {SOCIALS_LINKS.map((contact) => (
          <li
            key={contact.label}
            className={`cursor-pointer text-${contact.label.toLowerCase()}`}
          >
            <a href={contact.href} target="_blank">
              <contact.icon className="size-6" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default GetInTouch;
